console.log('-----1-----');
// 1. Atskiri elementai
// Tamsiai žaliai nuspalvinti h1 tagą;
const h1 = document.querySelector('h1');
// h1.style.color = 'rgb(24, 86, 24)';

// Tagui i pridėti klasę small;
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
const i = document.querySelector('i');
i.classList.add('small');
i.style.cursor = 'pointer';

// Iš tago h1 pašalinti klasę main;
h1.classList.remove('main');

// Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
const pirmasH2 = document.querySelector('h1 + h2');
pirmasH2.classList.add('first');
pirmasH2.classList.remove('main');

// Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
const spanInH2 = document.querySelector('h2 > span');
spanInH2.classList.add('span-style');

console.log('-----2-----');
// 2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// Suskaičiuoti kiek yra h2 tagų;
const h2Tagai = document.querySelectorAll('h2');
console.log('h2 tagu yra: ' + h2Tagai.length);

// Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
let beFirstClass = 0;
for (let i = 0; i < h2Tagai.length; i++) {
  if (!h2Tagai[i].classList.contains('first')) beFirstClass++;
}
console.log('First klases neturi ' + beFirstClass + ' h2 tagai.');

// Visus h2 tagus nuspalvinti šviesiai mėlynai
for (let i = 0; i < h2Tagai.length; i++) {
  h2Tagai[i].style.color = 'aqua';
}

// Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
const kainos = document.querySelectorAll('div.prices > h2');
for (let i = 0; i < kainos.length; i++) {
  kainos[i].classList.add('price-tag');
}

// Pabraukti visus tagus su klase new;
const naujienos = document.querySelectorAll('.new');
for (let i = 0; i < naujienos.length; i++) {
  naujienos[i].style.textDecoration = 'underline';
}

// Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
const gyvunuKategorijos = document.querySelectorAll('ul');
console.log(
  'Skirtingu gyvunu yra ' + gyvunuKategorijos.length + ' kategorijos.'
);
const zirafos = document.querySelectorAll('#zirafos > li:not(:first-child)');
console.log('Zoologijos sode siuo metu yra: ' + zirafos.length + ' zirafos.');

// Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
for (let i = 0; i < gyvunuKategorijos.length; i++) {
  gyvunuKategorijos[i].classList.add('ul-style');
}

// Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
let naujiGyvunai = document.querySelectorAll('ul > .new');
console.log('Nauju gyvunu yra: ' + naujiGyvunai.length) + '.';

// Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;

for (let i = 0; i < gyvunuKategorijos.length; i++) {
  const ieskomNauju = gyvunuKategorijos[i].querySelectorAll('li');
  let kiek = 0;
  for (let a = 0; a < ieskomNauju.length; a++) {
    if (ieskomNauju[a].classList.contains('new')) {
      kiek++;
    }
  }
  console.log(
    '"' +
      gyvunuKategorijos[i].id +
      '"' +
      ' kategorijoje yra ' +
      kiek +
      ' naujas/u gyvunas/u.'
  );
}

console.log('-----3-----');
// 3. Elementų events
// Padaryti tai ką liepia mygtukai Header1 sekcijoje;
const colorButton = document.querySelector('#h1-color');
colorButton.addEventListener('click', () => {
  h1.style.color = 'rgb(24, 86, 24)';
});
const fontSizeButton = document.querySelector('#h1-font');
fontSizeButton.addEventListener('click', () => {
  h1.style.fontSize = '10px';
});

// Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
i.addEventListener('click', () => {
  i.style.fontWeight = i.style.fontWeight == 'normal' ? 'bold' : 'normal';
});

// Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
const prices = document.querySelector('.prices');
prices.style.cursor = 'pointer';
prices.addEventListener('click', () => {
  prices.style.backgroundColor =
    prices.style.backgroundColor == 'grey' ? 'white' : 'grey';
});

// Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
const contacts = document.querySelector('#contacts');
contacts.style.cursor = 'pointer';
contacts.addEventListener('click', (e) => {
  e.stopPropagation();
  e.target.style.color = 'orange';
});

// Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
const padidinti = document.querySelector('#contacts > u');
padidinti.addEventListener('click', (e) => {
  e.stopPropagation();
  contacts.style.fontSize = '20px';
});

// Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
const iksas = document.querySelector('#contacts > b');
iksas.addEventListener('click', (e) => {
  e.stopPropagation();
  contacts.removeAttribute('style');
});

// Padaryti tai ką liepia mygtukai Header2 sekcijoje;
const colorButtonBack = document.querySelector('#h1-color-back');
colorButtonBack.addEventListener('click', () => {
  h1.style.color = 'black';
});
const fontSizeButtonBack = document.querySelector('#h1-font-back');
fontSizeButtonBack.addEventListener('click', () => {
  h1.style.fontSize = '36px';
});

console.log('-----4-----');
// Elementų grupių events
// Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
for (let i = 0; i < naujiGyvunai.length; i++) {
  //   naujiGyvunai[i].style.cursor = 'pointer';
  naujiGyvunai[i].addEventListener('dblclick', () => {
    naujiGyvunai[i].style.color = 'red';
  });
}

// Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
const visiGyvunai = document.querySelectorAll('ul > li:not(:first-child)');
for (let i = 0; i < visiGyvunai.length; i++) {
  visiGyvunai[i].addEventListener('click', () => {
    visiGyvunai[i].style.fontSize = '130%';
  });
}

// Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;
const patiktukai = document.querySelectorAll('.like-button');
for (let i = 0; i < patiktukai.length; i++) {
  patiktukai[i].addEventListener('click', () => {
    gyvunuKategorijos[i].classList.add('like');
  });
}

console.log('-----5-----');
// Dinaminis elementų kūrimas (su createElement)
// Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
const naujaKaina = document.createElement('h2');
naujaKaina.innerText = 'Senjorai tik: 1.99 eur';
naujaKaina.classList.add('price-tag');
naujaKaina.style.color = 'aqua';
prices.appendChild(naujaKaina);
console.log('appendChild -> tai cia paskutini prideda?');
console.log(
  '5. a. Naujas elementas prisideda be stiliu, priskyriau juos sukurusi elementa, ar reikejo kitaip sia vieta spresti?'
);

// Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
const naujaKainaSenjoruGrupei = document.createElement('h2');
naujaKainaSenjoruGrupei.innerText = 'Senjorų grupė iki 10: tik 5.99 eur';
naujaKainaSenjoruGrupei.classList.add('price-tag');
naujaKainaSenjoruGrupei.classList.add('new');
naujaKainaSenjoruGrupei.style.color = 'aqua';
naujaKainaSenjoruGrupei.style.textDecoration = 'underline';
prices.appendChild(naujaKainaSenjoruGrupei);

console.log(
  '5. b. new klase uzsideda, bet neperima underlaino, ka daryt? pasikurt stiliaus faile new klase su underlainu?'
);
naujaKainaSenjoruGrupei.addEventListener('click', () => {
  naujaKainaSenjoruGrupei.style.color = 'green';
});

// Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

console.log('211-212 eilutes, kaip geriau?');
const pirmasSarase = document.querySelectorAll('.like-button + li');
for (let i = 0; i < gyvunuKategorijos.length; i++) {
  const nepatinka = document.createElement('li');
  // nepatinka.innerText = 'NEPATINKA';
  nepatinka.appendChild(document.createTextNode('nepatinka'));
  nepatinka.classList.add('dislike-button');
  gyvunuKategorijos[i].insertBefore(nepatinka, pirmasSarase[i]);
}
const nepatiktukai = document.querySelectorAll('.dislike-button');
for (let i = 0; i < nepatiktukai.length; i++) {
  nepatiktukai[i].addEventListener('click', () => {
    gyvunuKategorijos[i].classList.remove('like');
  });
}

console.log('-----6-----');
// Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta
const mygtukuGrupe = document.createElement('fieldset');
mygtukuGrupe.innerHTML =
  '<legend>HEADER 3</legend><button id="h1-underline">Pabraukti H1 tagą</button> <button id="h1-underline-back">Nepabraukti H1 tagą</button>';
const bodis = document.querySelector('body');
bodis.insertBefore(mygtukuGrupe, contacts);

const underlineButton = document.querySelector('#h1-underline');
underlineButton.addEventListener('click', () => {
  h1.style.textDecoration = 'underline';
});
const underlineButtonBack = document.querySelector('#h1-underline-back');
underlineButtonBack.addEventListener('click', () => {
  h1.style.textDecoration = 'none';
});
