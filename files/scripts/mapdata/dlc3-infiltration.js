window.map = {
	name: 'dlc3-infiltration',
	tilePath: '/files/maps/dlc3-infiltration/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([300, 300], [0, 0]),
	center: [100, 100]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 117.250,171.156),
	makeMarker('letter-from-home', 2, 85.672,115.453),
	makeMarker('letter-from-home', 3, 91.750,162.188),
	makeMarker('letter-from-home', 4, 87.344,129.297),
	makeMarker('letter-from-home', 5, 113.813,93.453),
	
	makeMarker('letter-to-home', 1, 129.469,138.875),
	makeMarker('letter-to-home', 2, 99.141,126.156),
	makeMarker('letter-to-home', 3, 139.828,103.391),
	makeMarker('letter-to-home', 4, 79.250,141.625),
	makeMarker('letter-to-home', 5, 138.313,115.219),
	
	makeMarker('last-letter', 1, 112.000,116.469),
	makeMarker('last-letter', 2, 138.375,133.625),
	makeMarker('last-letter', 3, 105.875,159.172),
	makeMarker('last-letter', 4, 86.422,139.891),
	makeMarker('last-letter', 5, 151.313,97.359),
	
	makeMarker('misc-document', 1, 96.688,133.719),
	makeMarker('misc-document', 2, 110.516,158.906),
	makeMarker('misc-document', 3, 119.766,132.609),
	makeMarker('misc-document', 4, 125.844,161.938),
	makeMarker('misc-document', 5, 91.797,154.891),
	makeMarker('misc-document', 6, 83.234,135.422),
	
	makeMarker('duty-roster', 1, 127.750,131.344),
	makeMarker('duty-roster', 2, 96.063,133.250),
	makeMarker('duty-roster', 3, 114.109,114.734),
	makeMarker('duty-roster', 4, 112.313,103.031),
	
	makeMarker('sniper-report', 1, 114.719,140.281),
	makeMarker('sniper-report', 2, 101.797,121.063),
	makeMarker('sniper-report', 3, 142.906,133.531),
	makeMarker('sniper-report', 4, 87.938,157.313),
	makeMarker('sniper-report', 5, 77.109,130.281),
	makeMarker('sniper-report', 6, 131.375,126.625),
	makeMarker('sniper-report', 7, 111.609,119.719),
	makeMarker('sniper-report', 8, 74.156,121.625),
	makeMarker('sniper-report', 9, 72.625,122.781),
	
	makeMarker('deadeye-target', 1, 50.141,128.031),
	makeMarker('deadeye-target', 2, 118.234,166.172),
	makeMarker('deadeye-target', 3, 163.250,41.375),
	
	makeMarker('generator', 0, 103.422,100.906),
	makeMarker('generator', 0, 82.000,127.500),
	makeMarker('generator', 0, 101.516,147.828),
	makeMarker('generator', 0, 140.297,116.391),
	makeMarker('generator', 0, 133.531,128.297),
	makeMarker('generator', 0, 135.594,147.281),
	
	// makeMarker('other', 0, 106.016,135.813, 'car-civilian'),
	// makeMarker('other', 0, 105.906,136.813, 'car-civilian'),
	// makeMarker('other', 0, 103.781,134.375, 'car-transport'),
	// makeMarker('other', 0, 93.781,124.219, 'car-civilian'),
	// makeMarker('other', 0, 84.859,151.594, 'car-civilian'),
	// makeMarker('other', 0, 79.719,148.938, 'car-civilian'),
	// makeMarker('other', 0, 78.641,149.875, 'car-civilian'),
	// makeMarker('other', 0, 123.281,105.859, 'car-tank'),
	// makeMarker('other', 0, 122.547,108.063, 'car-tank'),
	
	makeMarker('objective-primary', 1.1, 110.719,159.078),
	makeMarker('objective-primary', 1.2, 128.000,79.328, 'objective-exit'),
	makeMarker('objective-primary', 1.2, 52.406,116.969, 'objective-exit'),
	makeMarker('objective-primary', 2, 119.234,133.688),
	makeMarker('objective-primary', 3, 99.781,178.344),
	
	makeMarker('objective-optional', 1.1, 88.703,128.266),
	makeMarker('objective-optional', 1.2, 96.953,133.813),
	makeMarker('objective-optional', 1.2, 80.469,131.797),
	makeMarker('objective-optional', 2, 80.297,140.469),
	makeMarker('objective-optional', 3, 113.281,119.031)
];