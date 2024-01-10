// 1. Модул за пресметување на површина на геометриска фигура
//     - Креирај модул geometry.js што ќе содржи функции за пресметување на површината на различни геометриски фигури (круг, правоаголник, троаголник).
//     - Функциите треба да ги повикаш и тестираш во index.js фајлот

const { circle, rectangle, triangle } = require("./geometry");
const { users, addUser, deleteUser, findUser } = require("./userManagement");

const convertor = require("./currencyConverter");

console.log(circle(10));
console.log(rectangle(10, 5));
console.log(triangle(5, 6));

convertor(100, "EUR", "USD");

addUser(users, "Marko");
console.log(users);

const newUsers = deleteUser(users, "Mirko");
console.log(newUsers);

console.log(findUser(newUsers, "Sasko"));
console.log(findUser(newUsers, "Mirko"));
