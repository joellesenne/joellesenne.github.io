import {TextType} from './TextType.js';

window.onload = () => {
	const typewrite = document.getElementsByClassName('js-typewrite');
	let i = 0;
	for ( i; i < typewrite.length; i++) {
		const toRotate = typewrite[i].getAttribute('data-typeWrite');
		const period = typewrite[i].getAttribute('data-periodWrite');
		if (toRotate) {
			new TextType(typewrite[i], JSON.parse(toRotate), period);
		}
	}
};
