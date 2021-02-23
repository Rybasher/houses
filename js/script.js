const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: "slide",

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},

	// Navigation arrows


	// And if we need scrollbar

});


lightGallery(document.getElementById('aniimated-thumbnials'), {
	thumbnail: true
});
new WOW().init();