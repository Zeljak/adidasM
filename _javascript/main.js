

const swiper1 = new Swiper('.swiper1', {
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper1-button-next',
		prevEl: '.swiper1-button-prev',
	},
});

const swiper2 = new Swiper('.swiper2', {
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper2-button-next',
		prevEl: '.swiper2-button-prev',
	},
});





document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});
