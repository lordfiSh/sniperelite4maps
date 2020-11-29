window.map_path   = 'regilino_viaduct';
window.map_sWest  = L.latLng(-200, 0);
window.map_nEast  = L.latLng(0, -200);
window.map_center = [-50, -50];
window.map_mZoom  = 4;
window.mapdata_regilino_viaduct = {

	// Deadeye
	gearbit: [{
		coords: [[-83.053,-136.494],[-32.806,-85.781],[-45.244,-15.205]],
		label: $.t("c:stuff.label.deadeye"),
		popup: $.t("c:stuff.desc.deadeye")
	}],
	
	//letter_from_home
	gearbitdrop: [{
		coords: [[-66.705,-22.983]],
		label: $.t("c:stuff.label.letter_from_home") + $.t(": ") + $.t("c:letter_from_home.label.1"),
		popup: $.t("c:letter_from_home.desc.1")
	},{
		coords: [[-46.165,-134.648]],
		label: $.t("c:stuff.label.letter_from_home") + $.t(": ") + $.t("c:letter_from_home.label.2"),
		popup: $.t("c:letter_from_home.desc.2"),
	},{
		coords: [[-40.413,-94.307]],
		label: $.t("c:stuff.label.letter_from_home") + $.t(": ") + $.t("c:letter_from_home.label.0"),
		popup: $.t("c:stuff.desc.tent"),
	},{
		coords: [[-51.179,-34.233]],
		label: $.t("c:stuff.label.letter_from_home") + $.t(": ") + $.t("c:letter_from_home.label.0"),
		popup: $.t("c:letter_from_home.desc.0"),
	},{
		coords: [[-73.303,-91.274]],
		label: $.t("c:stuff.label.letter_from_home") + $.t(": ") + $.t("c:letter_from_home.label.0"),
		popup: $.t("c:letter_from_home.desc.5"),
	}],

	//letter_to_home
	gun: [{
		coords: [[-79.750,-108.677]],
		label: $.t("c:stuff.label.letter_to_home") + $.t(": ") + $.t("c:letter_to_home.label.0"),
		popup: $.t("c:letter_to_home.desc.0"),
	},{
		coords: [[-64.072,-146.074]],
		label: $.t("c:stuff.label.letter_to_home") + $.t(": ") + $.t("c:letter_to_home.label.0"),
		popup: $.t("c:letter_to_home.desc.0"),
	},{
		coords: [[-35.066,-46.494]], 
		label: $.t("c:stuff.label.letter_to_home") + $.t(": ") + $.t("c:letter_to_home.label.0"),
		popup: $.t("c:stuff.desc.tent"),
	},{
		coords: [[-70.481,-94.263]],
		label: $.t("c:stuff.label.letter_to_home") + $.t(": ") + $.t("c:letter_to_home.label.0"),
		popup: $.t("c:letter_to_home.desc.0"),
	},{
		coords: [[-81.641,-61.040]],
		label: $.t("c:stuff.label.letter_to_home") + $.t(": ") + $.t("c:letter_to_home.label.0"),
		popup: $.t("c:letter_to_home.desc.0"),
	}],
	
	//last_letter
	key: [{
		coords: [[-61.606,-147.700]],
		label: $.t("c:stuff.label.last_letter") + $.t(": ") + $.t("c:last_letter.label.0"),
		popup: $.t("c:stuff.desc.inf"),
	},{
		coords: [[-45.398,-28.213]],
		label: $.t("c:stuff.label.last_letter") + $.t(": ") + $.t("c:last_letter.label.0"),
		popup: $.t("c:stuff.desc.inf"),
	},{
		coords: [[-72.568,-20.391]], 
		label: $.t("c:stuff.label.last_letter") + $.t(": ") + $.t("c:last_letter.label.0"),
		popup: $.t("c:stuff.desc.inf"),
	},{
		coords: [[-69.688,-92.021]], 
		label: $.t("c:stuff.label.last_letter") + $.t(": ") + $.t("c:last_letter.label.0"),
		popup: $.t("c:stuff.desc.inf"),
	},{
		coords: [[-78.879,-98.525]],
		label: $.t("c:stuff.label.last_letter") + $.t(": ") + $.t("c:last_letter.label.0"),
		popup: $.t("c:stuff.desc.inf"),
	}],
	 
	//duty_poster
	module: [{
		coords: [[-61.794,-150.337]], 
		label: $.t("c:stuff.label.duty_poster") + $.t(": ") + $.t("c:duty_poster.label.1"),
		popup: $.t("c:duty_poster.desc.officer"),
	},{
		coords: [[-35.317,-90.088]],
		label: $.t("c:stuff.label.duty_poster") + $.t(": ") + $.t("c:duty_poster.label.1"),
		popup: $.t("c:duty_poster.desc.officer"),
	},{
		coords: [[-81.181,-67.456]],
		label: $.t("c:stuff.label.duty_poster") + $.t(": ") + $.t("c:duty_poster.label.1"),
		popup: $.t("c:duty_poster.desc.officer"),
	},{
		coords: [[-79.072,-100.459]],
		label: $.t("c:stuff.label.duty_poster") + $.t(": ") + $.t("c:duty_poster.label.1"),
		popup: $.t("c:duty_poster.desc.officer"),
	}],
	
	
	//misc_docs 
	outfit: [{
		coords: [[-58.148,-133.726]], 
		label: $.t("c:stuff.label.misc_docs") + $.t(": ") + $.t("c:misc_docs.label.0"),
		popup: $.t("c:stuff.desc.officer"),
	},{
		coords: [[-70.334,-72.817]], 
		label: $.t("c:stuff.label.misc_docs") + $.t(": ") + $.t("c:misc_docs.label.0"),
		popup: $.t("c:stuff.desc.inf"),
	},{
		coords: [[-51.152,-41.792]], 
		label: $.t("c:stuff.label.misc_docs") + $.t(": ") + $.t("c:misc_docs.label.0"),
		popup: $.t("c:misc_docs.desc.tres"),
	},{
		coords: [[-72.751,-43.857]],
		label: $.t("c:stuff.label.misc_docs") + $.t(": ") + $.t("c:misc_docs.label.0"),
		popup: $.t("c:misc_docs.desc.desk"),
	},{
		coords: [[-72.790,-62.227]],
		label: $.t("c:stuff.label.misc_docs") + $.t(": ") + $.t("c:misc_docs.label.0"),
		popup: $.t("c:misc_docs.desc.radio"),
	},{
		coords: [[-70.066,-95.669]],
		label: $.t("c:stuff.label.misc_docs") + $.t(": ") + $.t("c:misc_docs.label.0"),
		popup: $.t("c:misc_docs.desc.1st"),
	}],
	
	//sniper_reports
	monolith: [{
		coords: [[-52.107,-26.499]],
		label: $.t("c:stuff.label.sniper_reports") + $.t(": ") + $.t("c:sniper_reports.label.0"),
		popup: $.t("c:sniper_reports.desc.0"),
	},{
		coords: [[-69.116,-24.038]],
		label: $.t("c:stuff.label.sniper_reports") + $.t(": ") + $.t("c:sniper_reports.label.0"),
		popup: $.t("c:sniper_reports.desc.0"),
	}],
	
};

