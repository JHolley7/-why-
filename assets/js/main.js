// main.js

const container = document.querySelector('.container');
const original = document.querySelector('.message');

const clone = original.cloneNode(true);

container.appendChild(clone);

clone.classList.add('echo');

for (let i = 0; i < 20; i++) {
  const clone = original.cloneNode(true);
  clone.classList.add('echo');
  container.appendChild(clone);
}