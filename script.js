let screenDigit = document.querySelector("#screen");
let number = "";
let tempResult = 0;


const bodyElement = document.getElementById('body')

bodyElement.addEventListener("keydown", keyDownFunc);

function keyDownFunc(e) {
  e.preventDefault()
  pattern = /[0-9*-+/]/gi
  let text = parseInt(e.code[e.code.length - 1])

  console.log("e.code:::", e.code)
  console.log("e.keyCode:::", e.keyCode)


  if (pattern.test(text)) {
    printToScrn(text)
  } else {
    switch (e.code) {
      case 'Enter':
        findResult()
        // document.getElementById('findRes').click()
        break;
      case 'NumpadEnter':
        findResult()
        break;
      case 'NumpadDivide':
        printToScrn('/')
        break;
      case 'NumpadMultiply':
        printToScrn('*')
        break;
      case 'NumpadSubtract':
        printToScrn('-')
        break;
      case 'NumpadAdd':
        printToScrn('+')
        break;
      case 'Backspace':
        Bspc()
        break;
      case 'Delete':
        CEclear()
        break;

      default:
        break;
    }

  }
}



function printToScrn(newNumChar) {
  newNumChar = newNumChar.toString();

  let lastNumber = number[number.length - 1]
  const operators = ["+", "-", "*", "/"]
  if (operators.includes(lastNumber) && operators.includes(newNumChar)) {
    console.log("ard arda operatör girişi")
    const tempNums = number.split('')
    tempNums.pop()
    tempNums.push(newNumChar)


    number=tempNums.reduce(reducerFunc)
    function reducerFunc (acc, nextNum){
      return acc+nextNum
    }

    screenDigit.innerHTML = number;

  // } else if () {

  } else {
    number += newNumChar;
    screenDigit.innerHTML = number;

  }
}

//////////////////////////////////
function printToScrn2() {
  number += "(";
  screenDigit.innerHTML = number;
}
function printToScrn3() {
  number += ")";
  screenDigit.innerHTML = number;
}
//////////////////////////////////

function CEclear() {
  number = "";
  screenDigit.innerHTML = 0;
}

function findResult() {
  tempResult = screenDigit.innerHTML;
  screenDigit.innerHTML = "";
   setTimeout( () => {
    screenDigit.innerHTML = eval(tempResult);
    number = screenDigit.innerHTML;
  }, 300);
}

let newNumber;
function Bspc() {
  newNumber = screenDigit.innerHTML.split('')
  console.log(newNumber)
  newNumber.pop();
  console.log(newNumber)
  screenDigit.innerHTML = "";

  newNumber.forEach(element => {
    screenDigit.innerHTML += element

  });
  console.log("screenDigit.length", screenDigit.length)
  if (screenDigit.innerHTML == 0) {
    screenDigit.innerHTML = 0;
  } else {
    number = screenDigit.innerHTML
    console.log(screenDigit.innerHTML)
  }
}

