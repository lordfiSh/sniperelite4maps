$(function() {
	window.allLayers = Object.values(markers).filter(el => el !== undefined);
	
	let wayPoint = false;
	let circle = null;
	
	if(localStorage['hide-mobile-warning']) {
		$('#warn').remove();
	}
	
	if(localStorage['hide-all-' + window.map.name]) {
		$('#hide-all').hide();
		$('#show-all').show();
	}
	
	$('div#sidebar').niceScroll({
		cursorcolor: '#5E4F32',
		cursorborder: 'none',
	});
	
	$('div#info').niceScroll({
		cursorcolor: '#5E4F32',
		cursorborder: 'none',
	});
	
	$(function() {
		//fix bug where sidebar scrollbar doesn't appear when the language drop-down opens
		$('.dd-selected').on('click', function() {
			setTimeout(function() {
				$("#sidebar").getNiceScroll().resize();
			}, 500);
		});
	});
	
	var map_settings = {
		zoom: window.map.defaultZoom ?? 3,
		minZoom: window.map.minZoom ?? 2,
		maxZoom: window.map.maxZoom ?? 5,
		center: window.map.center,
		attributionControl: false,
		zoomControl: false,
		layers: allLayers,
		continuousWorld: true,
		crs: L.CRS.Simple
	};
	
	const map = L.map('map', map_settings);
	window.leafletMap = map;
	
	window.go = function(cords) {
		map.setView(cords);
		map.setZoom(map_settings.zoom);
		new L.marker(cords, {
			icon: L.icon({
				iconUrl: '../files/images/searchhover.png',
				iconSize: [22, 22]
			})
		}).addTo(map);
	};
	
	new L.Control.Zoom({
		position: 'topright',
		zoomInTitle: $.t('controls.zoom-in'),
		zoomOutTitle: $.t('controls.zoom-out')
	}).addTo(map);
	
	new L.Control.Fullscreen({
		position: 'topright',
		title: {'false': $.t('controls.fullscreen-enter'), 'true': $.t('controls.fullscreen-exit')}
	}).addTo(map);
	
	const hash = new L.Hash(map);
	const bounds = window.map.bounds;
	map.setMaxBounds(bounds);
	
	const mobile = ($('#sidebar').width() < 300);
	if(!mobile) {
		
		var searchData = [];
		$.each(allLayers, function(key, layer) {
			$.each(layer._layers, function(key, marker) {
				searchData.push({
					loc: [marker._latlng.lat, marker._latlng.lng],
					title: marker._popup._content.replace(/<h1>/, '').replace(/<\/h1>/, ' - ').replace(/\\'/g, '')
				});
			});
		});
		
		map.addControl(new L.Control.Search({
			autoResize: false,
			autoType: false,
			minLength: 2,
			position: 'topright',
			autoCollapse: false,
			zoom: 5,
			text: $.t('controls.search'),
			filterJSON: function(json) {
				return json;
			},
			callData: function(text, callResponse) {
				
				var options = {
					caseSensitive: false,
					includeScore: false,
					shouldSort: true,
					tokenize: false,
					threshold: 0.2,
					location: 0,
					distance: 10000,
					maxPatternLength: 32,
					keys: ["title"]
				};
				var fuse = new Fuse(searchData, options);
				var result = fuse.search(text);
				
				callResponse(result);
				
				setTimeout(function() {
					$('.search-tooltip').getNiceScroll().resize();
				}, 200);
				return {
					abort: function() {
						console.log('aborted request: ' + text);
					}
				};
			}
		}));
		
		$('.search-tooltip').niceScroll({
			cursorcolor: '#5E4F32',
			cursorborder: 'none',
			horizrailenabled: false
		});
	}
	
	var layer_settings = {
		tms: true,
		bounds: bounds,
		noWrap: true,
		continuousWorld: true,
		crs: L.CRS.Simple
	};
	
	L.tileLayer(window.map.tilePath, layer_settings).addTo(map);
	
	map.dragging._draggable.on('predrag', function() {
		const pos = map._initialTopLeftPoint.subtract(this._newPos);
		this._newPos = this._newPos.subtract(map._getBoundsOffset(new L.Bounds(pos, pos.add(map.getSize())), map.options.maxBounds));
	});
	
	const waypointIcon = L.icon({
		iconUrl: '../files/images/icons/marker.png',
		iconSize: [48, 48]
	});
	
	map.on('contextmenu', function(e) {
		if(!bounds.contains(e.latlng)) {
			return false;
		}
		if(wayPoint) {
			map.removeLayer(wayPoint);
		}
		wayPoint = new L.marker(e.latlng, {
			icon: waypointIcon
		}).on('click', function() {
			map.removeLayer(wayPoint);
			hash.removeParam('w');
		}).on('contextmenu', function() {
			map.removeLayer(wayPoint);
			hash.removeParam('w');
		}).addTo(map);
		hash.addParam('w', e.latlng.lat.toFixed(3) + ',' + e.latlng.lng.toFixed(3));
	});
	
	$('.leaflet-marker-icon').on('contextmenu', function(e) {
		return false;
	});
	
	map.on('popupopen', function(e) {
		deleteCircle();
		createCircle(e.popup._latlng.lat, e.popup._latlng.lng);
		$('#info-wrap').stop();
		if(localStorage['sfw'] && e.popup._source._popup._content.match(/prostitute/i)) {
			$('#info').html('<h1>' + $.t('sidebar.loveInterest') + '</h1>' + $.t('misc.loveInterestDesc'));
		} else {
			$('#info').html(e.popup._source._popup._content);
		}
		$('#info').getNiceScroll(0).doScrollTop(0, 0);
		$('#info-wrap').fadeIn('fast');
		if($('#info').html().indexOf('class="note-row"') > -1) {
			notePopupStart();
		}
		console.log('Popup at:');
		console.log('[' + e.popup._latlng.lat.toFixed(3) + ', ' + e.popup._latlng.lng.toFixed(3) + ']');
	});
	
	var createCircle = function(lat, lng) {
		var noteKey = getNoteKey(lat, lng);
		//only add param and show center button if not a note
		if(!notes[getNoteIndex(noteKey)]) {
			hash.addParam('m', lat + ',' + lng);
			$('#centerButton').show();
		}
		circle = L.circleMarker(L.latLng(lat, lng), {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: 20
		}).addTo(map);
	};
	
	var deleteCircle = function() {
		if(circle !== null) {
			map.removeLayer(circle);
			hash.removeParam('m');
			$('#centerButton').hide();
		}
	};
	
	var popupClose = function() {
		$('#info-wrap').fadeOut('fast', function() {
			$('#info').html('');
			deleteCircle();
			map.closePopup();
		});
	};
	
	map.on('popupclose', function(e) {
		popupClose();
		if(notePopupOpen) notePopupEnd();
	});
	
	if(localStorage['markers-' + window.map.name]) {
		$.each($.parseJSON(localStorage['markers-' + window.map.name]), function(key, val) {
			if(val === false) {
				$('i.' + key).parent().addClass('layer-disabled');
				map.removeLayer(window.markers[key]);
			}
		});
	}
	
	$('ul.key:not(.controls) li:not(.none) i').each(function(i, e) {
		var marker = $(this).attr('class');
		var pill = $("<div class='pill'>" + (window.markerCount[marker] ?? 0) + "</div>");
		$(this).next().after(pill);
		if(localStorage['hide-counts']) {
			pill.hide();
		}
	}).promise().done(function() {
		if(localStorage['hide-counts']) {
			$('#hide-counts').hide();
			$('#show-counts').show();
		}
	});
	
	$('#hide-all').on('click', function(e) {
		var remember = (!localStorage['markers-' + window.map.name]) ? {} : $.parseJSON(localStorage['markers-' + window.map.name]);
		$.each(allLayers, function(key, val) {
			map.removeLayer(val);
		});
		$.each($('ul.key:not(.controls) li:not(.none) i'), function(key, val) {
			remember[$(this).attr('class')] = false;
		});
		$('ul.key:first li').each(function(id, li) {
			$(li).addClass('layer-disabled');
		});
		$(this).hide();
		$('#show-all').show();
		localStorage['markers-' + window.map.name] = JSON.stringify(remember);
		localStorage['hide-all-' + window.map.name] = true;
	});
	
	$('#show-all').on('click', function(e) {
		var remember = (!localStorage['markers-' + window.map.name]) ? {} : $.parseJSON(localStorage['markers-' + window.map.name]);
		$.each(allLayers, function(key, val) {
			map.addLayer(val);
		});
		$.each($('ul.key:not(.controls) li:not(.none) i'), function(key, val) {
			remember[$(this).attr('class')] = true;
		});
		$('ul.key:first li').each(function(id, li) {
			$(li).removeClass('layer-disabled');
		});
		$(this).hide();
		$('#hide-all').show();
		localStorage['markers-' + window.map.name] = JSON.stringify(remember);
		localStorage.removeItem('hide-all-' + window.map.name);
	});
	
	$('#hide-counts').on('click', function(e) {
		$('ul.key:not(.controls) > li:not(.none) i').each(function(i, e) {
			$(this).siblings(':last').hide();
		});
		$(this).hide();
		$('#show-counts').show();
		localStorage['hide-counts'] = true;
	});
	
	$('#show-counts').on('click', function(e) {
		$('ul.key:not(.controls) > li:not(.none) i').each(function(i, e) {
			$(this).siblings(':last').show();
		});
		$(this).hide();
		$('#hide-counts').show();
		localStorage.removeItem('hide-counts');
	});
	
	$('#reset-tracking').on('click', function(e) {
		e.preventDefault();
		if(confirm($.t('controls.reset-markers-confirm'))) {
			resetTransparentMarkers();
		}
	});
	
	$(document).on('click', 'li#hide-monsters', function(e) {
		localStorage['hide-monsters'] = true;
		$('#info').addClass('hideMonsters');
		$('#hide-monsters').hide();
		$('#show-monsters').show();
	});
	
	$(document).on('click', 'li#show-monsters', function(e) {
		localStorage.removeItem('hide-monsters');
		$('#info').removeClass('hideMonsters');
		$('#hide-monsters').show();
		$('#show-monsters').hide();
	});
	
	$('ul.key:not(.controls)').on('click', 'li:not(.none)', function(e) {
		var marker = $(this).find('i').attr('class');
		var remember = (!localStorage['markers-' + window.map.name]) ? {} : $.parseJSON(localStorage['markers-' + window.map.name]);
		if($(this).hasClass('layer-disabled')) {
			map.addLayer(window.markers[marker]);
			$(this).removeClass('layer-disabled');
			remember[marker] = true;
		} else {
			map.removeLayer(window.markers[marker]);
			$(this).addClass('layer-disabled');
			remember[marker] = false;
		}
		localStorage['markers-' + window.map.name] = JSON.stringify(remember);
	});
	
	var origSidebar;
	var origBorder;
	var origHide;
	var origMap;
	var origInfoWrap;
	var origInfo;
	
	var hideSidebar = function() {
		origSidebar = $('#sidebar').css('left');
		origBorder = $('#sidebar-border').css('left');
		origHide = $('#hide-sidebar').css('left');
		origMap = $('#map').css('left');
		origInfoWrap = $('#info-wrap').css(['left', 'width']);
		origInfo = $('#info').css(['width', 'margin-right']);
		
		$('#info-wrap').css({'left': '0px', 'width': '100%'});
		$('#info').css({'width': 'auto', 'margin-right': '80px'});
		$('#map').css('left', '0px');
		map.invalidateSize();
		
		var base = $('#sidebar').outerWidth();
		$('#sidebar').animate({left: '-' + base + 'px'}, 200);
		$('#sidebar-border').animate({left: '-' + (base + 15) + 'px'}, 200);
		$('#hide-sidebar').animate({left: '0px'}, 200, function() {
			$('#hide-sidebar').addClass('show-sidebar');
		});
	};
	
	$(document).on('click', 'div#hide-sidebar:not(.show-sidebar)', function(e) {
		hideSidebar();
		localStorage['hide-sidebar'] = true;
	});
	
	$(document).on('click', 'div#hide-sidebar.show-sidebar', function(e) {
		showSidebar($(this));
		localStorage.removeItem('hide-sidebar');
	});
	
	var showSidebar = function(elem) {
		$('#sidebar').animate({left: origSidebar}, 200);
		$(elem).animate({left: origHide}, 200);
		$('#sidebar-border').animate({left: origBorder}, 200, function() {
			$('#map').css('left', origMap);
			map.invalidateSize();
			$('.show-sidebar').removeClass('show-sidebar');
			$('#sidebar').attr('style', '');
			$('#sidebar-border').attr('style', '');
			$('#info-wrap').css(origInfoWrap);
			$('#info').css(origInfo);
			$('#map').attr('style', '');
		});
	};
	
	if(localStorage['hide-sidebar']) {
		setTimeout(function() {
			hideSidebar();
		}, 500);
	}
	
	$(window).on('resize', function() {
		if($('.show-sidebar').length && $(this).width() > 768) {
			$('#map').css('left', origMap);
			map.invalidateSize();
			$('.show-sidebar').removeClass('show-sidebar');
			$('#hide-sidebar').attr('style', '');
			$('#sidebar').attr('style', '');
			$('#sidebar-border').attr('style', '');
			$('#info-wrap').attr('style', '');
			$('#map').attr('style', '');
		}
	});
	
	$(document).on('click', 'div#warn', function(e) {
		localStorage['hide-mobile-warning'] = true;
		$(this).remove();
	});
	
	var popupClick = function(e) {
		if($(e.target).is('#popup-content') || $(e.toElement.offsetParent).is('#popup-content') || $(e.toElement.offsetParent).is('#popup-wrap')) {
			return;
		}
		popupClose();
	};
	
	window.popupClose = function() {
		$('#popup-wrap').remove();
		$(document).off('click', '*', popupClick);
	};
	
	var popup = function(title, content) {
		$('body').prepend('<div id="popup-wrap"><div id="popup-border"><img id="popup-close" src="../files/images/exit.png" alt="Close" onclick="popupClose();"><div id="popup-content"><h1>' + title + '</h1><hr>' + content + '</div></div></div>');
		$('div#popup-content').niceScroll({
			cursorcolor: '#5E4F32',
			cursorborder: 'none',
			autohidemode: false,
			railpadding: {top: 22, right: 5, bottom: 5}
		});
		$(document).on('click', '*', popupClick);
	};
	
	$(document).on('click', '.credits', function(e) {
		e.preventDefault();
		popup('Credits', [
			'<p>Sniper Elite 4 Map created by <a href="https://wiiare.in" target="_blank">lordfiSh</a>. Orginal Code by <a href="https://github.com/untamed0" target="_blank">untamed0</a>, with contributions from:</p>',
			'<ul>',
			'<li><a href="https://github.com/mcarver" target="_blank">mcarver</a> (lead contributor) - Marker count, hash permalink improvements, backup/restore settings, numerous fixes etc</li>',
			'<li><a href="https://github.com/ankri" target="_blank">ankri</a> - Ability to hide markers on right or double click</li>',
			'<li><a href="https://github.com/ITroxxCH" target="_blank">ITroxxCH</a> - Translation/i18n implementation</li>',
			'<li><a href="https://github.com/msmorgan" target="_blank">msmorgan</a> - Javascript &amp; map data structure improvements</li>',
			'</ul>',
			'<h3>Sniper Elite 4 Assets</h3>',
			'<p>Sniper Elite 4 logo, icons, map &amp; text are the property of <a href="http://www.rebellion.co.uk/" target="_blank">Rebellion</a> and used without there permission. </p>',
			'<h3>Javascript libraries used</h3>',
			'<ul>',
			'<li><a href="http://jquery.com" target="_blank">jQuery</a> (MIT)</li>',
			'<li><a href="http://git.io/vkLly" target="_blank">jQuery.NiceScroll</a> (MIT)</li>',
			'<li><a href="http://leafletjs.com" target="_blank">Leaflet</a> (BSD2)</li>',
			'<li><a href="http://git.io/vkfA2" target="_blank">Leaflet.label</a> (MIT)</li>',
			'<li><a href="http://git.io/mwK1oA" target="_blank">Leaflet-hash</a> (MIT)</li>',
			'<li><a href="http://git.io/vJw5v" target="_blank">Leaflet.fullscreen</a> (BSD2)</li>',
			'<li><a href="http://git.io/vkCPC" target="_blank">Leaflet Control Search</a> (MIT)</li>',
			'<li><a href="http://git.io/vIAs2" target="_blank">Font Awesome</a> (MIT)</li>',
			'</ul>'
		].join('\n'));
	});
	
	setTimeout(function() {
		$('ul.key:not(.controls) li:not(.none) i').each(function(i, e) {
			var key = $(this).attr('class');
			key = $.t("sidebar." + key);
			var tooltip = $("<span class='tooltip'>" + key + "</span>");
			
			var ellipsis = $(this).next();
			if(ellipsis.outerWidth() < ellipsis[0].scrollWidth) {
				$(this).parent().mousemove(function(e) {
					var x = e.clientX,
						y = e.clientY;
					
					// calculate y-position to counteract scroll offset
					var offset = $("#logo").offset();
					y = y - offset.top;
					
					tooltip.css('top', (y + 15) + 'px');
					tooltip.css('left', (x + 15) + 'px');
					tooltip.css('display', 'block');
				}).mouseleave(function() {
					tooltip.css('display', 'none');
				});
			}
			
			$("#sidebar-wrap").append(tooltip);
		});
		$('ul.controls li:not(.none) i').each(function(i, e) {
			var key = $(this).next().text();
			var tooltip = $("<span class='tooltip'>" + key + "</span>");
			
			var ellipsis = $(this).next();
			if(ellipsis.outerWidth() < ellipsis[0].scrollWidth) {
				$(this).parent().mousemove(function(e) {
					var x = e.clientX,
						y = e.clientY;
					
					// calculate y-position to counteract scroll offset
					var offset = $("#logo").offset();
					y = y - offset.top;
					
					tooltip.css('top', (y + 15) + 'px');
					tooltip.css('left', (x + 15) + 'px');
					tooltip.css('display', 'block');
				}).mouseleave(function() {
					tooltip.css('display', 'none');
				});
			}
			
			$("#sidebar-wrap").append(tooltip);
		});
	}, 100);
	
	var fileSaver = null;
	var backupData = function() {
		var currentDate = new Date();
		var formattedDate = currentDate.getFullYear() + '-' + ((currentDate.getMonth() + 1 < 10) ? '0' : '') + (currentDate.getMonth() + 1) + '-' + ((currentDate.getDate() < 10) ? '0' : '') + currentDate.getDate();
		var backupFileName = 'sniperelite4_map_backup_' + formattedDate + '.json';
		if(confirm($.t('controls.backup-save-confirm', {fileName: backupFileName}))) {
			if(!fileSaver) {
				fileSaver = $.getScript('../files/scripts/FileSaver.min.js', function() {
					var blob = new Blob([JSON.stringify(localStorage)], {type: "text/plain;charset=utf-8"});
					saveAs(blob, backupFileName);
				});
			}
		}
	};
	var showRestore = function() {
		if(!window.File && !window.FileReader && !window.FileList && !window.Blob) {
			alert($.t('controls.backup-load-unsupported'));
			return;
		}
		if($('#restoreDiv').length) return;
		var restoreButtonPos = $('#restoreButton')[0].getBoundingClientRect();
		var restoreDiv = '<div id="restoreDiv" style="top:' + restoreButtonPos.top + 'px;right:' + (14 + restoreButtonPos.right - restoreButtonPos.left) + 'px;"><div style="float:right;"><button class="fa fa-times-circle" onclick="$(\'#restoreDiv\').remove()" style="cursor:pointer" /></div><strong>' + $.t('controls.backup-load-label') + '</strong><br/><input type="file" id="files" name="file[]" /></div>';
		$('body').append($(restoreDiv));
		var filesInput = document.getElementById('files');
		filesInput.addEventListener('change', function(e) {
			var file = e.target.files[0];
			var reader = new FileReader();
			reader.onload = function(e) {
				var content = e.target.result;
				try {
					var restoreData = $.parseJSON(content);
					console.log('restore started.');
					for(var prop in restoreData) {
						console.log('restoring property:' + prop + ' using value:' + restoreData[prop]);
						localStorage[prop] = restoreData[prop];
					}
					console.log('restore complete!');
					alert($.t('controls.backup-load-success'));
					location.reload();
				} catch(err) {
					alert($.t('controls.backup-load-fail'));
					console.log(err.message);
				} finally {
					$('#restoreDiv').remove();
				}
			};
			reader.readAsText(file);
		});
	};
	
	var backupButton = L.easyButton('fa-download', function(btn, map) {
		backupData();
	}, $.t('controls.backup-save'));
	var restoreButton = L.easyButton('fa-upload', function(btn, map) {
		showRestore();
	}, $.t('controls.backup-load'), 'restoreButton');
	L.easyBar([backupButton, restoreButton]).addTo(map);
	
	window.noteMarkers = {};
	var noteStatus = false;
	var noteCursorCss = null;
	var notePopupOpen = false;
	L.easyButton('fa-book', function(btn, map) {
		if(!noteStatus) {
			startNote();
		} else {
			endNote();
		}
	}, $.t('controls.note-add'), 'noteButton').addTo(map);
	
	L.easyButton('fa-crosshairs', function(btn, map) {
		hashParams = hash.getHashParams();
		if(hashParams && hashParams.m) {
			var hashMarker = hashParams.m.split(",");
			map.setView([hashMarker[0], hashMarker[1]]);
		} else {
			map.setView(map_center);
		}
	}, $.t('controls.center-on-focused-marker'), 'centerButton').addTo(map);
	
	window.getNoteKey = function(lat, lng) {
		return lat.toFixed(3) + '_' + lng.toFixed(3);
	};
	
	window.getNoteIndex = function(noteKey) {
		for(var i = 0; i < notes.length; i++) {
			if(notes[i].key == noteKey) return i;
		}
		return -1;
	};
	
	var startNote = function() {
		console.log('starting note');
		$('#noteButton').attr('title', $.t('controls.note-cancel')).addClass('activeEasyButton');
		$(document).on('keyup.addnote', function(e) {
			if(e.keyCode === 27) endNote();
		});
		noteStatus = true;
		noteCursorCss = $('.leaflet-container').css('cursor');
		$('.leaflet-container').css('cursor', 'crosshair');
		map.addEventListener('click', addNote);
	};
	
	var backupNotes = function() {
		localStorage['notes' + window.map.name] = JSON.stringify(notes);
	};
	
	window.saveNote = function(noteKey) {
		var note = notes[getNoteIndex(noteKey)];
		note.label = $('#note-label').val();
		note.title = $('#note-title').val();
		note.text = $('#note-text').val();
		var marker = noteMarkers[note.key];
		marker.bindLabel(note.label);
		marker.bindPopup(getNotePopup(note));
		noteMarkers[note.key] = marker;
		backupNotes();
		$('#note-save').attr('disabled', true);
	};
	
	window.deleteNote = function(noteKey) {
		map.removeLayer(noteMarkers[noteKey]);
		notes.splice(getNoteIndex(noteKey), 1);
		delete noteMarkers[noteKey];
		backupNotes();
		popupClose();
	};
	
	var getNotePopup = function(note) {
		var popupContent = "<div id=\"note-popup\"><div class=\"note-row\"><label for=\"note-label\" class=\"label\" data-i18n=\"notes.label\"></label><input type=\"text\" id=\"note-label\" data-i18n=\"[placeholder]notes.enterLabel\" value=\"" + note.label + "\" /></div>";
		popupContent += "<div class=\"note-row\"><label for=\"note-title\" class=\"label\" data-i18n=\"notes.title\"></label><input type=\"text\" id=\"note-title\" data-i18n=\"[placeholder]notes.enterTitle\" value=\"" + note.title + "\" /></div>";
		popupContent += "<div class=\"note-row\"><label for=\"note-text\" class=\"label top\" data-i18n=\"notes.note\"></label><textarea id=\"note-text\" data-i18n=\"[placeholder]notes.enterText\">" + note.text + "</textarea></div>";
		popupContent += "<div><button id=\"note-save\" onclick=\"saveNote('" + note.key + "')\" disabled><i class=\"fa fa-floppy-o\"></i>&nbsp;<span data-i18n=\"notes.saveNote\"></span></button>";
		popupContent += "<button onclick=\"deleteNote('" + note.key + "')\"><i class=\"fa fa-trash-o\"></i>&nbsp;<span data-i18n=\"notes.deleteNote\"></span></button></div></div>";
		return popupContent;
	};
	
	var createNote = function(note) {
		var noteMarker = null;
		if(note.label && note.label !== '') noteMarker = L.marker(L.latLng(note.lat, note.lng), setMarker(icons['note_marker'])).bindLabel(note.label).bindPopup(getNotePopup(note)).openPopup();
		else noteMarker = L.marker(L.latLng(note.lat, note.lng), setMarker(icons['note_marker'])).bindPopup(getNotePopup(note)).openPopup();
		noteMarker.addTo(map);
		noteMarkers[note.key] = noteMarker;
	};
	
	var addNote = function(e) {
		var note = {
			key: getNoteKey(e.latlng.lat, e.latlng.lng),
			lat: e.latlng.lat,
			lng: e.latlng.lng,
			label: '',
			title: '',
			text: ''
		};
		createNote(note);
		notes.push(note);
		backupNotes();
		endNote();
		return false;
	};
	
	var endNote = function() {
		$('#noteButton').attr('title', $.t('controls.note-add')).removeClass('activeEasyButton');
		$(document).off('keyup.addnote');
		noteStatus = false;
		$('.leaflet-container').css('cursor', noteCursorCss);
		map.removeEventListener('click');
		console.log('stopping note');
	};
	
	var notePopupStart = function() {
		notePopupOpen = true;
		$('#info').i18n();
		$('#note-label, #note-title, #note-text').on('keyup.notechange', function() {
			$('#note-save').attr('disabled', false);
		});
		console.log('note popup started!');
	};
	
	var notePopupEnd = function() {
		$('#note-label, #note-title, #note-text').off('keyup.notechange');
		console.log('note popup ended!');
	};
	
	//create saved notes on load
	for(var i = 0; i < notes.length; i++) {
		createNote(notes[i]);
	}
	
	var hashParams = hash.getHashParams();
	if(hashParams) {
		if(hashParams.w) {
			var hashWayPoint = hashParams.w.split(",");
			wayPoint = new L.marker(L.latLng(hashWayPoint[0], hashWayPoint[1]), {
				icon: waypointIcon
			}).on('click', function() {
				map.removeLayer(wayPoint);
				hash.removeParam('w');
			}).on('contextmenu', function() {
				map.removeLayer(wayPoint);
				hash.removeParam('w');
			}).addTo(map);
		}
		if(hashParams.m) {
			var hashMarker = hashParams.m.split(",");
			$.each(allLayers, function(key, val) {
				$.each(val.getLayers(), function(key, marker) {
					if(hashMarker[0] == marker._latlng.lat && hashMarker[1] == marker._latlng.lng) {
						marker.openPopup();
					}
				});
			});
		} else {
			$('#centerButton').hide();
		}
	} else {
		$('#centerButton').hide();
	}
});
