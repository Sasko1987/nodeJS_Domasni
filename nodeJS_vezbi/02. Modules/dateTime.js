// 4. Модул за работа со датуми и времиња
//     - Разгледајте дополнително како функционира Date типот во Javascript пред да ја решавате оваа задача
//     - Направи модул dateTime.js со функции за манипулација со датуми и времиња, како пресметување на разлики помеѓу датуми, форматирање итн.
//     - Функциите треба да ги повикаш и тестираш во index.js фајлот

function CalcAge(year, month, day) {
  const newDate = new Date();
  const years = newDate.getFullYear() - year - 1;

  //presmetka na denovi vo mesec
  const functionDaysInMonth = (year, month) =>
    new Date(year, month, 0).getDate();
  const daysInMonth = functionDaysInMonth(year, month);

  // funkcija za presmetka na meseci

  function months(month) {
    const newDate = new Date();
    if (newDate.getMonth() + 1 - month > 0) {
      return newDate.getMonth() + 1 - month;
    } else {
      return 12 - (month - newDate.getMonth());
    }
  }
  const monthss = months(month);

  // tuke nemozam da gi presmetam denovite tocno funkcija za presmetka na denovi
  function days(day) {
    if (daysInMonth - day + newDate.getDate() < day) {
      return daysInMonth - day + newDate.getDate();
    } else {
      return daysInMonth - day - newDate.getDate();
    }
  }
  const dayss = days(day);
  console.log(
    `Today you have ${years} years, ${monthss} months and ${dayss} days`
  );
}

CalcAge(1987, 11, 13);

function changeFormat(year, month, day) {
  if (day < 10) {
    day = `0${day}`;
  } else {
    day;
  }

  if (month < 10) {
    month = `0${month}`;
  } else {
    month;
  }
  const changedFormat = `${day}/${month}/${year}`;
  console.log(changedFormat);
}

changeFormat(2024, 1, 5);

module.exports = { CalcAge, changeFormat };
