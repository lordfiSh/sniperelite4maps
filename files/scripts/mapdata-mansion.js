window.map_path   = 'mansion';
window.map_sWest  = L.latLng(-200, 800);
window.map_nEast  = L.latLng(200, -400);
window.map_center = [-50, -50];
window.map_mZoom  = 5;
window.mapdata_mansion = {

	// Deadeye
	gearbit: [{
		coords: [[-74.982,-64.995],[-3.864,-60.908],[4.741,-86.309]],
		label: $.t("sidebar.deadeye"),
		//popup: $.t("g:stuff.desc.deadeye")
	}],
	

	gun: [{
		coords: [[-48.049,-66.226]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("g:letter_to_home.label.0"),
		//popup: $.t("misc.inf") + $.t(" (Carsten Wedekind) ") +$.t("misc.position"),
	},{
		coords: [[-36.031,-40.781]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("g:letter_to_home.label.0"),
		//popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-21.248,-5.142]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("g:letter_to_home.label.0"),
		//popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-49.923,16.216]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("g:letter_to_home.label.0"),
		//popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-54.265,-11.470]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("g:letter_to_home.label.0"),
		//popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
	}],


	//popup: $.t("d:stuff.desc.inf") + $.t(" (Franz Bartel) ") +$.t("d:stuff.desc.inf2")
	gearbitdrop: [{
		coords: [[-70.245,-114.653]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("g:letter_from_home.label.0"),
		popup: $.t("g:letter_from_home.desc.0"),
	},{
		coords: [[-54.851,-80.640]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("g:letter_from_home.label.0"),
		popup: $.t("g:letter_from_home.desc.0"),
	},{
		coords: [[-43.133,-53.657]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("g:letter_from_home.label.0"),
		popup: $.t("g:stuff.desc.tent"),
	},{
		coords: [[-21.739,-73.564]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("g:letter_from_home.label.0"),
		popup: $.t("g:letter_from_home.desc.0"),
	},{
		coords: [[14.051,-53.877]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("g:letter_from_home.label.0"),
		popup: $.t("g:letter_from_home.desc.0"),
	}],
	
	//last_letter
	key: [{
		coords: [[-69.037,-21.182]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("g:last_letter.label.1"),
		popup: $.t("misc.inf") + $.t(" (Eugen Wähner) ") +$.t("misc.position"),
	},{
		coords: [[-82.529,-44.297]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("g:last_letter.label.0"),
		popup: $.t("misc.inf") + $.t(" (Knut Steen) ") +$.t("misc.position"),
	},{
		coords: [[-68.188,-136.978]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("g:last_letter.label.3"),
		popup: $.t("misc.inf") + $.t(" (Augustus Tifft) ") +$.t("misc.position"),
	},{
		coords: [[10.920,-95.449]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("g:last_letter.label.4"),
		popup: $.t("misc.inf") + $.t(" (Richard Frost) ") +$.t("misc.position"),
	},{
		coords: [[-52.750,-80.332]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("g:last_letter.label.5"),
		popup: $.t("misc.inf") + $.t(" (Torsten Buchholz) ") +$.t("misc.position"),
	}],
	 
	//duty_poster
	module: [{
		coords: [[-79.368,-17.402]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("g:duty_poster.label.0"),
		popup: $.t("misc.officer") + $.t(" (Harald Trumbauer) ") +$.t("misc.position"),
	},{
		coords: [[-81.434,-52.383]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("g:duty_poster.label.0"),
		popup: $.t("misc.officer") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-41.079,-95.933]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("g:duty_poster.label.0"),
		popup: $.t("misc.officer") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-21.125,-2.417]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("g:duty_poster.label.0"),
		popup: $.t("misc.officer") + $.t(" (XXX) ") +$.t("misc.position"),
	}],
	
	
	//misc_docs 
	outfit: [{
		coords: [[-80.683,-13.491]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("g:misc_docs.label.0"),
		//popup: $.t("g:stuff.desc.officer"),
	},{
		coords: [[-74.248,-70.928]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("g:misc_docs.label.0"),
		//popup: $.t("g:stuff.desc.inf"),
	},{
		coords: [[-74.426,-71.807]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("g:misc_docs.label.0"),
		//popup: $.t("g:misc_docs.desc.tres"),
	},{
		coords: [[-74.532,-70.576]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("g:misc_docs.label.0"),
		popup: $.t("g:misc_docs.desc.tent"),
	},{
		coords: [[-20.961,-128.760]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("g:misc_docs.label.0"),
		popup: $.t("g:misc_docs.desc.radio"),
	}],
	
	//sniper_reports
	monolith: [{
		coords: [[6.490,-87.056]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("g:sniper_reports.label.0"),
		//popup: $.t("d:stuff.desc.inf") + $.t(" (Franz Bartel) ") +$.t("d:stuff.desc.inf2")
	},{
		coords: [[7.101,-84.243]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("g:sniper_reports.label.0"),
		popup: $.t("g:sniper_reports.desc.2")
	}],
	
	//Quest
	star: [{
		coords: [[-22.269,-130.693]],
		label: $.t("g:mission.label.main1"),
		popup: $.t("g:mission.desc.main1") +$.t(" ") +$.t("misc.mainmission")
	},{
		coords: [[-74.730,-72.686]],
		label: $.t("g:mission.label.main2"),
		popup: $.t("g:mission.desc.main2") +$.t(" ") +$.t("misc.mainmission") 
	},{
		coords: [[6.053,-88.682]],
		label: $.t("g:mission.label.main3"),
		popup: $.t("g:mission.desc.main3") +$.t(" ") +$.t("misc.mainmission") 
	}],
	
	soundmask: [{
		coords: [[0,0]],
		label: $.t("sidebar.soundmask"),
		popup: $.t("")
	}],
};




