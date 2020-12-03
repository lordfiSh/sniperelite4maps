async function init() {
	await $.i18n.init(i18noptions);
	$(document).i18n();
}

init().then(() => console.log('initialization complete'));