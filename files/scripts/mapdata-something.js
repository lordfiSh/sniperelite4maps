window.map_path   = 'san_celini_island';
window.map_sWest  = L.latLng(500, -200);
window.map_nEast  = L.latLng(-200, 500);
window.map_center = [-50, -50];
window.map_mZoom  = 6;
window.mapdata_san_celini_island = {

	// Deadeye
	gearbit: [{
		coords: [[-69.840,66.270],[-20.797,-112.500],[-79.781,-24.082]],
		label: $.t("a:stuff.label.deadeye"),
		popup: $.t("a:stuff.desc.deadeye")
	}],
	
	//letter_from_home
	gearbitdrop: [{
		coords: [[26.824,13.008]],
		label: $.t("a:stuff.label.letter_from_home") + $.t(": ") + $.t("a:letter_from_home.label.1"),
		popup: $.t("a:gearbitdrop.desc.1")
	},{
		coords: [[-58.171,8.262]],
		label: $.t("a:stuff.label.letter_from_home") + $.t(": ") + $.t("a:letter_from_home.label.0"),
		popup: $.t("a:letter_from_home.desc.2"),
	},{
		coords: [[-72.289,-77.871]],
		label: $.t("a:stuff.label.letter_from_home") + $.t(": ") + $.t("a:letter_from_home.label.0"),
		popup: $.t("a:letter_from_home.desc.tent"),
	},{
		coords: [[-56.511,17.622]],
		label: $.t("a:stuff.label.letter_from_home") + $.t(": ") + $.t("a:letter_from_home.label.0"),
		popup: $.t("a:letter_from_home.desc.0"),
	},{
		coords: [[0,0]],
		label: $.t("a:stuff.label.letter_from_home") + $.t(": ") + $.t("a:letter_from_home.label.0"),
		popup: $.t("a:letter_from_home.desc.0"),
	}],

	//letter_to_home
	gun: [{
		coords: [[-48.778,-86.133]],
		label: $.t("a:stuff.label.letter_to_home") + $.t(": ") + $.t("a:letter_to_home.label.1"),
		popup: $.t("a:letter_to_home.desc.1"),
	},{
		coords: [[-37.545,-70.049]],
		label: $.t("a:stuff.label.letter_to_home") + $.t(": ") + $.t("a:letter_to_home.label.2"),
		popup: $.t("a:letter_to_home.desc.2"),
	},{
		coords: [[-62.309,-32.871]],
		label: $.t("a:stuff.label.letter_to_home") + $.t(": ") + $.t("a:letter_to_home.label.3"),
		popup: $.t("a:letter_to_home.desc.3"),
	},{
		coords: [[-77.504,-37.441]],
		label: $.t("a:stuff.label.letter_to_home") + $.t(": ") + $.t("a:letter_to_home.label.4"),
		popup: $.t("a:letter_to_home.desc.tent"),
	},{
		coords: [[-75.186,-33.574]],
		label: $.t("a:stuff.label.letter_to_home") + $.t(": ") + $.t("a:letter_to_home.label.5"),
		popup: $.t("a:letter_to_home.desc.box"),
	}],
	
	//last_letter
	key: [{
		coords: [[-14.456,-43.726]],
		label: $.t("a:stuff.label.last_letter") + $.t(": ") + $.t("a:last_letter.label.1"),
		popup: $.t("a:last_letter.desc.inf"),
	},{
		coords: [[-56.921,-41.484]],
		label: $.t("a:stuff.label.last_letter") + $.t(": ") + $.t("a:last_letter.label.2"),
		popup: $.t("a:last_letter.desc.2"),
	},{
		coords: [[-80.012,-8.350]],
		label: $.t("a:stuff.label.last_letter") + $.t(": ") + $.t("a:last_letter.label.0"),
		popup: $.t("a:last_letter.desc.inf"),
	},{
		coords: [[-9.449,15.469]],
		label: $.t("a:stuff.label.last_letter") + $.t(": ") + $.t("a:last_letter.label.0"),
		popup: $.t("a:last_letter.desc.inf"),
	},{
		coords: [[0,0]],
		label: $.t("a:stuff.label.last_letter") + $.t(": ") + $.t("a:last_letter.label.0"),
		popup: $.t("a:last_letter.desc.0"),
	}],
	 
	//duty_poster
	module: [{
		coords: [[-14.371,-44.846]],
		label: $.t("a:stuff.label.duty_poster") + $.t(": ") + $.t("a:duty_poster.label.1"),
		popup: $.t("a:duty_poster.desc.officer"),
	},{
		coords: [[-78.613,1.406]],
		label: $.t("a:stuff.label.duty_poster") + $.t(": ") + $.t("a:duty_poster.label.1"),
		popup: $.t("a:duty_poster.desc.officer"),
	},{
		coords: [[-54.851,33.618]],
		label: $.t("a:stuff.label.duty_poster") + $.t(": ") + $.t("a:duty_poster.label.1"),
		popup: $.t("a:duty_poster.desc.officer"),
	},{
		coords: [[-21.780,23.027]],
		label: $.t("a:stuff.label.duty_poster") + $.t(": ") + $.t("a:duty_poster.label.1"),
		popup: $.t("a:duty_poster.desc.officer"),
	}],
	
	
	//misc_docs 
	outfit: [{
		coords: [[-19.870,-40.869]], 
		label: $.t("a:stuff.label.misc_docs") + $.t(": ") + $.t("a:misc_docs.label.0"),
		popup: $.t("a:misc_docs.desc.1"),
	},{
		coords: [[0-78.526,-1.055]], 
		label: $.t("a:stuff.label.misc_docs") + $.t(": ") + $.t("a:misc_docs.label.1"),
		popup: $.t("a:misc_docs.desc.house"),
	},{
		coords: [[-78.716,3.955]], 
		label: $.t("a:stuff.label.misc_docs") + $.t(": ") + $.t("a:misc_docs.label.1"),
		popup: $.t("a:misc_docs.desc.house"),
	},{
		coords: [[-58.700,6.812]], 
		label: $.t("a:stuff.label.misc_docs") + $.t(": ") + $.t("a:misc_docs.label.1"),
		popup: $.t("a:misc_docs.desc.4"),
	},{
		coords: [[-56.072,32.695]], 
		label: $.t("a:stuff.label.misc_docs") + $.t(": ") + $.t("a:misc_docs.label.1"),
		popup: $.t("a:misc_docs.desc.1"),
	},{
		coords: [[-24.287,32.915]], 
		label: $.t("a:stuff.label.misc_docs") + $.t(": ") + $.t("a:misc_docs.label.1"),
		popup: $.t("a:misc_docs.desc.work"),
	},{
		coords: [[0,0]], 
		label: $.t("a:stuff.label.misc_docs") + $.t(": ") + $.t("a:misc_docs.label.1"),
		popup: $.t("a:misc_docs.desc.1"),
	},{
		coords: [[0,0]], 
		label: $.t("a:stuff.label.misc_docs") + $.t(": ") + $.t("a:misc_docs.label.1"),
		popup: $.t("a:misc_docs.desc.1"),
	}],
	
	//sniper_reports
	monolith: [{
		coords: [[-56.680,-110.962]],
		label: $.t("a:stuff.label.sniper_reports") + $.t(": ") + $.t("a:sniper_reports.label.hosenfeld"),
		popup: $.t("a:sniper_reports.desc.hosenfeld"),
	}],
	
};
