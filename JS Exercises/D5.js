/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("-------------------");
console.log("----ESERCIZIO 1----");
console.log("-------------------");
console.log("\n");

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// posso anche utilizzare una funzione per stampare gli elementi di un qualsiasi array:
console.log("-------------------");

function logArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

logArr(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 2----");
console.log("-------------------");
console.log("\n");

console.log(pets.sort());

// o tramite funzione:
console.log("-------------------");

function orderArr(arr) {
  return arr.sort();
}

console.log(orderArr(pets));

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 3----");
console.log("-------------------");
console.log("\n");

console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 4----");
console.log("-------------------");
console.log("\n");

let firstEle = pets.shift();
pets.push(firstEle);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 5----");
console.log("-------------------");
console.log("\n");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

function generatePlate() {
  let lett = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]; // non tengo conto del fatto che certi caratteri non sono presenti nelle targhr reali;
  let startLett =
    lett[Math.floor(Math.random() * lett.length)] +
    lett[Math.floor(Math.random() * lett.length)];
  let endLett =
    lett[Math.floor(Math.random() * lett.length)] +
    lett[Math.floor(Math.random() * lett.length)];
  // console.log(startLett, endLett);
  let numberPlate = String(Math.floor(Math.random() * 999));
  let licensePlate = startLett + numberPlate + endLett;
  return licensePlate;
}

// console.log(generatePlate());

console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = generatePlate();
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 6----");
console.log("-------------------");
console.log("\n");

const newCar = {
  brand: "Fiat",
  model: "Panda",
  color: "black",
  trims: ["4x4", "country", "turbo"],
};
newCar.licensePlate = generatePlate();

cars.push(newCar);
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 7----");
console.log("-------------------");
console.log("\n");

const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.shift());
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 8----");
console.log("-------------------");
console.log("\n");

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 9----");
console.log("-------------------");
console.log("\n");

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let count = 0;
while (true) {
  console.log(numericArray[count]);
  if (numericArray[count] === 32) {
    break;
  }
  count++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("\n");
console.log("-------------------");
console.log("----ESERCIZIO 10---");
console.log("-------------------");
console.log("\n");

const charactersArray = ["g", "n", "u", "z", "d"];

let positionAlphabet = (arr) => {
  const positionsArr = [];

  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a" || "A":
        positionsArr.push(1);
        break;
      case "b" || "B":
        positionsArr.push(2);
        break;
      case "c" || "C":
        positionsArr.push(3);
        break;
      case "d" || "D":
        positionsArr.push(4);
        break;
      case "e" || "E":
        positionsArr.push(5);
        break;
      case "f" || "F":
        positionsArr.push(6);
        break;
      case "g" || "G":
        positionsArr.push(7);
        break;
      case "h" || "H":
        positionsArr.push(8);
        break;
      case "i" || "I":
        positionsArr.push(9);
        break;
      case "j" || "J":
        positionsArr.push(10);
        break;
      case "k" || "K":
        positionsArr.push(11);
        break;
      case "l" || "L":
        positionsArr.push(12);
        break;
      case "m" || "M":
        positionsArr.push(13);
        break;
      case "n" || "N":
        positionsArr.push(14);
        break;
      case "o" || "O":
        positionsArr.push(15);
        break;
      case "p" || "P":
        positionsArr.push(16);
        break;
      case "q" || "Q":
        positionsArr.push(17);
        break;
      case "r" || "R":
        positionsArr.push(18);
        break;
      case "s" || "S":
        positionsArr.push(19);
        break;
      case "t" || "T":
        positionsArr.push(20);
        break;
      case "u" || "U":
        positionsArr.push(21);
        break;
      case "v" || "V":
        positionsArr.push(22);
        break;
      case "w" || "W":
        positionsArr.push(23);
        break;
      case "x" || "X":
        positionsArr.push(24);
        break;
      case "y" || "Y":
        positionsArr.push(25);
        break;
      case "z" || "Z":
        positionsArr.push(26);
        break;

      default:
        positionsArr.push(0);
        break;
    }
  }
  return positionsArr;
};


testArr = ["j", "a", "z", "m", "i", 12, "f"]
console.log(positionAlphabet(testArr))
console.log(charactersArray);
console.log(positionAlphabet(charactersArray))
