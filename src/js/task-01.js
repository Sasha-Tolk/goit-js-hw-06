const itemsArray = document.querySelectorAll(".item");
console.log("Number of categories:", itemsArray.length);

const titles = document.querySelectorAll(".item > h2");

const itemsInfo = titles.forEach(title => {
    console.log("Category:", title.textContent);
    console.log("Elements:", title.nextElementSibling.children.length)
});



