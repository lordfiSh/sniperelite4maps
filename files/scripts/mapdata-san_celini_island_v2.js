window.map_path   = 'san_celini_island_v2';
window.map_sWest  = L.latLng(200, -400);
window.map_nEast  = L.latLng(-400, 800);
window.map_center = [-64, -72];
window.map_mZoom  = 4;
window.mapdata_san_celini_island_v2 = {

	// Deadeye
	gearbit: [{
		coords: [[-40.714,-153.809],[-83.278,-64.688],[-76.680,26.895]],
		label: $.t("sidebar.deadeye"),
		popup: $.t("")
	}],
	
	//letter_from_home
	gearbitdrop: [{
		coords: [[-54.214,-110.830]], 
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("z:letter_from_home.label.1"),
		popup: $.t("z:gearbitdrop.desc.tent")
	},{
		coords: [[-67.909,-29.707]], 
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("z:letter_from_home.label.2"),
		popup: $.t("z:letter_from_home.desc.2"),
	},{
		coords: [[-78.278,-119.883]], 
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("z:letter_from_home.label.3"),
		popup: $.t("z:letter_from_home.desc.tent"),
	},{
		coords: [[-66.930,-22.588]], 
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("z:letter_from_home.label.4"),
		popup: $.t("z:letter_from_home.desc.0"),
	},{
		coords: [[3.513,-28.564]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("z:letter_from_home.label.5"),
		popup: $.t("z:letter_from_home.desc.5"),
	}],

	//letter_to_home
	gun: [{
		coords: [[-61.397,-126.563]], 
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("z:letter_to_home.label.1"),
		popup: $.t("z:letter_to_home.desc.1"),
	},{
		coords: [[-72.528,-73.389]], 
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("z:letter_to_home.label.2"),
		popup: $.t("z:letter_to_home.desc.tent"),
	},{
		coords: [[-82.356,-76.641]], 
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("z:letter_to_home.label.3"),
		popup: $.t("z:letter_to_home.desc.tent"),
	},{
		coords: [[-80.239,-72.686]], 
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("z:letter_to_home.label.4"),
		popup: $.t("z:letter_to_home.desc.box"),
	},{
		coords: [[-40.514,-20.918]], 
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("z:letter_to_home.label.5"),
		popup: $.t("z:letter_to_home.desc.5"),
	}],
	
	//last_letter
	key: [{
		coords: [[-30.069,-26.631]], 
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("z:last_letter.label.1"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-67.306,-83.408]], 
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("z:last_letter.label.2"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-82.250,-52.559]], 
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("z:last_letter.label.3"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-35.675,-82.266]], 
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("z:last_letter.label.4"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[10.142,-31.113]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("z:last_letter.label.5"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	}],
	 
	//duty_poster
	module: [{
		coords: [[-82.250,-43.594]], 
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #xx"),
		popup: $.t("misc.officer") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-34.886,-85.166]], 
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #xx"),
		popup: $.t("misc.officer") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-41.245,-17.842]], 
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #xx"),
		popup: $.t("misc.officer") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-65.946,-4.570]], 
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #xx"),
		popup: $.t("misc.officer") + $.t(" (xxx) ") +$.t("misc.position"),
	}],
	
	
	//misc_docs 
	outfit: [{
		coords: [[-40.246,-81.738]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("z:misc_docs.label.0"),
		popup: $.t("z:misc_docs.desc.1"),
	},{
		coords: [[-82.391,-40.518]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("z:misc_docs.label.1"),
		popup: $.t("z:misc_docs.desc.house"),
	},{
		coords: [[-82.552,-38.496]],  
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("z:misc_docs.label.2"),
		popup: $.t("z:misc_docs.desc.house"),
	},{
		coords: [[-69.037,-31.0250]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("z:misc_docs.label.3"),
		popup: $.t("z:misc_docs.desc.4"),
	},{
		coords: [[-66.267,-7.910]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("z:misc_docs.label.4"),
		popup: $.t("z:misc_docs.desc.radio"),
	},{
		coords: [[-43.771,-7.998]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("z:misc_docs.label.5"),
		popup: $.t("z:misc_docs.desc.1"),
	},{
		coords: [[-42.747,-19.600]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("z:misc_docs.label.6"),
		popup: $.t("z:misc_docs.desc.house2"),
	},{
		coords: [[6.490,-32.783]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("z:misc_docs.label.7"),
		popup: $.t("z:duty_poster.desc.officer"),
	}],
	
	//sniper_reports
	monolith: [{
		coords: [[-67.643,-151.260]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("z:sniper_reports.label.hosenfeld"),
		popup: $.t("z:sniper_reports.desc.hosenfeld"),
	}],
	
	//Quest
	star: [{
		coords: [[7.450,-36.123]],
		label: $.t("z:mission.label.main1"), 
		popup: $.t("z:mission.desc.main1") +$.t("misc.mainmission")
	},{
		coords: [[-36.809,-78.662],[-67.374,-6.240],[-82.710,-43.594],[-40.914,-14.414]],
		label: $.t("z:mission.label.main2"),
		popup: $.t("z:mission.desc.main2") +$.t("misc.mainmission")
	}],
	
	//Montor Sound
	soundmask: [{
		coords: [[-79.766,-74.355],[-72.342,-87.100],[-70.642,-58.447]],
		label: $.t("sidebar.soundmask"),
		popup: $.t("")
	}],
	
};

