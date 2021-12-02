window.map = {
	name: 'dlc2-inception',
	tilePath: '/files/maps/dlc2-inception/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([200, 225], [10, 20]),
	center: [100, 100]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 86.344, 114.188),
	makeMarker('letter-from-home', 2, 94.109, 149.438),
	makeMarker('letter-from-home', 3, 129.531, 90.875),
	makeMarker('letter-from-home', 4, 81.250, 133.125),
	makeMarker('letter-from-home', 5, 132.531, 131.891),
	
	makeMarker('letter-to-home', 1, 140.313, 115.188),
	makeMarker('letter-to-home', 2, 99.219, 154.922),
	makeMarker('letter-to-home', 3, 64.656, 138.781),
	makeMarker('letter-to-home', 4, 99.781, 120.422),
	makeMarker('letter-to-home', 5, 111.344, 99.688),
	
	makeMarker('last-letter', 1, 126.625, 132.188),
	makeMarker('last-letter', 2, 89.125, 104.063),
	makeMarker('last-letter', 3, 68.063, 148.500),
	makeMarker('last-letter', 4, 106.109, 82.578),
	makeMarker('last-letter', 5, 99.281, 125.281),
	
	makeMarker('misc-document', 1, 93.938, 143.625),
	makeMarker('misc-document', 2, 97.531, 156.750),
	makeMarker('misc-document', 3, 136.313, 122.406),
	makeMarker('misc-document', 4, 118.609, 130.156),
	makeMarker('misc-document', 5, 74.438, 149.563),
	
	makeMarker('duty-roster', 1, 64.500, 134.469),
	makeMarker('duty-roster', 2, 92.250, 151.625),
	makeMarker('duty-roster', 3, 88.906, 111.906),
	makeMarker('duty-roster', 4, 109.719, 98.156),
	
	makeMarker('sniper-report', 1, 103.938, 84.750),
	makeMarker('sniper-report', 2, 69.969, 128.000),
	makeMarker('sniper-report', 3, 115.906, 146.406),
	makeMarker('sniper-report', 4, 97.719, 126.922),
	
	makeMarker('deadeye-target', 1, 141.250, 176.500),
	makeMarker('deadeye-target', 2, 74.156, 158.813),
	makeMarker('deadeye-target', 3, 177.250, 168.078),
	
	makeMarker('generator', 0, 148.984, 116.156),
	makeMarker('generator', 0, 122.688, 126.469),
	makeMarker('generator', 0, 75.281, 145.281),
	makeMarker('generator', 0, 88.406, 110.813),
	
	makeMarker('objective-primary', 1.1, 98.813, 150.438),
	makeMarker('objective-primary', 1.2, 108.016, 77.781),
	makeMarker('objective-primary', 1.2, 70.047, 153.594),
	makeMarker('objective-primary', 2.1, 129.172, 136.266),
	makeMarker('objective-primary', 2.1, 89.469, 103.438),
	makeMarker('objective-primary', 2.1, 72.938, 145.234),
	makeMarker('objective-primary', 2.2, 120.906, 150.594),
	makeMarker('objective-primary', 2.3, 99.781, 123.016),
	
	makeMarker('objective-optional', 1, 143.969, 132.719),
	makeMarker('objective-optional', 2, 137.172, 122.688),
];