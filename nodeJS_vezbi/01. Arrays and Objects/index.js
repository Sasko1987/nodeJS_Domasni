// 1. Обработка на низа
//     - Напиши функција reverseArray која го инвертира редоследот на елементите во низа.
//     пр. reverseArray([1, 2, 3, 4, 5]); // Очекуван излез: [5, 4, 3, 2, 1]

function reverseArray(array) {
  const newArray = array.reverse();
  console.log(newArray);
}

const array = [5, 4, 3, 2, 1];

reverseArray(array);

// 2. Обработка на Објекти
//     - Да се напише функција countProperties која ќе прима објект како аргумент и ќе ги враќа бројот на неговите својства.
//     пр.
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

//     countProperties(car); // Очекуван излез: 3

function countProperties(object) {
  const newObject = Object.keys(object).length;
  console.log(newObject);
}

countProperties(car);

// 3. Комбинирање на Низи и Објекти
//     - Напиши функција mergeArraysIntoObject која ќе прима два низи со клучеви и вредности и ќе ги комбинира во објект.
//     пр.
let keys = ["name", "age", "gender"];
let values = ["Alice", 25, "female"];

//         mergeArraysIntoObject(keys, values);
// Очекуван излез: { name: 'Alice', age: 25, gender: 'female' }

function mergeArraysIntoObject(keys, values) {
  let object = {};
  for (i = 0; i < keys.length; i++) {
    object[keys[i]] = values[i];
  }
  console.log(object);
}

mergeArraysIntoObject(keys, values);

// 4. Филтрирање на Низи
//     - Напиши функција filterByValueLength која ќе филтрира низа од стрингови според должината на нивните вредности.
//     пр.
let words = ["apple", "orange", "banana", "kiwi", "strawberry"];

//         filterByValueLength(words, 6);
// Очекуван излез: ['orange', 'banana', 'kiwi']

function filterByValueLength(words, length) {
  const filteredArray = words.filter((word) => word.length === length);

  console.log(filteredArray);
}

filterByValueLength(words, 4);

// Манипулација на Објекти
//     - Напиши функција updateObjectProperty која прима објект, клуч и вредност и ја ажурира вредноста на соодветниот клуч во објектот.
//     пр.
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

//         updateObjectProperty(person, 'age', 35);
// Очекуван излез: { name: 'John', age: 35, city: 'New York' }

function updateObjectProperty(object, key, value) {
  object[key] = value;
  console.log(object);
}

updateObjectProperty(person, "name", "Sasko");
