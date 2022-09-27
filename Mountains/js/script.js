$(document).ready(function () {
	$(window).scroll(function (event) { 
	var s = $(this).scrollTop();
	var w = $(this).outerWidth();
	var h = $('.content').outerHeight();
	var h_b = $('.parallax').outerHeight();
	var p = s / h * 100;
	var p_b = s / h_b * 100;
	var o = 1 - 1 / 100 * p_b;
	var z_1 = 1 + (w / 10000 * p_b);
	$('.parallax_fog').css('transform', 'scale(' + z_1 + ')');
	$('.parallax_fog').css('opacity', o);
	var z_2 = 1 + (w / 5000000 * p);
		$('.parallax_mountain_1').css('transform', 'scale(' + z_2 + ')');
		
		var hr = w / 2000 * p_b;
		var z_3 = 1 + (w*0.000005*p_b);
		$('.parallax_mountain_2').css('transform', 'translate3d(' + hr + 'px,0,0) scale(' + z_3 + ')');
		
		var hr_2 = w / 1500 * p_b;
		var z_4 = 1 + (w*0.00001*p_b);

		$('.parallax_mountain_3').css('transform', 'translate3d('+hr_2+'px,0,0) scale(' + z_4 + ')');
	});
}); 

const par2 = document.querySelector('.parallax_mountain_2');
const par3 = document.querySelector('.parallax_mountain_3');
const fog = document.querySelector('.parallax_fog');

document.addEventListener('scroll', function(e) {
	let contentHeight = document.querySelector('.content').clientHeight;
	let documentHeight = document.body.scrollHeight;
	let currentScroll = window.scrollY + window.innerHeight;

	if(currentScroll > (contentHeight+documentHeight)-75) {   //75 = height of info block /2 !!!
		par2.style.zIndex=0;
		par3.style.zIndex=0;
		fog.style.zIndex=0;
	}
	else {
		par2.style.zIndex=1;
		par3.style.zIndex=1;
		fog.style.zIndex=2;
	}
})
