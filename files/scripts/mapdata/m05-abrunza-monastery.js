window.map = {
	namespace: 'e',
	name: 'abrunza-monastery',
	tilePath: '/files/maps/m05-abrunza-monastery/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([65, 145], [-85, -135]),
	center: [-40, 10]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, -58.333, 76.113),
	makeMarker('letter-from-home', 2, -47.961, -24.829),
	makeMarker('letter-from-home', 3, -33.358, -40.825),
	makeMarker('letter-from-home', 4, -10.012, 44.692),
	makeMarker('letter-from-home', 5, -24.087, -43.989),
	
	makeMarker('letter-to-home', 1, 17.246, -19.775),
	makeMarker('letter-to-home', 2, -43.676, -26.587),
	makeMarker('letter-to-home', 3, -54.547, 4.746),
	makeMarker('letter-to-home', 4, -57.610, 70.203),
	makeMarker('letter-to-home', 5, -27.684, -54.844),
	
	makeMarker('last-letter', 1, -43.517, 77.893),
	makeMarker('last-letter', 2, -29.133, -35.420),
	makeMarker('last-letter', 3, -58.654, 9.844),
	makeMarker('last-letter', 4, -69.272, 50.845),
	makeMarker('last-letter', 5, -48.517, 85.847),
	
	makeMarker('misc-document', 1, -42.537, 91.868),
	makeMarker('misc-document', 2, -53.917, 5.120),
	makeMarker('misc-document', 3, -52.376, 85.452),
	makeMarker('misc-document', 4, -23.463, 86.924),
	makeMarker('misc-document', 5, -19.725, -48.340),
	makeMarker('misc-document', 6, 8.298, 0.417),
	makeMarker('misc-document', 7, -54.521, 84.001),
	makeMarker('misc-document', 8, -30.126, -1.340),
	makeMarker('misc-document', 9, 17.435, -18.677),
	makeMarker('misc-document', 10, -42.098, -24.741),
	makeMarker('misc-document', 11, 16.383, 11.514),
	
	makeMarker('duty-roster', 1, -5.660, 40.386),
	makeMarker('duty-roster', 2, -58.791, 71.411),
	makeMarker('duty-roster', 3, 14.902, 3.340),
	makeMarker('duty-roster', 4, -56.097, 9.580),
	
	makeMarker('sniper-report', 1, -66.670, 65.830),
	makeMarker('sniper-report', 2, -38.720, 5.317),
	
	makeMarker('deadeye-target', 1, -54.265, 75.103),
	makeMarker('deadeye-target', 2, -2.416, 45.571),
	makeMarker('deadeye-target', 3, -51.700, 6.658),
	
	makeMarker('generator', 0, -47.547, -27.422),
	makeMarker('generator', 0, -32.399, 85.342),
	makeMarker('generator', 0, -56.873, 13.909),
	makeMarker('generator', 0, -5.310, 44.473),
	
	makeMarker('objective-primary', 1, -44.182, 90.396),
	makeMarker('objective-primary', 2, -57.208, 7.251),
	
	makeMarker('objective-optional', 1, -61.270, 3.472),
	makeMarker('objective-optional', 1, -13.112, -6.592),
	makeMarker('objective-optional', 1, -73.035, 56.558),
	
	makeMarker('objective-optional', 2.1, -28.498, -37.178),
	makeMarker('objective-optional', 2.2, 17.853, -20.127),
	makeMarker('objective-optional', 2.3, -25.958, 78.926),
	makeMarker('objective-optional', 2.4, -66.947, 63.677),
	
	makeMarker('objective-optional', 3, -20.509, -48.955),
	makeMarker('objective-optional', 3, 9.731, 0.923),
	makeMarker('objective-optional', 3, -52.376, 84.946),
	makeMarker('objective-optional', 3, -24.127, 87.891),
	
	makeMarker('objective-exit', 1, -71.532, 46.626),
	makeMarker('objective-exit', 1, 1.186, 46.538)
];