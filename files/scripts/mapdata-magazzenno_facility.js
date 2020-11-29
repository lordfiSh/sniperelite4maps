window.map_path   = 'magazzenno_facility';
window.map_sWest  = L.latLng(-200, 800);
window.map_nEast  = L.latLng(200, -400);
window.map_center = [-50, -50];
window.map_mZoom  = 4;
window.mapdata_magazzenno_facility = {

	// Deadeye
	gearbit: [{
		coords: [[1.933,-72.729],[-61.939,-114.785],[-70.816,-23.818]],
		label: $.t("sidebar.deadeye"),
		popup: $.t("")
	}],
	
	//letter_from_home
	gearbitdrop: [{
		coords: [[-69.318,-118.125]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("f:letter_from_home.label.0"),
		popup: $.t("misc.inf") + $.t(" (Carsten Wedekind) ") +$.t("misc.position"),
	},{
		coords: [[-50.289,-110.303]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("f:letter_from_home.label.0"),
		popup: $.t("misc.inf") + $.t(" (Jörg Adler) ") +$.t("misc.position"),
	},{
		coords: [[-45.213,-52.822]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("f:letter_from_home.label.0"),
		popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-10.488,-123.311]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("f:letter_from_home.label.0"),
		popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-78.734,-62.578]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("f:letter_from_home.label.0"),
		popup: $.t("")
	}],

	//letter_to_home
	gun: [{
		coords: [[-12.469,-113.027]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("f:letter_to_home.label.0"),
		popup: $.t("f:letter_to_home.desc.0"),
	},{
		coords: [[-30.827,-114.697]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("f:letter_to_home.label.0"),
		popup: $.t("f:letter_to_home.desc.0"),
	},{
		coords: [[-54.877,-148.711]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("f:letter_to_home.label.0"),
		popup: $.t("f:stuff.desc.tent"),
	},{
		coords: [[-74.284,-39.023]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("f:letter_to_home.label.0"),
		popup: $.t("f:letter_to_home.desc.0"),
	},{
		coords: [[-81.531,-138.955]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("f:letter_to_home.label.0"),
		popup: $.t("f:letter_to_home.desc.0"),
	}],
	
	//last_letter
	key: [{
		coords: [[-70.816,-50.669]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("f:last_letter.label.0"),
		popup: $.t("misc.inf") + $.t(" (Manfred Pateroster) ") +$.t("misc.position"),
	},{
		coords: [[-75.141,-102.041]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("f:last_letter.label.0"),
		popup: $.t("misc.inf") + $.t(" (Christian Dirchs) ") +$.t("misc.position"),
	},{
		coords: [[-74.140,-141.328]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("f:last_letter.label.0"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-41.902,-123.223]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("f:last_letter.label.0"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[-14.009,-102.832]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("f:last_letter.label.0"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	}],
	 
	//duty_poster
	module: [{
		coords: [[-76.558,-58.271]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("f:duty_poster.label.1"),
		popup: $.t("misc.officer") + $.t(" (Anton Gruber) ") +$.t("misc.position"),
	},{
		coords: [[-66.999,-48.340]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("f:duty_poster.label.0"),
		popup: $.t("misc.officer") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-74.379,-92.373]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("f:duty_poster.label.0"),
		popup: $.t("misc.officer") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-70.988,-140.186]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("f:duty_poster.label.0"),
		popup: $.t("misc.officer") + $.t(" (XXX) ") +$.t("misc.position"),
	}],
	
	
	//misc_docs 
	outfit: [{
		coords: [[-6.359,-142.471]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("f:misc_docs.label.0"),
		popup: $.t("")
	},{
		coords: [[22.065,-116.499]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("f:misc_docs.label.0"),
		popup: $.t("")
	},{
		coords: [[-7.188,-64.775]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("f:misc_docs.label.0"),
		popup: $.t("")
	},{
		coords: [[-19.062,-40.474]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("f:misc_docs.label.0"),
		popup: $.t("")
	},{
		coords: [[-28.459,-152.666]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("f:misc_docs.label.0"),
		popup: $.t("")
	},{
		coords: [[-56.993,-107.842]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("f:misc_docs.label.0"),
		popup: $.t("")
	},{
		coords: [[-74.776,-95.317]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("f:misc_docs.label.0"),
		popup: $.t("")
	},{
		coords: [[-70.422,-91.846]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("f:misc_docs.label.0"),
		popup: $.t("")
	}],
	
	//sniper_reports
	monolith: [{
		coords: [[-13.838,-144.932]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("f:sniper_reports.label.0"),
		popup: $.t("")
	},{
		coords: [[22.187,-118.257]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("f:sniper_reports.label.0"),
		popup: $.t("")
	},{
		coords: [[15.157,-129.419]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("f:sniper_reports.label.0"),
		popup: $.t("")
	},{
		coords: [[0.615,-74.663]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("f:sniper_reports.label.0"),
		popup: $.t("")
	},{
		coords: [[-70.006,-121.201]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") + $.t("f:sniper_reports.label.0"),
		popup: $.t("")
	}],
	
	//Quest
	star: [{
		coords: [[-20.961,-39.902]],
		label: $.t("f:mission.label.main1"),
		popup: $.t("f:mission.desc.main1")
	},{
		coords: [[-23.241,-52.031]],
		label: $.t("f:mission.label.main2"),
		popup: $.t("f:mission.desc.main2")
	},{
		coords: [[-16.383,-117.861]],
		label: $.t("f:mission.label.main4"),
		popup: $.t("f:mission.desc.main4")
	},{
		coords: [[26.746,-70.313]],
		label: $.t("f:mission.label.main3"),
		popup: $.t("f:mission.desc.main3")
	}],
	
	soundmask: [],
};


