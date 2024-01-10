// 2. Модул за конверзија на валути
//     - Напиши модул currencyConverter.js кој ќе претвора вредности од една валута во друга во согласност со тековниот валутен курс.
//     - Функциите треба да ги повикаш и тестираш во index.js фајлот

// let from = "USD";
// let to = "EUR";

async function convertor(value, from, to) {
  try {
    const data = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const response = await data.json();
    const convertedValue = value * response.rates[from] * response.rates[to];
    const output = `Vrednosta na ${value} ${from} e ednakva na ${convertedValue} ${to}`;
    console.log(output);
  } catch (error) {
    console.error(error);
  }
}

module.exports = convertor;
