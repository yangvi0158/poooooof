//loading
$(document).ready(function () {
	AOS.init();
	new AOS.init({
		disable: "phone"
	});
	setTimeout(function () {
		$(".loading").css('opacity', '0');
		setTimeout(function () {
			$(".loading").css('display', 'none');
		}, 500);
	}, 500);
});

//IE瀏覽器禁止
var isIE = (/Trident\/7\./).test(navigator.userAgent);
if (isIE) {
	$('.IEuse').css('display', 'block');
}


/*
$(document).ready(function () {
	setTimeout(function () {
		$(".loading").css('opacity', '0');
		setTimeout(function () {
			$(".loading").css('display', 'none');
		}, 1000);
	}, 1000);
});



window.onload = function () {
	setTimeout(function () {
		$(".loading").css('opacity', '0');
		setTimeout(function () {
			$(".loading").css('display', 'none');
		}, 1000);
	}, 1000);
};

//IE瀏覽器禁止	
var isIE = (/Trident\/7\./).test(navigator.userAgent);
if (isIE) {
	$('.IEuse').css('display', 'block');
}

$(window).load(function () {
	$(".loading").hide(1000);
});

*/
