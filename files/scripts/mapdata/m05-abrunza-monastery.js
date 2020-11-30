window.map = {
	namespace: 'e',
	name: 'abrunza-monastery',
	tilePath: '/files/maps/m05-abrunza-monastery/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 5,
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
	makeMarker('letter-to-home', 5, -27.684, -54.844)
];

if(false)
	window.mapdata = {
		// Deadeye
		gearbit: [{
			coords: [[-28.883, -11.294], [-72.114, -61.611], [-74.128, 27.246]],
			label: $.t("sidebar.deadeye"),
			popup: $.t("e:stuff.desc.deadeye")
		}],
		
		//letter_from_home
		gearbitdrop: [{
			coords: [[-59.266, -122.256]],
			label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("e:letter_from_home.label.1"),
			popup: $.t("misc.inf") + $.t(" (XXX) ") + $.t("misc.position"),
		}, {
			coords: [[-76.496, 29.883]],
			label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("e:letter_from_home.label.2"),
			popup: $.t("misc.inf") + $.t(" (XXX) ") + $.t("misc.position"),
		}, {
			coords: [[-51.618, -126.738]],
			label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("e:letter_from_home.label.0"),
			//popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
		}, {
			coords: [[-37.579, -10.635]],
			label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("e:letter_from_home.label.0"),
			//popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
		}, {
			coords: [[-67.238, -104.238]],
			label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("e:letter_from_home.label.0"),
			//popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
		}],
		
		//letter_to_home
		//popup: $.t("d:stuff.desc.inf") + $.t(" (Franz Bartel) ") +$.t("d:stuff.desc.inf2")
		gun: [{
			coords: [[-54.521, -140.449]],
			label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("e:letter_to_home.label.0"),
			popup: $.t("e:letter_to_home.desc.0"),
		}, {
			coords: [[-4.127, -91.055]],
			label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("e:letter_to_home.label.0"),
			popup: $.t("e:letter_to_home.desc.0"),
		}, {
			coords: [[-38.411, -13.096]],
			label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("e:letter_to_home.label.0"),
			popup: $.t("e:stuff.desc.tent"),
		}, {
			coords: [[-73.898, -48.604]],
			label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("e:letter_to_home.label.0"),
			popup: $.t("e:letter_to_home.desc.0"),
		}, {
			coords: [[-75.888, 21.313]],
			label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("e:letter_to_home.label.0"),
			popup: $.t("e:letter_to_home.desc.0"),
		}],
		
		//last_letter
		key: [{
			coords: [[-49.724, -121.069]],
			label: $.t("sidebar.last_letter") + $.t(": ") + $.t("e:last_letter.label.0"),
			popup: $.t("e:stuff.desc.inf") + $.t(" (Oskar Havener) ") + $.t("e:stuff.desc.inf2"),
		}, {
			coords: [[-76.599, -56.953]],
			label: $.t("sidebar.last_letter") + $.t(": ") + $.t("e:last_letter.label.0"),
			popup: $.t("e:stuff.desc.inf") + $.t(" (Herbert Volk) ") + $.t("e:stuff.desc.inf2"),
		}, {
			coords: [[-83.079, -11.338]],
			label: $.t("sidebar.last_letter") + $.t(": ") + $.t("e:last_letter.label.0"),
			popup: $.t("e:stuff.desc.inf"),
		}, {
			coords: [[-67.238, 43.682]],
			label: $.t("sidebar.last_letter") + $.t(": ") + $.t("e:last_letter.label.0"),
			popup: $.t("e:stuff.desc.inf"),
		}, {
			coords: [[-69.840, 14.941]],
			label: $.t("sidebar.last_letter") + $.t(": ") + $.t("e:last_letter.label.0"),
			popup: $.t("e:stuff.desc.inf"),
		}],
		
		//duty_poster
		module: [{
			coords: [[-8.407, -66.270]],
			label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("e:duty_poster.label.1"),
			popup: $.t("misc.officer") + $.t(" (XXX) ") + $.t("misc.position"),
		}, {
			coords: [[-32.990, -17.051]],
			label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("e:duty_poster.label.0"),
			popup: $.t("misc.officer") + $.t(" (XXX) ") + $.t("misc.position"),
		}, {
			coords: [[-75.005, -57.129]],
			label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("e:duty_poster.label.0"),
			popup: $.t("misc.officer") + $.t(" (XXX) ") + $.t("misc.position"),
		}, {
			coords: [[-72.738, 29.795]],
			label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("e:duty_poster.label.0"),
			popup: $.t("misc.officer") + $.t(" (XXX) ") + $.t("misc.position"),
		}],
		
		
		//misc_docs
		outfit: [{
			coords: [[-47.577, -132.275]],
			label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("e:misc_docs.label.0"),
			//popup: $.t("e:stuff.desc.officer"),
		}, {
			coords: [[-5.178, -93.516]],
			label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("e:misc_docs.label.0"),
			//popup: $.t("e:stuff.desc.inf"),
		}, {
			coords: [[-13.838, -68.291]],
			label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("e:misc_docs.label.0"),
			//popup: $.t("e:misc_docs.desc.tres"),
		}, {
			coords: [[-3.338, -58.711]],
			label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("e:misc_docs.label.0"),
			popup: $.t("e:misc_docs.desc.tent"),
		}, {
			coords: [[-56.170, -71.807]],
			label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("e:misc_docs.label.0"),
			popup: $.t("e:misc_docs.desc.radio"),
		}, {
			coords: [[-65.676, -100.459]],
			label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("e:misc_docs.label.0"),
			//popup: $.t("e:misc_docs.desc.1st"),
		}, {
			coords: [[-74.140, -63.237]],
			label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("e:misc_docs.label.0"),
			//popup: $.t("e:misc_docs.desc.1st"),
		}, {
			coords: [[-74.284, 37.969]],
			label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("e:misc_docs.label.0"),
			//popup: $.t("e:misc_docs.desc.1st"),
		}, {
			coords: [[-73.023, 40.869]],
			label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("e:misc_docs.label.0"),
			//popup: $.t("e:misc_docs.desc.1st"),
		}, {
			coords: [[-66.896, 49.658]],
			label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("e:misc_docs.label.0"),
			//popup: $.t("e:misc_docs.desc.1st"),
		}, {
			coords: [[-57.469, 43.594]],
			label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("e:misc_docs.label.0"),
			//popup: $.t("e:misc_docs.desc.1st"),
		}],
		
		//sniper_reports
		monolith: [{
			coords: [[-63.627, -62.930]],
			label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("e:sniper_reports.label.0"),
			//popup: $.t("d:stuff.desc.inf") + $.t(" (Franz Bartel) ") +$.t("d:stuff.desc.inf2")
		}, {
			coords: [[-81.228, 14.678]],
			label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("e:sniper_reports.label.0"),
			//popup: $.t("d:stuff.desc.inf") + $.t(" (Franz Bartel) ") +$.t("d:stuff.desc.inf2")
		}],
		
		//Quest
		star: [{
			coords: [[-75.298, 31.465]],
			label: $.t("e:mission.label.main1"),
			popup: $.t("e:mission.desc.main1")
		}, {
			coords: [[-75.073, -53.965]],
			label: $.t("e:mission.label.main2"),
			popup: $.t("e:mission.desc.main2")
		}],
		
		soundmask: [{
			coords: [[-58.585, 41.572], [-69.718, -105.293]],
			label: $.t("sidebar.soundmask"),
			popup: $.t("")
		}],
	};