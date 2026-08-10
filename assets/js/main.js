// main.js

const container = document.querySelector('.container');
const original = document.querySelector('.message');
const answer = document.getElementById('answer');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');

function showAnswer() {
	if (answer) {
		answer.textContent = 'I create because its fun.';
	}
}

function showAnswer2() {
	if (answer2) {
		answer2.textContent = 'I create because its how I express myself.';
	}
}

function showAnswer3() {
	if (answer3) {
		answer3.innerHTML = 'I create because its <b>WHO I AM</b>.';
	}
}

let clickCount = 0;

function revealNextAnswer() {
	clickCount += 1;

	if (clickCount === 1) {
		showAnswer();
	} else if (clickCount === 2) {
		showAnswer2();
	} else if (clickCount === 3) {
		showAnswer3();
	}
}

function createBurst() {
	if (!container || !original) return;

	for (let i = 0; i < 24; i++) {
		const clone = original.cloneNode(true);
		clone.classList.add('echo');

		const angle = (Math.PI * 2 * i) / 24;
		const distance = 50 + Math.random() * 220;
		const x = Math.cos(angle) * distance;
		const y = Math.sin(angle) * distance;
		const duration = 0.8 + Math.random() * 0.4;

		clone.style.setProperty('--x', `${x}px`);
		clone.style.setProperty('--y', `${y}px`);
		clone.style.setProperty('--duration', `${duration}s`);
		clone.style.setProperty('--delay', `${i * 0.01}s`);

		container.appendChild(clone);
		setTimeout(() => clone.remove(), 1400);
	}
}

if (container && original) {
	createBurst();
	setInterval(createBurst, 1000);
	container.addEventListener('click', createBurst);
}


document.addEventListener('click', revealNextAnswer);