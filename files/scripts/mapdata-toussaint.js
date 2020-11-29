window.map_path   = 'toussaint';
window.map_sWest  = L.latLng(0, 0);
window.map_nEast  = L.latLng(220, 220);
window.map_center = [64, 58];
window.map_mZoom  = 6;
window.mapdata_toussaint = {

	gearbit: [{
		coords: [[118.563,62.625]],
		label: $.t("t:gearbit.label.1"),
		popup: $.t("t:gearbit.desc.1")
	}],
	
	gearbitdrop: [{
		coords: [[148.219,137.406]],
		label: $.t("t:stuff.label.lastletter") + $.t(": ") + $.t("t:gearbitdrop.label.1"),
		popup: $.t("t:gearbitdrop.desc.1")
	}],
	
		
	key: [{
		coords: [[110.188,80.875]],
		label: $.t("sidebar.gearbit"),
		popup: $.t("misc.needhelp")
	}],
	
	module: [{
		coords: [[104.063,72.813]],
		label: $.t("sidebar.gearbit"),
		popup: $.t("misc.needhelp")
	}],
	
	gun: [{
		coords: [[91.563,58.375]],
		label: $.t("sidebar.gearbit"),
		popup: $.t("misc.needhelp")
	}],
	
	
	outfit: [{
		coords: [[93.125,77.438]],
		label: $.t("sidebar.gearbit"),
		popup: $.t("misc.needhelp")
	}],
	
	monolith: [{
		coords: [[102.000,50.688]],
		label: $.t("sidebar.gearbit"),
		popup: $.t("misc.needhelp")
	}],
	
};
