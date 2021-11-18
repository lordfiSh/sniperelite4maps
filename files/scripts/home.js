(() => {
	const imageCache = {};
	
	function loadImage(path) {
		if(imageCache[path]) {
			//console.log('serving image from cache: ' + path);
			return path;
		}
		
		return new Promise(resolve => {
			//console.log('requesting image ' + path);
			const im = new Image();
			im.onload = function() {
				//console.log('loaded image ' + path);
				imageCache[path] = im;
				resolve(path);
			};
			im.src = path;
		});
	}
	
	let isInTransition = false;
	let transitionPromise = null;
	let currentImage = localStorage['start-page-background'] ?? '/files/images/backgrounds/m01-san-celini-island.jpg';
	let nextImage = '';
	let lastRequestPath = '';
	let lastRequest = 0;
	
	const imageLayer = $("#background");
	const fadeLayer = $("#background-fade-layer");
	
	async function performTransition() {
		isInTransition = true;
		const image = currentImage = nextImage;
		await fadeLayer.attr("src", image).promise();
		await fadeLayer.fadeTo(500, 1).promise();
		await imageLayer.attr("src", image).promise();
		await fadeLayer.fadeTo(0, 0).promise();
		isInTransition = false;
	}
	
	async function setBackground(path) {
		// throw out duplicate events
		if(path === lastRequestPath) return;
		
		const request = ++lastRequest;
		
		localStorage['start-page-background'] = lastRequestPath = path;
		nextImage = await loadImage(path);
		
		if(isInTransition) {
			// wait for the current transition to finish
			await transitionPromise;
			// only the newest request should continue
			if(lastRequest !== request) return;
			// if the current image is already the right one, we have nothing to do
			if(currentImage === lastRequestPath) return;
		}
		
		// if we got here, we know that no transition is running
		// and we are the most recent request.
		transitionPromise = performTransition();
		await transitionPromise;
		transitionPromise = null;
	}
	
	$('#nav li').each((_, item) => {
		const mapName = $(item).attr('data-map-name');
		$(item).on('mouseover', async () => {
			await setBackground(`/files/images/backgrounds/${mapName}.jpg`);
		});
	});
	
	async function init() {
		await $.i18n.init(i18noptions);
		$(document).i18n();
	}
	
	$(imageLayer).attr('src', currentImage);
	init().then(() => console.log('initialization complete'));
})();