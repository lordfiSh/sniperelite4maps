window.map = {
	name: 'ow02-railyard',
	tilePath: '/files/maps/ow02-railyard/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([205, 210], [25, 5]),
	center: [100, 105]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 127.297,149.453),
	makeMarker('letter-from-home', 2, 69.750,109.719),
	makeMarker('letter-from-home', 3, 104.313,87.563),
	makeMarker('letter-from-home', 4, 131.125,70.172),
	makeMarker('letter-from-home', 5, 139.250,92.219),
	
	makeMarker('letter-to-home', 1, 116.156,162.344),
	makeMarker('letter-to-home', 2, 76.156,68.219),
	makeMarker('letter-to-home', 3, 130.500,94.625),
	makeMarker('letter-to-home', 4, 149.156,119.781),
	makeMarker('letter-to-home', 5, 126.469,129.188),
	
	makeMarker('last-letter', 1, 89.156,91.000),
	makeMarker('last-letter', 2, 117.094,128.469),
	makeMarker('last-letter', 3, 69.141,110.453),
	makeMarker('last-letter', 4, 104.719,118.531),
	makeMarker('last-letter', 5, 135.016,80.234),
	
	makeMarker('misc-document', 1, 140.188,76.094),
	makeMarker('misc-document', 2, 99.859,143.203),
	makeMarker('misc-document', 3, 142.500,132.984),
	makeMarker('misc-document', 4, 117.391,123.281),
	makeMarker('misc-document', 5, 127.594,77.375),
	
	makeMarker('duty-roster', 1, 104.188,86.375),
	makeMarker('duty-roster', 2, 135.031,81.422),
	makeMarker('duty-roster', 3, 117.438,121.938),
	makeMarker('duty-roster', 4, 146.781,119.594),
	
	makeMarker('sniper-report', 1, 100.469,106.922),
	makeMarker('sniper-report', 2, 109.297,156.859),
	makeMarker('sniper-report', 3, 105.047,57.406),
	makeMarker('sniper-report', 4, 86.047,83.031),
	makeMarker('sniper-report', 5, 104.594,115.156),
	
	makeMarker('deadeye-target', 1, 120.063,108.750),
	makeMarker('deadeye-target', 2, 163.891,79.641),
	makeMarker('deadeye-target', 3, 124.125,157.531),
	
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	
	makeMarker('objective-primary', 1.1, 74.250,58.000),
	makeMarker('objective-primary', 1.1, 78.500,62.250),
	makeMarker('objective-primary', 1.1, 80.781,64.438),
	makeMarker('objective-primary', 1.1, 82.813,66.438),
	makeMarker('objective-primary', 1.2, 142.250,132.563),
	makeMarker('objective-primary', 1.3, 160.344,88.422, 'objective-exit'),

	
	makeMarker('objective-optional', 1.1, 117.263,123.000),
	makeMarker('objective-optional', 1.2, 84.906,54.875),
	makeMarker('objective-optional', 2, 127.156,77.375),
	makeMarker('objective-optional', 3, 76.844,55.063),
	makeMarker('objective-optional', 4, 111.063,153.938),
	makeMarker('objective-optional', 4, 101.500,138.813),
	makeMarker('objective-optional', 4, 92.344,106.906),
	makeMarker('objective-optional', 4, 92.719,81.781),
	makeMarker('objective-optional', 4, 99.031,142.313),
	makeMarker('objective-optional', 5, 69.672,110.703),
	makeMarker('objective-optional', 6, 105.156,155.531)
];