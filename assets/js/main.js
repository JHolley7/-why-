// main.js

const container = document.querySelector('.container');
const original = document.querySelector('.message');
const answer = document.getElementById('answer');
const answer2 = document.getElementById('answer2');

function showAnswer() {
	if (answer) {
		answer.textContent = 'I create because it is fun.';
	}
}

function showAnswer2() {
	if (answer2) {
		answer2.textContent = 'I create because I want to express myself and share my ideas with the world. Creating allows me to explore new concepts, challenge myself, and connect with others who appreciate my work. It is a way for me to leave a mark and contribute to the cultural landscape.';
	}
}

let clickCount = 0;

function revealNextAnswer() {
	clickCount += 1;

	if (clickCount === 1) {
		showAnswer();
	} else if (clickCount === 2) {
		showAnswer2();
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