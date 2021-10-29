
const value = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

const incrementCounter = () => {
    counterValue += 1;
    value.textContent = counterValue; 
};

const reduceCounter = () => {
   counterValue -= 1;
    value.textContent = counterValue; 
};

decrement.addEventListener(`click`, reduceCounter);
increment.addEventListener(`click`, incrementCounter);

