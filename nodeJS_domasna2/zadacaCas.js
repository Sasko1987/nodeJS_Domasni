const {
  studentiSkopje,
  studentiZavrsuvaatNaA,
  studentiProsekNadSedum,
  studentiPoIme,
  prvaZadaca,
  vtoraZadaca,
  tretaZadaca,
  cetvrtaZadaca,
  pettaZadaca,
} = require("./studenti");

const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

const studentiOdSkopje = studentiSkopje(studenti);
console.log(studentiOdSkopje);
const studentiNaA = studentiZavrsuvaatNaA(studentiOdSkopje);
console.log(studentiNaA);
const studentiSoProsekNadSedum = studentiProsekNadSedum(studentiNaA);
console.log(studentiSoProsekNadSedum);
const studentiPodredeniPoIme = studentiPoIme(studentiSoProsekNadSedum);
console.log(studentiPodredeniPoIme);

const zadacaEden = prvaZadaca(studenti);
console.log(zadacaEden);
const zadacaDva = vtoraZadaca(studenti);
console.log(zadacaDva);
const zadacaTri = tretaZadaca(studenti);
console.log(zadacaTri);
const zadacaCetiri = cetvrtaZadaca(studenti);
console.log(zadacaCetiri);

const zadacaPet = pettaZadaca(studenti);
console.log(zadacaPet);
