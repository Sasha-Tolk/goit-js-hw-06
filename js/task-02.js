const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngredientsElement = ingredients => {
  return ingredients.map(ingredient => {
     const ingredientsElement = document.createElement(`li`);
    ingredientsElement.textContent = ingredient;
    ingredientsElement.classList.add(`item`);

    return ingredientsElement;
  
  });
};

const elements = createIngredientsElement(ingredients);

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...elements);