// 4. Модул за работа со датуми и времиња
//     - Разгледајте дополнително како функционира Date типот во Javascript пред да ја решавате оваа задача
//     - Направи модул dateTime.js со функции за манипулација со датуми и времиња, како пресметување на разлики помеѓу датуми, форматирање итн.
//     - Функциите треба да ги повикаш и тестираш во index.js фајлот

function formatCurrentDate(lang) {
  const today = new Date();
  const newFormatedDate = today.toLocaleDateString(lang, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  console.log(newFormatedDate);
}

function checkDay(enterDate) {
  let newDate = new Date(enterDate);
  const stringMonth = newDate.toLocaleDateString("mk-MK", { month: "long" });
  const checkWeekDay = newDate.toLocaleDateString("mk-MK", { weekday: "long" });
  console.log(
    `${newDate.getDate()} ${stringMonth} ${newDate.getFullYear()} година e ${checkWeekDay}`
  );
}

function calculateAge(birthdate) {
  const today = new Date();
  const birthday = new Date(birthdate);
  // new Date(birthdate) / 1000 = vreme vo sekundi
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInYear = 365.25;
  const miliseconds = today.getTime() - birthday.getTime();
  const milisecondsInSecon = 1000;
  const milisecondsInYear =
    milisecondsInSecon *
    secondsInMinute *
    minutesInHour *
    hoursInDay *
    daysInYear;

  const calculatedYears = miliseconds / milisecondsInYear;
  const ageYears = Math.floor(calculatedYears);

  const calcMonths = (calculatedYears - ageYears) * 12;
  const month = Math.floor(calcMonths);

  const calcDays = (calcMonths - month) * 30.45;
  const days = Math.floor(calcDays);

  console.log(
    `Today you have ${ageYears} years, ${month} months and ${days} days`
  );
}

calculateAge("1987.11.28");

module.exports = { formatCurrentDate, calculateAge, checkDay };
