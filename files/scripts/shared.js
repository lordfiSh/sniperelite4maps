L.Icon.Default.imagePath = '../files/images/leaflet';

var getMapdata = function(mapname) {
	$.cachedScript("../files/scripts/mapdata-"+mapname+".js").done(function(script, textStatus) {
		$.cachedScript("../files/scripts/custom.js").done(function(script, textStatus) {
			$(document).i18n();
		});
	});
};

$.i18n.init(i18noptions, function() {
	var namespace = location.pathname.match(/\/(\w{1})\/(?:index.html)?$/)[1];
	$.i18n.loadNamespace(namespace, function() {
		if (namespace == "z") {
			getMapdata('san_celini_island_v2');
		} else if (namespace == "b") {
			getMapdata('bitanti_village');
		} else if (namespace == "c") {
			getMapdata('regilino_viaduct');
		} else if (namespace == "d") {
			getMapdata('lorino_dockyard');
		} else if (namespace == "e") {
			getMapdata('abrunza_monastery');
		} else if (namespace == "f") {
			getMapdata('magazzenno_facility');
		} else if (namespace == "g") {
			getMapdata('mansion');
		} else if (namespace == "h") {
			getMapdata('fortress');
		} else if (namespace == "i") {
			getMapdata('dlc1');
		}
	});
});

$(function() {
	//fix bug where sidebar scrollbar doesn't appear when the language drop-down opens
	$('.dd-selected').on('click', function() {
		setTimeout(function() {
			$("#sidebar").getNiceScroll().resize();
		}, 500);
	});
});

window.createMarker = function (coord, icon, label, popup, dataKey) {
	var mapKey = 'markers-' + map_path + '-hidden';
	var marker = L.marker(coord, setMarker(icon)).bindLabel(label).bindPopup(popup);

	marker.on('contextmenu', function (e) {
		toggleOpacity(e, mapKey);
		updatePills(e, dataKey);
	});

	if (isMarkerInvisible(mapKey, marker.getLatLng().lat, marker.getLatLng().lng)) {
		marker.setOpacity(invisibleMarkerOpacity);
		if(!markerCount[dataKey]) markerCount[dataKey] = 0;
	} else {
		markerCount[dataKey] = (markerCount[dataKey] + 1) || 1;
	}

	return marker;
};

window.setMarker = function (icon, tooltip) {
	return {icon : icon, riseOnHover : true};
};

window.getLatLngKey = function (lat, lng) {
	return lat + ';' + lng;
};

window.isMarkerInvisible = function (mapPath, lat, lng) {
	return invisibleMarkers[mapPath].indexOf(getLatLngKey(lat, lng)) > -1;
};

window.toggleOpacity = function (event, mapPath) {
	var key = getLatLngKey(event.latlng.lat, event.latlng.lng);

	if (event.target && event.target.options.opacity === 1.0) {
		event.target.setOpacity(invisibleMarkerOpacity);
		invisibleMarkers[mapPath].push(key);
	} else {
		event.target.setOpacity(1.0);
		invisibleMarkers[mapPath].splice(invisibleMarkers[mapPath].indexOf(key), 1);
	}

	localStorage[mapPath] = JSON.stringify(invisibleMarkers[mapPath]);
};

window.updatePills = function(event, dataKey) {
	if (event.target && event.target.options.opacity === 1.0) {
		markerCount[dataKey] = (markerCount[dataKey] + 1) || 1;
	} else {
		markerCount[dataKey] = (markerCount[dataKey] - 1) || 0;
	}
	$('ul.key:not(.controls) > li:not(.none) > i.'+dataKey+' ~ :last').text(markerCount[dataKey]);
};

window.resetInvisibleMarkers = function() {
	var mapKey = 'markers-' + map_path + '-hidden';
	invisibleMarkers[mapKey] = [];
	localStorage[mapKey] = JSON.stringify(invisibleMarkers[mapKey]);
	location.reload();
};

window.icons = {};
window.markers = {};
window.invisibleMarkers = {};
window.markerCount = {};
window.notes = {};

var icons = window.icons;
var markers = window.markers;
var invisibleMarkerOpacity = 0.25;

window.processData = function (data) {
	var mapKey = 'markers-' + map_path + '-hidden';

	if(!localStorage[mapKey]) {
		localStorage[mapKey] = JSON.stringify([]);
	}
	invisibleMarkers[mapKey] = JSON.parse(localStorage[mapKey]);

	var notesKey = 'notes'+map_path;
	if(!localStorage[notesKey]) {
		localStorage[notesKey] = JSON.stringify([]);
	}
	notes[map_path] = JSON.parse(localStorage[notesKey]);

	Object.keys(data).forEach(function (dataKey) {
		var items = data[dataKey];
		var groupItems = [];
		items.forEach(function (item) {
			if (item.popupTitle == null) {
				item.popupTitle = item.label;
			}
			item.coords.forEach(function (coord) {
				groupItems.push(createMarker(coord, icons[dataKey], item.label, '<h1>' + item.popupTitle + '</h1>' + item.popup, dataKey));
			});
		});

		markers[dataKey] = L.layerGroup(groupItems);
	});
};


					
icons.gearbit = L.icon({
	iconUrl  : '../files/images/icons/deadeye-target.png',
	iconSize : [32, 32]
});


icons.gearbitdrop = L.icon({
	iconUrl  : '../files/images/icons/letter-from-home.png',
	iconSize : [32, 32]
});


icons.key = L.icon({
	iconUrl  : '../files/images/icons/last-letter.png',
	iconSize : [32, 32]
});


icons.module = L.icon({
	iconUrl  : '../files/images/icons/duty-roster.png',
	iconSize : [32, 32]
});


icons.gun = L.icon({
	iconUrl  : '../files/images/icons/letter-to-home.png',
	iconSize : [32, 32]
});


icons.outfit = L.icon({
	iconUrl  : '../files/images/icons/misc-document.png',
	iconSize : [32, 32]
});


icons.monolith = L.icon({
	iconUrl  : '../files/images/icons/sniper-report.png',
	iconSize : [32, 32]
});

icons.soundmask = L.icon({
	iconUrl  : '../files/images/icons/soundmask.png',
	iconSize : [28, 28]
});

icons.star = L.icon({
	iconUrl  : '../files/images/icons/objective-primary.png',
	iconSize : [28, 28]
});

