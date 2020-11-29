window.map_path   = 'lorino_dockyard';
window.map_sWest  = L.latLng(500, -800);
window.map_nEast  = L.latLng(-400, 800);
window.map_center = [-50, -50];
window.map_mZoom  = 4;
window.mapdata_lorino_dockyard = {

	// Star
	star: [{
		coords: [[6.141,-70.137]],
		label: $.t("d:mission.label.main1"),
		popup: $.t("d:mission.desc.main1")
	},{
		coords: [[-44.778,-27.598]],
		label: $.t("d:mission.label.main2"),
		popup: $.t("d:mission.desc.main2")
	},{
		coords: [[18.062,-29.180],[-17.141,28.828],[-81.052,5.625],[-77.542,-51.240],[-64.548,-100.811]],
		label: $.t("d:mission.label.main3"),
		popup: $.t("d:mission.desc.main3")
	}],
	
	// Deadeye
	gearbit: [{
		coords: [[-68.848,69.785],[-83.216,-86.836],[-74.637,-114.258]],
		label: $.t("d:stuff.label.deadeye"),
		popup: $.t("d:stuff.desc.deadeye")
	}],
	
	//letter_from_home
	gearbitdrop: [{
		coords: [[3.689,-69.434]],
		label: $.t("d:stuff.label.letter_from_home") + $.t(": ") + $.t("d:letter_from_home.label.0"),
		popup: $.t("d:letter_from_home.desc.0")
	},{
		coords: [[-6.577,-63.545]],
		label: $.t("d:stuff.label.letter_from_home") + $.t(": ") + $.t("d:letter_from_home.label.0"),
		popup: $.t("d:letter_from_home.desc.0"),
	},{
		coords: [[6.752,2.813]],
		label: $.t("d:stuff.label.letter_from_home") + $.t(": ") + $.t("d:letter_from_home.label.0"),
		popup: $.t("d:stuff.desc.0"),
	},{
		coords: [[-55.279,22.588]],
		label: $.t("d:stuff.label.letter_from_home") + $.t(": ") + $.t("d:letter_from_home.label.0"),
		popup: $.t("d:letter_from_home.desc.0"),
	},{
		coords: [[-67.509,-17.227]],
		label: $.t("d:stuff.label.letter_from_home") + $.t(": ") + $.t("d:letter_from_home.label.0"),
		popup: $.t("d:letter_from_home.desc.0"),
	}],

	//letter_to_home
	gun: [{
		coords: [[-29.688,-145.371 ]],
		label: $.t("d:stuff.label.letter_to_home") + $.t(": ") + $.t("d:letter_to_home.label.1"),
		popup: $.t("d:letter_to_home.desc.0"),
	},{
		coords: [[-60.888,-25.400]],
		label: $.t("d:stuff.label.letter_to_home") + $.t(": ") + $.t("d:letter_to_home.label.2"),
		popup: $.t("d:letter_to_home.desc.2"),
	},{
		coords: [[15.538,-55.635]],
		label: $.t("d:stuff.label.letter_to_home") + $.t(": ") + $.t("d:letter_to_home.label.3"),
		popup: $.t("d:stuff.desc.3"),
	},{
		coords: [[-50.848,-131.309]],
		label: $.t("d:stuff.label.letter_to_home") + $.t(": ") + $.t("d:letter_to_home.label.0"),
		popup: $.t("d:letter_to_home.desc.0"),
	},{
		coords: [[-63.352,-85.166]],
		label: $.t("d:stuff.label.letter_to_home") + $.t(": ") + $.t("d:letter_to_home.label.0"),
		popup: $.t("d:stuff.desc.inf") + $.t(" (Fritz Schuable) ") +$.t("d:stuff.desc.inf2")
	}],
	
	//last_letter
	key: [{
		coords: [[-17.811,-119.180]],
		label: $.t("d:stuff.label.last_letter") + $.t(": ") + $.t("d:last_letter.label.1"),
		popup: $.t("d:stuff.desc.inf") + $.t(" (Johann Schuster) ") +$.t("d:stuff.desc.inf2"),
	},{
		coords: [[13.667,-31.553]],
		label: $.t("d:stuff.label.last_letter") + $.t(": ") + $.t("d:last_letter.label.0"),
		popup: $.t("d:stuff.desc.inf") + $.t(" (Hans Lufter) ") +$.t("d:stuff.desc.inf2")
	},{
		coords: [[-55.479,-23.115]],
		label: $.t("d:stuff.label.last_letter") + $.t(": ") + $.t("d:last_letter.label.0"),
		popup: $.t("d:stuff.desc.inf") + $.t(" (XXX) ") +$.t("d:stuff.desc.inf2")
	},{
		coords: [[-64.245,-37.178]], 
		label: $.t("d:stuff.label.last_letter") + $.t(": ") + $.t("d:last_letter.label.0"),
		popup: $.t("d:stuff.desc.inf") + $.t(" (Timo König) ") +$.t("d:stuff.desc.inf2")
	},{
		coords: [[-72.369,-83.232]],
		label: $.t("d:stuff.label.last_letter") + $.t(": ") + $.t("d:last_letter.label.0"),
		popup: $.t("d:stuff.desc.inf") + $.t(" (Franz Bartel) ") +$.t("d:stuff.desc.inf2")
	}],
	 
	//duty_poster
	module: [{
		coords: [[-12.726,-119.092]],
		label: $.t("d:stuff.label.duty_poster") + $.t(": ") + $.t("d:duty_poster.label.0"),
		popup: $.t("d:duty_poster.desc.officer"),
	},{
		coords: [[-65.658,-41.660]],
		label: $.t("d:stuff.label.duty_poster") + $.t(": ") + $.t("d:duty_poster.label.0"),
		popup: $.t("d:duty_poster.desc.officer"),
	},{
		coords: [[-75.716,-21.445]],
		label: $.t("d:stuff.label.duty_poster") + $.t(": ") + $.t("d:duty_poster.label.0"),
		popup: $.t("d:duty_poster.desc.habor"),
	},{
		coords: [[-62.472,-114.346]],
		label: $.t("d:stuff.label.duty_poster") + $.t(": ") + $.t("d:duty_poster.label.0"),
		popup: $.t("d:duty_poster.desc.officer"),
	}],
	
	
	//misc_docs 
	outfit: [{
		coords: [[-55.925,-115.840]], 
		label: $.t("d:stuff.label.misc_docs") + $.t(": ") + $.t("d:misc_docs.label.0"),
		popup: $.t("d:misc_docs.desc.0"),
	},{
		coords: [[7.450,-72.334]],
		label: $.t("d:stuff.label.misc_docs") + $.t(": ") + $.t("d:misc_docs.label.0"),
		popup: $.t("d:misc_docs.desc.0"),
	},{
		coords: [[7.537,-68.027]], 
		label: $.t("d:stuff.label.misc_docs") + $.t(": ") + $.t("d:misc_docs.label.0"),
		popup: $.t("d:misc_docs.desc.tres"),
	},{
		coords: [[-68.974,-14.326]],
		label: $.t("d:stuff.label.misc_docs") + $.t(": ") + $.t("d:misc_docs.label.0"),
		popup: $.t("d:misc_docs.desc.0"),
	},{
		coords: [[-67.204,-58.887]],
		label: $.t("d:stuff.label.misc_docs") + $.t(": ") + $.t("d:misc_docs.label.0"),
		popup: $.t("d:misc_docs.desc.0"),
	},{
		coords: [[-72.182,-58.008]],
		label: $.t("d:stuff.label.misc_docs") + $.t(": ") + $.t("d:misc_docs.label.0"),
		popup: $.t("d:misc_docs.desc.0"),
	},{
		coords: [[-75.387,-82.002]],
		label: $.t("d:stuff.label.misc_docs") + $.t(": ") + $.t("d:misc_docs.label.0"),
		popup: $.t("d:misc_docs.desc.0"),
	},{
		coords: [[-74.567,-83.320]],
		label: $.t("d:stuff.label.misc_docs") + $.t(": ") + $.t("d:misc_docs.label.0"),
		popup: $.t("d:misc_docs.desc.0"),
	}],
	
	//sniper_reports
	monolith: [{
		coords: [[77.730,-10.107]],
		label: $.t("d:stuff.label.sniper_reports") + $.t(": ") + $.t("d:sniper_reports.label.0"),
		popup: $.t("d:sniper_reports.desc.0"),
	},{
		coords: [[12.125,2.988]],
		label: $.t("d:stuff.label.sniper_reports") + $.t(": ") + $.t("d:sniper_reports.label.0"),
		popup: $.t("d:sniper_reports.desc.0"),
	}],
	
};
