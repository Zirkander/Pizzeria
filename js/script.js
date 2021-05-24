function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "feta"])
console.log(pizza1);

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni, sausage"])
console.log(pizza1);

var pizza1 = pizzaOven("stuffed", "alfredo", ["mozzarella", "gouda", "provalone"], ["pepperoni", "pineapple", "jalapenos", "roasted garlic"])
console.log(pizza1);

var pizza1 = pizzaOven("thin", "pesta", ["mozzarella", "smoked gouda", "provalone"], ["pepperoni", "pineapple", "sardines", "ghost chilis"])
console.log(pizza1);


function randomPizza(crustType, sauceType, cheeses, toppings){
    var ranPizza = {};
    pizza.crustType = crustType[Math.floor(Math.random(["hand tossed", "deep dish", "stuffed", "pan", "thick", "thin"])*crustType.length)];
    pizza.sauceType = sauceType[Math.floor(Math.random(["marinara", "alfredo", "pesto", "spicy"])*sauceType.length)];
    pizza.cheeses = cheeses[Math.floor(Math.random(["mozzarella", "gouda", "provolone", "feta", "parmasian", "cheddar", "swiss", "blue", "gorganzola"])*cheeses.length)];
    pizza.toppings = toppings[Math.floor(Math.random(["pepperoni", "mushrooms", "bell pepper", "roasted Garlic", "chicken", "sausage", "kale", "spinach", "jalapenos", "ghost peppers", "pineapple"])*toppings.length)];
    return ranPizza;
}
var pizza2 = ranPizza;
console.log(pizza2);
