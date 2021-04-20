// @ts-check
// Idea <http://codepen.io/hi-im-si/pen/DHoup>
class TxtType {
	constructor(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	}
	tick() {
		const i = this.loopNum % this.toRotate.length, fullTxt = this.toRotate[i];
		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		
		this.el.innerHTML = '<span class="c-typewrite-wrapwrap is-typewrite-wrapwrap">' + this.txt + '</span>';
		var that = this, delta = 200 - Math.random() * 100;
		if (this.isDeleting) {
			delta /= 2;
		}
		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		}
		else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}
		setTimeout(function () {
			that.tick();
		}, delta);
	}
}

window.onload = () => {
	const typewrite = document.getElementsByClassName('js-typewrite');
	let i = 0;
	for ( i; i < typewrite.length; i++) {
		const toRotate = typewrite[i].getAttribute('data-typeWrite');
		const period = typewrite[i].getAttribute('data-periodWrite');
		if (toRotate) {
			new TxtType(typewrite[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	const css = document.createElement('style');
	css.innerHTML = '.is-typewrite > .is-typewrite-wrapwrap { border-right: 0.08em solid #fff}';
	document.body.appendChild(css);
};

