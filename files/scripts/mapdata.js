function getMarkerLabel(namespace, category, type, id) {
	const typeLabel = category === 'other'
		? $.t(`marker.${type}.label`)
		: $.t(`marker.${category}.label`);
	
	if(!id) return typeLabel;
	
	const translationPath = `${namespace}:${category}.${Math.trunc(id)}.label`;
	const translation = $.t(translationPath);
	const translated = translation !== translationPath;
	
	//console.log(translationPath + " -> " + translation);
	
	if(!translated) return `${typeLabel} ${id}`;
	return `${typeLabel} ${id}: ${translation}`;
}

function getMarkerPopup(namespace, category, type, id) {
	if(!id) return "";
	
	let translationPath = `${namespace}:${category}.${id}.desc`;
	
	// id 2.1 will expand to 'ns:category.2.desc.1'
	const base = Math.trunc(id);
	if(base !== id) {
		const sub = (id - base).toFixed(1).substr(2);
		translationPath = `${namespace}:${category}.${base}.desc.${sub}`;
	}
	
	const translation = $.t(translationPath);
	const translated = translation !== translationPath;
	
	//console.log(translationPath + " -> " + translation);
	
	if(!translated) return "";
	return translation;
}

function makeMarker(category, id, y, x, type) {
	type ??= category;
	const position = [y ?? 0, x ?? 0];
	const label = getMarkerLabel(window.map.name, category, type, id);
	const popup = getMarkerPopup(window.map.name, category, type, id);
	return {category, position, label, popup, type};
}
