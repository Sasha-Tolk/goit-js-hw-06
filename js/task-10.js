function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const firstBox = document.querySelector('#boxes');
console.log(createBtn);

const amount = input.value;
const array = [];

createBtn.addEventListener('click', createBoxes);
console.log(createBtn.value);

function createBoxes(amount) {
  for (const i = 0; i < amount; i += 1){
    const boxes = document.createElement('div');
    boxes.classList.add('boxes');
    array.push(boxes);
    console.log(boxes);

  }
  firstBox.after(...array);
}

