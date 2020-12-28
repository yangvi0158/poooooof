//heiti字體//
(function (d) {
	var config = {
			kitId: 'ygz1pxq',
			scriptTimeout: 3000,
			async: true
		},
		h = d.documentElement,
		t = setTimeout(function () {
			h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
		}, config.scriptTimeout),
		tk = d.createElement("script"),
		f = false,
		s = d.getElementsByTagName("script")[0],
		a;
	h.className += " wf-loading";
	tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
	tk.async = true;
	tk.onload = tk.onreadystatechange = function () {
		a = this.readyState;
		if (f || a && a != "complete" && a != "loaded") return;
		f = true;
		clearTimeout(t);
		try {
			Typekit.load(config)
		} catch (e) {}
	};
	s.parentNode.insertBefore(tk, s)
})(document);


//marquee//
$(function () {
	$('.marqueeTop_CH').marquee({
		speed: 8,
		gap: 30,
		duplicated: true,
		startVisible: true,
	});
});

$(function () {
	$('.marqueeTop_EN').marquee({
		speed: 10,
		gap: 30,
		duplicated: true,
		startVisible: true,
	});
});

$(function () {
	$('.marqueeBottom_CH').marquee({
		direction: 'right',
		speed: 8,
		gap: 30,
		duplicated: true,
		startVisible: true,
	});
});

$(function () {
	$('.marqueeBottom_EN').marquee({
		direction: 'right',
		speed: 10,
		gap: 30,
		duplicated: true,
		startVisible: true,
	});
});

$(function () {
	$('.marqueeLeft_CH').marquee({
		direction: 'right',
		duplicated: true,
		speed: 10,
		startVisible: true,
		gap: 30,
	});
});

$(function () {
	$('.marqueeLeft_EN').marquee({
		direction: 'down',
		duplicated: true,
		speed: 0.25,
		startVisible: true,
		gap: 30,
	});
});

$(function () {
	$('.marqueeRight_CH').marquee({
		direction: 'left',
		duplicated: true,
		speed: 10,
		startVisible: true,
		gap: 30,
	});
});

$(function () {
	$('.marqueeRight_EN').marquee({
		direction: 'up',
		duplicated: true,
		speed: 0.25,
		startVisible: true,
		gap: 30,
	});
});
