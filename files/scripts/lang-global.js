if(localStorage['lang'] == null) {
	localStorage['lang'] = window.navigator.language.substring(0, 2);
}

//i18n options
window.i18noptions = {
	debug: false,
	getAsync: true,
	ns: 'general',
	lng: localStorage['lang'],
	fallbackLng: 'en',
	resGetPath: '/files/locales/__lng__/__ns__.json',
	useDataAttrOptions: true,
	lngWhitelist: ['en', 'de']
};

const makeLanguageOption = (code, text) => ({
	text,
	value: code,
	selected: localStorage['lang'] === code,
	description: " ",
	imageSrc: `/files/images/flags/${code}.png`
});

const languageOptions = [
	makeLanguageOption('en', "English"),
	makeLanguageOption('de', "Deutsch"),
];

window.changeLang = function(lang) {
	if(localStorage['lang'] !== lang) {
		localStorage['lang'] = lang;
		window.location.reload();
	}
};

$(function() {
	$('#lang-switcher').ddslick({
		data: languageOptions,
		width: 150,
		onSelected: obj => changeLang(obj.selectedData.value)
	});
});