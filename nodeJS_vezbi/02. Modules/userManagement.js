// 3. Модул за управување со корисници
//     - Креирај модул userManagement.js со функции за додавање, бришење и пребарување на корисници.
//     - Овде треба да се искористат методите кои ги нудат низите т.е push за додавање, filter за бришење и find за пребарување.
//     - Функциите треба да ги повикаш и тестираш во index.js фајлот
let users = ["Sasko", "Kiril", "Mirko"];
function addUser(array, user) {
  return array.push(user);
}

function deleteUser(array, user) {
  const newUsers = array.filter((value) => value !== user);
  return newUsers;
}

function findUser(array, user) {
  const foundUser = array.find((el) => el === user);

  if (foundUser) {
    console.log(`User ${user} was found`);
  } else {
    console.log(`The user ${user} does not exist`);
  }
}

module.exports = { users, addUser, deleteUser, findUser };
