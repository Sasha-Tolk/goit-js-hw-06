function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
console.log(createBtn);

createBtn.addEventListener('click', createBoxes);
console.log(createBtn.value);
function createBoxes() {
console.log(input.value);
}