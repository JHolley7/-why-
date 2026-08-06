// main.js

const container = document.querySelector('.container');
const original = document.querySelector('.message');
const answer = document.getElementById('answer');

function showAnswer() {
	if (answer) {
		answer.textContent = 'I create because it is fun.';
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

document.addEventListener('click', showAnswer);