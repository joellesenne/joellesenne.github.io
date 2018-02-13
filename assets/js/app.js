// Idea <http://codepen.io/hi-im-si/pen/DHoup>
var TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length,
		fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="c-typewrite-wrapwrap is-typewrite-wrapwrap">' + this.txt + '</span>';

	var that = this,
		delta = 200 - Math.random() * 100;

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

window.onload = function () {
	var elements = document.getElementsByClassName('js-typewrite');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-typeWrite');
		var period = elements[i].getAttribute('data-periodWrite');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement('style');
	css.type = 'text/css';
	css.innerHTML = '.is-typewrite > .is-typewrite-wrapwrap { border-right: 0.08em solid #fff}';
	document.body.appendChild(css);
};

jQuery(function ($) {
	var el = $('.js-background');
	var atr = $('.js-image-place');
	var wrap = $('.js-hover-bg-wrap .js-image-place, .js-hover-bg-wrap');
	el.hover(function () {
		atr.toggleClass($(this).data('hover'));
	});
	wrap.height($(window).height());
});
jQuery(function ($) {
	if ($.cookie('cookieBarOpen') === undefined) {
		$('body').append('<section class="o-cookie js-cookie" role="contentinfo"><p class="o-cookie__text">By continuing to use this site, you accept the use of cookies in order to make statistics of anonymous visits. <a class="o-cookie__item" href="http://www.google.com/analytics/terms/fr.html" target="_blank">Info</a> - <a href="#" class="o-cookie__item js-cookie__btn--close">Close</a></p></section>');
		$('.js-cookie__btn--close').click(function (e) {
			e.preventDefault();
			$('.js-cookie').fadeOut();
			$.cookie('cookieBarOpen', 'viewed', {
				expires: 30 * 12
			});
		});
	}
});
