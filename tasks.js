/////////////////////last/////////////////////
function getLastElementMeta(array) {
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  return [lastElementIndex, lastElement];
}
console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); //[3, "banana"]
console.log(getLastElementMeta(["apple", "peach", "pear"])); // [2, "pear"]
console.log(getLastElementMeta(["apple", "peach"])); // [1, "peach"]
console.log(getLastElementMeta(["apple"])); // [0, "apple"]

///////////////////////first + last/////////////////////

function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];
  return [firstElement, lastElement];
}

console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // ["Earth", "Venus"]
console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); // ["apple", "banana"]

///////////////////join + length/////////////////////


function getLength(array) {
  const joinedString = array.join("");
  return joinedString.length;
}

console.log(getLength(["Mango", "hurries", "to", "the", "train"]));//22
console.log(getLength(["M", "a", "n", "g", "o"]));//5
console.log(getLength(["top", "picks", "for", "you"]));//14

/////////////////////split + length/////////////////////


function calculateEngravingPrice(message, pricePerWord) {
return message.split(" ").length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));//50
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));//100
console.log(calculateEngravingPrice("Web-development is creative work", 40));//160
console.log(calculateEngravingPrice("Web-development is creative work", 20));//80

/////////////////////slice/////////////////////


const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

////////////////////slice + indexOf//////////////////


function getSlice(array, value) {
  const startIndex = array.indexOf(value);
  if (startIndex === -1) {
    return [];
  }
  return array.slice(0, startIndex + 1);
}

console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));//["Mango", "Poly"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));//["Mango", "Poly", "Ajax"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));//["Mango"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));//[]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));//[]

////////////////////Ітерація по масиву//////////////////


function calculateTotalPrice(order) {
let total = 0;
for (let i = 0; i < order.length; i += 1) {
  total += order[i];
}
return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));//138
console.log(calculateTotalPrice([164, 48, 291]));//503
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));//1116
console.log(calculateTotalPrice());//0




/////////////////////toLowerCase + if...else///////////////////



function checkStorage(storage, item) {
    const lowerItem = item.toLowerCase(); 

  
  const hasItem = storage.some(product => product.toLowerCase() === lowerItem);
  if (hasItem) {
    return `${item} is available to order!`;
  } else {
    return `Sorry! We are out of stock!`;
  }
}

console.log(checkStorage(["apple", "plum", "pear"], "plum")); //"plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); //"plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pear")); //"pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); //"pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "orange")); //"Sorry! We are out of stock!"
console.log(checkStorage(["apple", "plum", "pear"], "carrot")); //"Sorry! We are out of stock!"


/////////////////////for...of///////////////////


function calculateTotalPrice(order) {
  let total = 0;
  for (const element of order) {
    total += element;
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([164, 48, 291])); //503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
console.log(calculateTotalPrice([])); //0
console.log(calculateTotalPrice()); //0


/////////////////////arguments///////////////////


function createReversedArray(...args) {
  const reversedArray = [];
  for (let i = args.length - 1; i >= 0; i -= 1) {
    reversedArray.push(args[i]);
  }
  return reversedArray;
}
console.log(createReversedArray(12, 85, 37, 4)); //[4, 37, 85, 12]
console.log(createReversedArray(164, 48, 291)); //[291, 48, 164]
console.log(createReversedArray(412, 371, 94, 63, 176)); //[176, 63, 94, 371, 412]
console.log(createReversedArray()); //[]


///////////////////// for + if///////////////////


function calculateTax(amount, taxRate) {
for (let i = 0; i < 1; i += 1) {
    if (taxRate === undefined) {
      taxRate = 0.2;
    } 
  }
  return amount * taxRate;
}
console.log(calculateTax(100, 0.1)); //10
console.log(calculateTax(200, 0.1)); //20
console.log(calculateTax(100, 0.2)); //20
console.log(calculateTax(200, 0.2)); //40
console.log(calculateTax(100, 0.3)); //30
console.log(calculateTax(200, 0.3)); //60
console.log(calculateTax(100)); //20
console.log(calculateTax(200)); //40


/////////////////////for + if///////////////////Ітерація по масиву 


function getEvenNumbers(start, end) {
  const evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}
console.log(getEvenNumbers(2, 5)); //[2, 4]
console.log(getEvenNumbers(3, 11)); //[4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); //[6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)); //[8]
console.log(getEvenNumbers(7, 7)); //[]   
console.log(getEvenNumbers()); //[]
