const { circle, rectangle, triangle } = require("./geometry");
const { users, addUser, deleteUser, findUser } = require("./userManagement");
const convertor = require("./currencyConverter");
const { formatCurrentDate, calculateAge, checkDay } = require("./dateTime");

// Модул за пресметување на површина на геометриска фигура

console.log(circle(10));
console.log(rectangle(10, 5));
console.log(triangle(5, 6));

// Модул за конверзија на валути
convertor(100, "EUR", "USD");

// Модул за управување со корисници

addUser(users, "Marko");
console.log(users);

const newUsers = deleteUser(users, "Mirko");
console.log(newUsers);

console.log(findUser(newUsers, "Sasko"));
console.log(findUser(newUsers, "Mirko"));

// Модул за работа со датуми и времиња

calculateAge("1987.11.28"), checkDay("1987.11.28");

formatCurrentDate();
