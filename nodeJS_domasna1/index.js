// Zadaca 1 - filter

const numbers = [2, 9, 5, 7, 1, 3, 10, 18];

const numbersBiggerThan5 = numbers.filter((number) => number > 5);
console.log(numbersBiggerThan5);

const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(oddNumbers);

const mixedArray = [5, "hello", "country", 12, "age", true];

const justNumbers = mixedArray.filter((numbers) => typeof numbers === "number");

console.log(justNumbers);

const boolean = mixedArray.filter((boolean) => typeof boolean === "boolean");
console.log(boolean);

// Zadaca 2 - sort

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

const fruits = ["apple", "pineapple", "Strawberry", "kiwi", "orange"];

fruits.sort((a, b) => a.length - b.length);
console.log(fruits);

// Zadaca 3

const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(`The array total is ${sum}`);

// Zadaca 5

const newArray = [5, 12, 18, 62, 58, 33];
const findNumber = newArray.find((number) => number < 30);
console.log(findNumber);

const students = [
  { name: "Petar", age: 20, city: "Skopje" },
  { name: "Nikola", age: 22, city: "Bitola" },
  { name: "Goran", age: 25, city: "Ohrid" },
];

const findAge = students.find((oldest) => oldest.age > 22);
console.log(findAge);

const studentName = students.find((student) => student.name === "Nikola");

if (studentName) {
  console.log(`The student ${studentName.name} is found`);
} else {
  console.log(`This person is not a student`);
}
