// Scrivere una funzione ContinuaFino che continua a stampare interi casuali compresi fra 1 e 15 fino a che non esce un numero che sia divisibile per 3

function continuaFino() {
   let number;
   while (number % 3 !== 0) {
      number = Math.floor((Math.random() * 15) + 1);
      console.log('number:', number);
   }
}

console.log('ContinuaFino()');
continuaFino();
console.log('---');



let arr = [4, 78, 43, 3, 567, 22, 45, 68, 11];

// Trovare il massimo e il minimo elemento in un array
function getMaxValue(array) {
   let max = array[0];
   for (let value of array) {
      if (value > max) {
         max = value;
      }
   }
   console.log('max value:', max);
}

function getMinValue(array) {
   let min = array[0];
   for (let value of array) {
      if (value < min) {
         min = value;
      }
   }
   console.log('min value:', min);
}

console.log('getMaxValue() and getMinValue()');
console.log('array:', arr);
getMaxValue(arr);
getMinValue(arr);
console.log('---');



// Scrivere un metodo che prenda in input un valore e restituisca true se l’elemento è presente nell’array, false altrimenti.
function isInArray(value, array) {
   for (let x of array) {
      if (x === value) {
         return true;
      }
   }
   return false;
}

console.log('isInArray()');
console.log('value:', 14);
console.log('array:', arr);
console.log(isInArray(14, arr));
console.log('---');



// Verificare la sequenza crescente di un array. Il metodo restituisce true se tutti gli elementi dell’array passato sono in ordine crescente, false altrimenti.
function checkOrder(array) {
   let result = false;
   for (let i = 1; i < array.length; i++) {
      if (array[i] > array[i - 1]) {
         result = true;
      } else {
         result = false;
      }
   }
   return result;
}

let sequence = [4, 8, 10, 55, 60, 90, 100, 168, 221]
console.log('checkOrder()');
console.log('sequence:', sequence);
console.log(checkOrder(sequence));
console.log('---');



// Scrivere un metodo che trova l’elemento più ricorrente in un array. Il metodo restituisce l’elemento trovato e quante volte viene ripetuto
function findMostRecurringValue(array) {
   let occurrences = {};
   for (value of array) {
      if (value in occurrences) {
         occurrences[value] += 1;
      } else {
         occurrences[value] = 1;
      }
   }
   let occurrencesArr = [];
   for (let key in occurrences) {
      occurrencesArr.push([parseInt(key), occurrences[key]])
   }
   // console.log('object:', occurrences);
   // console.log('occurrencesArr:', occurrencesArr);
   occurrencesArr.sort(function (a, b) {
      return b[1] - a[1]
   })
   // console.log('sorted occurrencesArr', occurrencesArr);
   console.log('value:', occurrencesArr[0][0]);
   console.log('no. of occurrences:', occurrencesArr[0][1]);
}

let arr2 = [4, 11, 4, 55, 55, 70, 71, 55, 11]
console.log('findMostRecurringValue()');
console.log('array:', arr2);
findMostRecurringValue(arr2);
console.log('---');



// Scrivere una funzione SoloVocali che, data una stringa, ne stampa le sole vocali
function soloVocali(string){
   let vowels = string.match(/[aeiou]/gi); // g (global, matches all instances of the pattern) and i(case-insensitive)
   return vowels.join('');
}
let string = 'valentina';
console.log('soloVocali()');
console.log('string:', string);
console.log(soloVocali(string));
soloVocali(string);
