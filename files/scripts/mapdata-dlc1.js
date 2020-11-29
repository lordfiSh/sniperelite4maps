window.map_path   = 'dlc1';
window.map_sWest  = L.latLng(200, -400);
window.map_nEast  = L.latLng(-400, 800);
window.map_center = [-64, -72];
window.map_mZoom  = 4;
window.mapdata_dlc1 = {

	// Deadeye
	gearbit: [{
		coords: [[-50.848,-124.277],[-19.145,-179.297],[-15.454,-69.961]],
		label: $.t("sidebar.deadeye"),
		popup: $.t("i:stuff.desc.deadeye")
	}],
	
	//letter_from_home
	gearbitdrop: [{
		coords: [[-2.285,-139.834]], 
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("i:letter_from_home.label.1"),
		popup: $.t("i:gearbitdrop.desc.tent")
	},{
		coords: [[-61.939,-110.918]], 
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("i:letter_from_home.label.2"),
		popup: $.t("i:letter_from_home.desc.2"),
	},{
		coords: [[-79.303,-113.379]], 
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("i:letter_from_home.label.3"),
		popup: $.t("i:letter_from_home.desc.tent"),
	},{
		coords: [[-81.570,-89.033]], 
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("i:letter_from_home.label.4"),
		popup: $.t("misc.inf") + $.t(" (Wulf Vogel) ") +$.t(" patrol trough the whole area!"),
	},{
		coords: [[-65.658,-48.779]], 
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("i:letter_from_home.label.5"),
		popup: $.t("i:letter_from_home.desc.5"),
	}],

	//letter_to_home
	gun: [{
		coords: [[-26.746,-108.018]], 
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("i:letter_to_home.label.1"),
		popup: $.t("i:letter_to_home.desc.1"),
	},{
		coords: [[-45.460,-119.971]], 
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("i:letter_to_home.label.2"),
		popup: $.t("i:letter_to_home.desc.tent"),
	},{
		coords: [[-79.188,-79.014]], 
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("i:letter_to_home.label.3"),
		popup: $.t("i:letter_to_home.desc.tent"),
	},{
		coords: [[0,0]], 
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("i:letter_to_home.label.4"),
		popup: $.t("i:letter_to_home.desc.box"),
	},{
		coords: [[-66.653,-47.725]], 
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("i:letter_to_home.label.5"),
		popup: $.t("i:letter_to_home.desc.5"),
	}],
	
	//last_letter
	key: [{
		coords: [[0.703,-143.965]], 
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("i:last_letter.label.1"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-16.468,-87.275]], 
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("i:last_letter.label.2"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-54.725,-83.408]], 
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("i:last_letter.label.3"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-79.921,-118.740]], 
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("i:last_letter.label.4"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-80.194,-84.375]], 
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("i:last_letter.label.5"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	}],
	 
	//duty_poster
	module: [{
		coords: [[9.449,-94.395]], 
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #A4"),
		popup: $.t("misc.officer") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-60.888,-107.578]],  
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #A3"),
		popup: $.t("misc.officer") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-79.138,-63.984]],  
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #A2"),
		popup: $.t("misc.officer") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-67.576,-80.596]],  
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #A1"),
		popup: $.t("misc.officer") + $.t(" (xxx) ") +$.t("misc.position"),
	}],
	
	
	//misc_docs 
	outfit: [{
		coords: [[6.665,-126.563]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("i:misc_docs.label.1"),
		popup: $.t("i:misc_docs.desc.house"),
	},{
		coords: [[11.609,-92.988]],  
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("i:misc_docs.label.2"),
		popup: $.t("i:misc_docs.desc.house"),
	},{
		coords: [[-56.511,-108.809]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("i:misc_docs.label.3"),
		popup: $.t("i:misc_docs.desc.4"),
	},{
		coords: [[-61.732,-106.523]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("i:misc_docs.label.4"),
		popup: $.t("i:misc_docs.desc.radio"),
	},{
		coords: [[-48.225,-96.240]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("i:misc_docs.label.5"),
		popup: $.t("misc.desk"),
	},{
		coords: [[-46.680,-102.656]], 
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("i:misc_docs.label.6"),
		popup: $.t("misc.safe"),
	}],
	
	//sniper_reports
	monolith: [{
		coords: [[-11.437,-88.770]], 
		label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("i:sniper_reports.label.1"),
		popup: $.t("i:sniper_reports.desc.1"),
	},{
		coords: [[-40.781,-112.500]], 
		label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("i:sniper_reports.label.2"),
		popup: $.t("i:sniper_reports.desc.2"),
	},{
		coords: [[-75.118,-74.268]], 
		label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("i:sniper_reports.label.3"),
		popup: $.t("i:sniper_reports.desc.3"),
	}],
	
	//Quest
	star: [],
	
	soundmask: [],
	
};

