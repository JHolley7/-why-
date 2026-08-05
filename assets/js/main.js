// main.js

const container = document.querySelector('.container');
const original = document.querySelector('.message');

const clone = original.cloneNode(true);

container.appendChild(clone);

clone.classList.add('echo');