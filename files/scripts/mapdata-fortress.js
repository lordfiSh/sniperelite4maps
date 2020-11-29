window.map_path   = 'fortress';
window.map_sWest  = L.latLng(-200, 800);
window.map_nEast  = L.latLng(200, -400);
window.map_center = [-50, -50];
window.map_mZoom  = 5;
window.mapdata_fortress = {

	// Deadeye
	gearbit: [{
		coords: [[-62.995,-80.332],[-65.982,-163.389],[40.112,-80.244]],
		label: $.t("sidebar.deadeye"),
		//popup: $.t("h:stuff.desc.deadeye")
	}],
	
	//letter_from_home
	gearbitdrop: [{
		coords: [[-74.683,-103.140]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("h:letter_from_home.label.0"),
		//popup: $.t("misc.inf") + $.t(" (Carsten Wedekind) ") +$.t("misc.position"),
	},{
		coords: [[-28.960,-90.000]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("h:letter_from_home.label.0"),
		//popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-15.242,-77.388]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("h:letter_from_home.label.0"),
		//popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-23.966,-85.913]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("h:letter_from_home.label.0"),
		//popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
	},{
		coords: [[-11.566,-133.374]],
		label: $.t("sidebar.letter_from_home") + $.t(": ") + $.t("h:letter_from_home.label.0"),
		//popup: $.t("misc.inf") + $.t(" (XXX) ") +$.t("misc.position"),
	}],

	//letter_to_home
	//popup: $.t("d:stuff.desc.inf") + $.t(" (Franz Bartel) ") +$.t("d:stuff.desc.inf2")
	gun: [{
		coords: [[-59.311,-91.670]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("h:letter_to_home.label.0"),
		//popup: $.t("h:letter_to_home.desc.0"),
	},{
		coords: [[-29.152,-102.920]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("h:letter_to_home.label.0"),
		//popup: $.t("h:letter_to_home.desc.0"),
	},{
		coords: [[-26.352,-106.787]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("h:letter_to_home.label.0"),
		//popup: $.t("h:stuff.desc.tent"),
	},{
		coords: [[-44.528,-154.775]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("h:letter_to_home.label.0"),
		//popup: $.t("h:letter_to_home.desc.0"),
	},{
		coords: [[-40.313,-143.438]],
		label: $.t("sidebar.letter_to_home") + $.t(": ") + $.t("h:letter_to_home.label.0"),
		//popup: $.t("h:letter_to_home.desc.0"),
	}],
	
	//last_letter
	key: [{
		coords: [[-61.627,-117.554]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("h:last_letter.label.1"),
		popup: $.t("misc.inf") + $.t(" (Clemens Gutermuth) ") +$.t("misc.position"),
	},{
		coords: [[-60.845,-113.027]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("h:last_letter.label.2"),
		popup: $.t("misc.inf") + $.t(" (Erich Schröder) ") +$.t("misc.position"),
	},{
		coords: [[-36.809,-97.119 ]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("h:last_letter.label.0"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[21.371,-87.319]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("h:last_letter.label.0"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	},{
		coords: [[0,0]],
		label: $.t("sidebar.last_letter") + $.t(": ") + $.t("h:last_letter.label.0"),
		popup: $.t("misc.inf") + $.t(" (xxx) ") +$.t("misc.position"),
	}],
	 
	//duty_poster
	module: [{
		coords: [[-81.388,-93.955]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #29"),
		popup: $.t("misc.officer") + $.t(" (Dieter Hahn) ") +$.t("sidebar.position"),
	},{
		coords: [[-74.810,-131.660]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #30"),
		popup: $.t("misc.officer") + $.t(" (Waldemar Brose) ") +$.t("misc.position"),
	},{
		coords: [[-43.101,-100.942]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #31"),
		popup: $.t("misc.officer") + $.t(" (Nils Abbing) ") +$.t("sidebar.position"),
	},{
		coords: [[20.509,-92.900]],
		label: $.t("sidebar.duty_poster") + $.t(": ") + $.t("misc.duty_poster") + $.t(" #32"),
		popup: $.t("misc.officer") + $.t(" (Günther Essert) ") +$.t("sidebar.position"),
	}],
	
	
	//misc_docs 
	outfit: [{
		coords: [[-28.999,-87.451 ]],
		label: $.t("sidebar.misc_docs") + $.t(": ") +$.t("misc.memo") +$.t("h:misc_docs.label.heinz") + $.t("h:misc_docs.label.1"),
		//popup: $.t("h:stuff.desc.officer"),
	},{
		coords: [[-8.972,-97.119]],
		label: $.t("sidebar.misc_docs") + $.t(": ") +$.t("misc.memo") +$.t("h:misc_docs.label.heinz") + $.t("h:misc_docs.label.2"),
		//popup: $.t("h:stuff.desc.inf"),
	},{
		coords: [[-24.567,-92.285]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("h:misc_docs.label.3"),
		//popup: $.t("h:misc_docs.desc.tres"),
	},{
		coords: [[-41.377,-147.744]],
		label: $.t("sidebar.misc_docs") + $.t(": ") +$.t("misc.letter") +$.t("h:misc_docs.label.heinz") + $.t("h:misc_docs.label.4"),
		//popup: $.t("h:misc_docs.desc.tent"),
	},{
		coords: [[-30.145,-152.314]],
		label: $.t("sidebar.misc_docs") + $.t(": ") +$.t("misc.letter") +$.t("h:misc_docs.label.5"),
		popup: $.t("h:misc_docs.desc.radio"),
	},{
		coords: [[-31.952,-157.412]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("h:misc_docs.label.6"),
		//popup: $.t("h:misc_docs.desc.1st"),
	},{
		coords: [[-16.046,-142.559]],
		label: $.t("sidebar.misc_docs") + $.t(": ") +$.t("misc.letter") +$.t("h:misc_docs.label.7"),
		//popup: $.t("h:misc_docs.desc.1st"),
	},{
		coords: [[56.753,-75.762]],
		label: $.t("sidebar.misc_docs") + $.t(": ") + $.t("h:misc_docs.label.8"),
		//popup: $.t("h:misc_docs.desc.1st"),
	}],
	
	//sniper_reports
	monolith: [{
		coords: [[-36.739,-123.398]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") +$.t("Leutnant Dietrich Stauss"),
		popup: $.t("misc.sniper")
	},{
		coords: [[-5.178,-122.080]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") +$.t("Gefreiter Volker Lochs"),
		popup: $.t("misc.sniper")
	},{
		coords: [[-36.598,-119.707]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") +$.t("Leutnant Gregor Winkler"),
		popup: $.t("misc.sniper")
	},{
		coords: [[37.579,-105.820]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") +$.t("Obergefreiter Eberhard Succow"),
		popup: $.t("misc.sniper")
	},{
		coords: [[44.653,-99.404]],
		label: $.t("sidebar.sniper_reports") + $.t(": ") +$.t("Leutnant Michael Wegner"),
		popup: $.t("misc.sniper")
	}],
	
	//Quest
	star: [{
		coords: [[-24.687,-94.043]],
		label: $.t("h:mission.label.main1"), 
		popup: $.t("Misc Item ") +$.t("h:misc_docs.label.3")
	},{
		coords: [[-13.667,-147.832],[14.350,-89.561],[-13.411,-109.424],[41.112,-97.734]],
		label: $.t("h:mission.label.main2"),
		popup: $.t("h:mission.desc.main2")
	}],
	 
	soundmask: [{
		coords: [[0,0]],
		label: $.t("sidebar.soundmask"),
		popup: $.t("")
	}],
};



