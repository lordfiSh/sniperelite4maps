function getMarkerLabel(namespace, type, id) {
	const typeLabel = $.t(`marker.${type}.label`);
	
	if(!id) return typeLabel;
	
	const translationPath = `${namespace}:${type}.${id}.label`
	const translation = $.t(translationPath);
	const translated = translation !== translationPath;
	
	//console.log(translationPath + " -> " + translation);
	
	if(!translated) return `${typeLabel} ${id}`;
	return `${typeLabel} ${id}: ${translation}`;
}

function getMarkerPopup(namespace, type, id) {
	const typePopup = $.t(`marker.${type}.desc`);
	
	if(!id) return "";//typePopup;
	
	let translationPath = `${namespace}:${type}.${id}.desc`
	
	// id 2.1 will expand to 'ns:type.2.desc.1'
	const base = Math.trunc(id);
	if(base !== id) {
		const sub = (id - base).toFixed(1).substr(2)
		translationPath = `${namespace}:${type}.${base}.desc.${sub}`
	}
	
	const translation = $.t(translationPath);
	const translated = translation !== translationPath;
	
	//console.log(translationPath + " -> " + translation);
	
	if(!translated) return "";
	return translation;
}

function makeMarker(type, id, x, y, label, popup) {
	const position = [x, y];
	label ??= getMarkerLabel(window.map.namespace, type, Math.trunc(id));
	popup ??= getMarkerPopup(window.map.namespace, type, id);
	return {type, position, label, popup};
}
