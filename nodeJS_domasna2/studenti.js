// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.

// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна висина на просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

function studentiSkopje(studenti) {
  const studentiOdSkopje = studenti.filter((stud) => stud.grad === "Skopje");
  return studentiOdSkopje;
}

function studentiZavrsuvaatNaA(studenti) {
  return studenti.filter((stud) => stud.ime.endsWith("a"));
}

function studentiProsekNadSedum(studenti) {
  return studenti.filter((stud) => stud.prosek > 7);
}

function studentiPoIme(studenti) {
  const studentiIme = studenti.sort((a, b) => {
    if (a.ime < b.ime) {
      return -1;
    } else if (a.ime > b.ime) {
      return 1;
    } else {
      return 0;
    }
  });
  return studentiIme;
}

function prvaZadaca(studenti) {
  const studentiOdSkopje = studentiSkopje(studenti);
  const studentiNaA = studentiZavrsuvaatNaA(studentiOdSkopje);
  const studentiSoProsekNadSedum = studentiProsekNadSedum(studentiNaA);
  const studentiIme = studentiSoProsekNadSedum.sort((a, b) => {
    if (a.ime > b.ime) {
      return -1;
    } else if (a.ime < b.ime) {
      return 1;
    } else {
      return 0;
    }
  });
  return studentiIme;
}

// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.

function vtoraZadaca(studenti) {
  return studenti
    .filter((stud) => stud.prosek > 9 && stud.grad !== "Skopje")
    .sort((a, b) => a.prosek - b.prosek);
}

// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.

function tretaZadaca(studenti) {
  return studenti
    .filter((stud) => stud.ime.length === 5)
    .sort((a, b) => a.prosek - b.prosek)
    .splice(0, 3);
}

// 4. Градови подредени по групна висина на просек.

function cetvrtaZadaca(studenti) {
  const skopje = studenti.filter((stud) => stud.grad === "Skopje");
  const prosekZaSkopje = skopje.reduce(
    (acc, curr) => acc + curr.prosek / skopje.length,
    0
  );

  const kumanovo = studenti.filter((stud) => stud.grad === "Kumanovo");
  const prosekZaKumanovo = kumanovo.reduce(
    (acc, curr) => acc + curr.prosek / kumanovo.length,
    0
  );

  const tetovo = studenti.filter((stud) => stud.grad === "Tetovo");
  const prosekZaTetovo = tetovo.reduce(
    (acc, curr) => acc + curr.prosek / tetovo.length,
    0
  );

  const ohrid = studenti.filter((stud) => stud.grad === "Ohrid");
  const prosekZaohrid = ohrid.reduce(
    (acc, curr) => acc + curr.prosek / ohrid.length,
    0
  );

  const bitola = studenti.filter((stud) => stud.grad === "Bitola");
  const prosekZaBitola = bitola.reduce(
    (acc, curr) => acc + curr.prosek / bitola.length,
    0
  );

  const strumica = studenti.filter((stud) => stud.grad === "Strumica");
  const prosekZaStrumica = strumica.reduce(
    (acc, curr) => acc + curr.prosek / strumica.length,
    0
  );
  let gradovi = [];
  studenti.forEach((stud) => {
    if (!gradovi.includes(stud.grad)) {
      gradovi.push(stud.grad);
    }
  });
  return prosekZaBitola;
}

// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

function pettaZadaca(studenti) {
  const studentiImeNaA = studenti.filter((stud) => stud.ime.endsWith("a"));
  const sumiranProsekNaA = studentiImeNaA.reduce(
    (acc, curr) => acc + curr.prosek,
    0
  );
  const prosekNaStudentiNaA = sumiranProsekNaA / studentiImeNaA.length;

  const studentiImeNeA = studenti.filter((stud) => !stud.ime.endsWith("a"));
  const sumiranProsekNeA = studentiImeNeA.reduce(
    (acc, curr) => acc + curr.prosek,
    0
  );
  const prosekNaStudentiNeA = sumiranProsekNeA / studentiImeNeA.length;

  return `Prosekot na studenti cie ime zavrsuva na 'a' e ${prosekNaStudentiNaA}, dodeka prosekot na student cie ime ne zavrsuva na 'a' e ${prosekNaStudentiNeA.toFixed(
    2
  )}`;
}

module.exports = {
  studentiSkopje,
  studentiZavrsuvaatNaA,
  studentiProsekNadSedum,
  studentiPoIme,
  prvaZadaca,
  vtoraZadaca,
  tretaZadaca,
  cetvrtaZadaca,
  pettaZadaca,
};
