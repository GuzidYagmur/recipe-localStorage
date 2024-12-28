let recipes = [];
if(localStorage.recipes){
    recipes=JSON.parse(localStorage.recipes);
}

const recipeName = prompt("Yemeğin adını giriniz");
const recipe = prompt("Yemek tarifini giriniz");
recipes.push({
    recipeName:recipeName,
    recipe:recipe
})

localStorage.recipes = JSON.stringify(recipes);

console.log(recipes);
