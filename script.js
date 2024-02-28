// Задание 1-2
const basket = {
  basketball: 1,
  price: 2095,
};
console.log(basket);

basket.price = 2095 + 500;

basket.deliveryTime = `3 дня`;

// Задание 3
function comparePrice(product1, product2) {
  let result = "";

  if (product1 > product2) {
    result = product2;
  } else {
    result = product1;
  }
  return result;
}
const computerMove = comparePrice(basket.price, 1090);
console.log(computerMove);

// Задание 4
const basket1 = {
  basketball: 1,
  price: 2095,
};

const basket2 = {
  basketball: 5,
  price: 10095,
};

const basket3 = {
  basketball: 1,
  price: 2095,
};

console.log(JSON.stringify(basket1) === JSON.stringify(basket2));
console.log(JSON.stringify(basket1) === JSON.stringify(basket3));

// Задание 5
let a = "Good Morning";
let b = "TESTING";
console.log(b.toLocaleLowerCase(), a.toLocaleLowerCase());

// Задание 6
console.log("hello".repeat(3));
console.log("test".repeat(3));

// Задание 7
let button = document.querySelector("#id01");

console.log(button);

// Задание 8
var element = document.getElementById("id01");
element.innerHTML = "New Heading";

// Задание 9
const changeText = (param) => {
  if (param === "Орел") {
    document.getElementsByClassName("text")[0].textContent = "Твой выбор: орел";
  } else if (param === "Решка") {
    document.getElementsByClassName("text")[0].textContent =
      "Твой выбор: решка";
  }
};

// Задание 11
localStorage.setItem("tell", 996222334455);
localStorage.setItem("name", "Jerry");
const tell = localStorage.getItem("tell");
const name = localStorage.getItem("name");
console.log(name, tell);

//1.2
const product1 = {
  name: "basketball",
  price: 2095,
};
const product1String = JSON.stringify(product1);
localStorage.setItem("product1", product1String);
const product1Object = JSON.parse(localStorage.getItem("product1"));
console.log(product1Object);

//1.4
const person = {
  name: "Nursultan",

  surname: "Kenzhebaev",

  id: 899,
};
const product1Object2 = JSON.stringify("person");
document.body.innerHTML.h1 = product1Object2;
