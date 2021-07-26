L.Icon.Default.imagePath = '/files/images/leaflet';

(() => {
	// each of these have the marker type as index
	window.icons = {};
	window.layers = {};
	window.markerCount = {};
	// list of coordinate strings of hidden markers (current map only)
	window.transparentMarkers = [];
	window.notes = [];
	
	const namespaceMap = window.namespaceMap = {
		a: 'm01-san-celini-island',
		b: 'm02-bitanti-village',
		c: 'm03-regilino-viaduct',
		d: 'm04-lorino-dockyard',
		e: 'm05-abrunza-monastery',
		f: 'm06-magazzeno-facility',
		g: 'm07-giovi-fiorini-mansion',
		h: 'm08-allagra-fortress',
		i: 'dlc1-target-fuehrer',
		j: 'dlc2-inception',
		k: 'dlc3-infiltration',
		l: 'dlc4-obliteration',
		m: 'ow01-compound',
		n: 'ow02-railyard',
	}
	
	const markerTypes = window.markerTypes = [
		'deadeye-target',
		'letter-from-home',
		'letter-to-home',
		'last-letter',
		'duty-roster',
		'sniper-report',
		'misc-document',
		'generator',
		'objective-primary',
		'objective-optional',
		'objective-exit'
	];
	
	const transparentMarkerOpacity = 0.5;
	
	function loadNotes() {
		const key = `notes-${window.map.name}`;
		window.notes = JSON.parse(localStorage[key] ?? "[]");
	}
	
	function saveNotes() {
		const key = `notes-${window.map.name}`;
		localStorage[key] = JSON.stringify(window.notes);
	}
	
	// transparent marker logic
	
	function loadTransparentMarkers() {
		const key = `transparent-markers-${window.map.name}`;
		window.transparentMarkers = JSON.parse(localStorage[key] ?? "[]");
	}
	
	function saveTransparentMarkers() {
		const key = `transparent-markers-${window.map.name}`;
		localStorage[key] = JSON.stringify(window.transparentMarkers);
	}
	
	function resetTransparentMarkers() {
		window.transparentMarkers = [];
		saveTransparentMarkers();
		location.reload();
	}
	
	window.resetTransparentMarkers = resetTransparentMarkers;
	
	function isMarkerTransparent(lat, lng) {
		return transparentMarkers.includes(lat + ';' + lng);
	}
	
	function setMarkerTransparency(lat, lng, marker, type, transparent) {
		if(transparent === isMarkerTransparent(lat, lng)) return;
		if(transparent) {
			marker.setOpacity(transparentMarkerOpacity);
			markerCount[type]--;
			transparentMarkers.push(lat + ';' + lng);
		} else {
			marker.setOpacity(1.0);
			markerCount[type]++;
			transparentMarkers.splice(transparentMarkers.indexOf(lat + ';' + lng), 1);
		}
		
		updateMarkerCountPill(type);
		saveTransparentMarkers();
	}
	
	function toggleMarkerTransparency(lat, lng, marker, type) {
		const isTransparent = isMarkerTransparent(lat, lng);
		setMarkerTransparency(lat, lng, marker, type, !isTransparent);
	}
	
	function updateMarkerCountPill(type) {
		$('ul.key:not(.controls) > li:not(.none) > i.' + type + ' ~ :last').text(markerCount[type]);
	}
	
	// marker creation
	
	function createLeafletMarker(markerInfo) {
		const type = markerInfo.type;
		const icon = window.icons[type] ?? window.icons['objective-primary']; // todo
		const label = markerInfo.label;
		const popup = "<h1>" + label + "</h1>" + (markerInfo.popup ? markerInfo.popup + "<br>" : "") + "<small>" + $.t(`marker.${type}.desc`) + "</small>";
		const marker = L.marker(markerInfo.position, {icon, riseOnHover: true});
		
		const lat = marker.getLatLng().lat;
		const lng = marker.getLatLng().lng;
		
		marker.bindLabel(label);
		marker.bindPopup(popup, {});
		
		marker.on('contextmenu', () =>
			toggleMarkerTransparency(lat, lng, marker, type));
		
		if(isMarkerTransparent(lat, lng)) {
			marker.setOpacity(transparentMarkerOpacity);
			markerCount[type]--;
		}
		
		return marker;
	}
	
	const runScript = function(url, options) {
		return $.ajax($.extend(options || {}, {
			dataType: "script",
			cache: false, // todo change this back to true when releasing
			url: url
		}));
	}
	
	function addIcon(name, size) {
		icons[name] = L.icon({
			iconUrl: `/files/images/icons/${name}.png`,
			iconSize: size ?? [48, 48]
		});
	}
	
	function initIcons() {
		for(const name of markerTypes) {
			addIcon(name);
		}
	}
	
	function initMapMarkers() {
		loadTransparentMarkers();
		loadNotes();
		
		const layers = {};
		
		for(const type of markerTypes) {
			layers[type] = [];
		}
		
		for(const markerInfo of window.map.markers) {
			const type = markerInfo.type;
			window.markerCount[type] ??= 0;
			window.markerCount[type]++;
			
			const marker = createLeafletMarker(markerInfo);
			layers[type] ??= [];
			layers[type].push(marker);
		}
		
		for(const type in layers) {
			const layer = layers[type];
			window.layers[type] = L.layerGroup(layer);
		}
	}
	
	function initPageTitle() {
		// it's janky, but it works :D
		const mapTitle = $.t(`maps.${window.map.name}`).replace('<br>', ' ');
		const pageTitle = $.t('home.title');
		$(() => document.title = `${mapTitle} - ${pageTitle}`);
	}
	
	async function init() {
		const namespace = location.pathname.match(/\/(\w+)\/?$/)[1];
		const mapName = namespaceMap[namespace];
		
		await $.i18n.init(i18noptions);
		await new Promise(resolve => $.i18n.loadNamespace(mapName, resolve));
		
		await runScript('/files/scripts/mapdata.js');
		await runScript(`/files/scripts/mapdata/${mapName}.js`);
		
		initIcons();
		initMapMarkers();
		initPageTitle();
		
		await runScript(`/files/scripts/custom.js`);
		
		$(document).i18n();
	}
	
	init().then(() => console.log('initialization complete'));
})();
