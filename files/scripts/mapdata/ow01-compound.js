window.map = {
	name: 'ow01-compound',
	tilePath: '/files/maps/ow01-compound/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([210, 220], [0, 0]),
	center: [100, 100]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 152.438, 111.656),
	makeMarker('letter-from-home', 2, 120.500, 108.594),
	makeMarker('letter-from-home', 3, 116.891, 50.406),
	makeMarker('letter-from-home', 4, 102.297, 140.891),
	makeMarker('letter-from-home', 5, 68.688, 158.609),
	
	makeMarker('letter-to-home', 1, 152.875, 107.656),
	makeMarker('letter-to-home', 2, 110.484, 103.766),
	makeMarker('letter-to-home', 3, 98.375, 84.984),
	makeMarker('letter-to-home', 4, 85.031, 131.781),
	makeMarker('letter-to-home', 5, 111.531, 120.984),
	
	makeMarker('last-letter', 1, 84.031, 118.281),
	makeMarker('last-letter', 2, 144.688, 110.484),
	makeMarker('last-letter', 3, 56.969, 142.188),
	makeMarker('last-letter', 4, 143.781, 101.328),
	makeMarker('last-letter', 5, 115.844, 52.250),
	
	makeMarker('misc-document', 1, 153.688, 104.813),
	makeMarker('misc-document', 2, 110.547, 55.953),
	makeMarker('misc-document', 3, 83.438, 115.094),
	makeMarker('misc-document', 4, 153.094, 111.797),
	makeMarker('misc-document', 5, 116.219, 51.328),
	
	makeMarker('duty-roster', 1, 97.719, 84.969),
	makeMarker('duty-roster', 2, 145.828, 93.828),
	makeMarker('duty-roster', 3, 69.563, 158.313),
	makeMarker('duty-roster', 4, 86.375, 146.125),
	
	makeMarker('sniper-report', 1, 152.469, 96.313),
	makeMarker('sniper-report', 2, 105.359, 63.328),
	makeMarker('sniper-report', 3, 106.125, 126.531),
	
	makeMarker('deadeye-target', 1, 52.344, 141.156),
	makeMarker('deadeye-target', 2, 120.625,115.750),
	makeMarker('deadeye-target', 3, 112.328, 55.406),
	
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	
	makeMarker('objective-primary', 1, 116.156,50.938),
	makeMarker('objective-primary', 2, 153.047,111.328),
	makeMarker('objective-primary', 3, 98.719,111.125),
	makeMarker('objective-primary', 4, 84.453,132.000),
	makeMarker('objective-primary', 4, 82.375,121.688),
	
	makeMarker('objective-optional', 1, 106.125,127.000),
	makeMarker('objective-optional', 1, 99.734,58.641),
	makeMarker('objective-optional', 1, ),
	makeMarker('objective-optional', 2, 83.891,115.234),
	makeMarker('objective-optional', 2, 110.469,55.484),
	makeMarker('objective-optional', 2, 153.734,104.422),
	makeMarker('objective-optional', 3, 90.188,114.563),
	makeMarker('objective-optional', 3, 122.313,82.875),
	makeMarker('objective-optional', 3, 153.672,101.547),

	makeMarker('objective-exit', 1, 146.828,114.641)
];