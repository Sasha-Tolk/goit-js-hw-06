
const counterValue = document.querySelector("#value").textContent ;
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
console.log(counterValue);

const reduceCounter = decrement.addEventListener(`click`, event =>
   counterValue -= 1  
);

function onCounterValue(event) {
    console.log(event);
}