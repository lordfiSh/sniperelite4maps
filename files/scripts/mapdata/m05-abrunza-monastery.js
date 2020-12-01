window.map = {
	namespace: 'e',
	name: 'abrunza-monastery',
	tilePath: '/files/maps/m05-abrunza-monastery/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([65, 145], [-85, -135]),
	center: [-40, 0]
}

window.map.markers = [
	makeMarker('deadeye-target', 1, -54.547, 74.355),
	makeMarker('deadeye-target', 2, -2.416, 45.571),
	makeMarker('deadeye-target', 3, -51.289, 6.196),
	
	makeMarker('letter-from-home', 1, -58.333, 76.113),
	makeMarker('letter-from-home', 2, -47.961, -24.829),
	makeMarker('letter-from-home', 3, -33.358, -40.825),
	makeMarker('letter-from-home', 4, -10.012, 44.692),
	makeMarker('letter-from-home', 5, -24.087, -43.989),
	
	makeMarker('letter-to-home', 1, 18.146, -16.875),
	makeMarker('letter-to-home', 2, -44.119, -26.719),
	makeMarker('letter-to-home', 3, -54.059, 15.908),
	makeMarker('letter-to-home', 4, -57.089, 69.741),
	makeMarker('letter-to-home', 5, -27.684, -54.844),
	
	makeMarker('last-letter', 1, -47.577, 64.907),
	makeMarker('last-letter', 2, -22.065, -39.639),
	makeMarker('last-letter', 3, -58.654, 9.844),
	makeMarker('last-letter', 4, -70.816, 44.912),
	makeMarker('last-letter', 5, -44.024, 88.242),
	
	makeMarker('misc-document', 1, -43.357, 91.626),
	makeMarker('misc-document', 2, -54.547, 4.746),
	makeMarker('misc-document', 3, -52.376, 84.946),
	makeMarker('misc-document', 4, -25.760, 91.714),
	makeMarker('misc-document', 5, -19.725, -48.340),
	makeMarker('misc-document', 6, 10.920, 0.923),
	makeMarker('misc-document', 7, -54.496, 82.705),
	makeMarker('misc-document', 8, -29.344, -1.934),
	makeMarker('misc-document', 9, 17.435, -18.677),
	makeMarker('misc-document', 10, -41.837, -23.818),
	makeMarker('misc-document', 11, 18.854, 8.438),
	
	makeMarker('duty-roster', 1, -5.660, 40.386),
	makeMarker('duty-roster', 2, -52.052, 76.289),
	makeMarker('duty-roster', 3, 14.902, 3.340),
	makeMarker('duty-roster', 4, -56.097, 9.580),
	
	makeMarker('sniper-report', 1, -67.050, 64.863),
	makeMarker('sniper-report', 2, -38.720, 5.317),
	
	makeMarker('generator', 0, -47.547, -27.422),
	makeMarker('generator', 0, -32.399, 85.342),
	
	makeMarker('objective-primary', 1, -56.292, 77.827),
	makeMarker('objective-primary', 2, -57.208, 7.251),
	
	makeMarker('objective-optional', 1, -61.270, 3.472),
	makeMarker('objective-optional', 1, -13.112, -6.592),
	makeMarker('objective-optional', 1, -73.035, 56.558),
	makeMarker('objective-optional', 2, -28.498, -37.178),
	// todo document locations
	//makeMarker('objective-optional', 3, ),
	//makeMarker('objective-optional', 3, ),
	//makeMarker('objective-optional', 3, ),
	//makeMarker('objective-optional', 3, ),
	// todo exit location
	//makeMarker('objective-exit', 0, )
];