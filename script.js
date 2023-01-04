let screenDigit = document.querySelector("#screen");
let number1 = "";
let tempResult = 0;
let isScrnEmpty = true;

function printerHelperFunc(params) {
  params = params.toString();
  number1 += params;
  screenDigit.innerHTML = number1;
}

function printToScrn(params) {
  if (isScrnEmpty) {
    printerHelperFunc(params);
  } else {
    screenDigit.innerHTML = "";
    number1 = "";
    printerHelperFunc(params);
    isScrnEmpty = true;
  }
}


//////////////////////////////////
function printToScrn2() {    
    number1 += "(";
    screenDigit.innerHTML = number1; 
}
function printToScrn3() {    
    number1 += ")";
    screenDigit.innerHTML = number1; 
}
//////////////////////////////////

function CEclear() {
  number1 = "";
  screenDigit.innerHTML = 0;
}

function findResult() {
  tempResult = screenDigit.innerHTML;
  screenDigit.innerHTML = "";
  setTimeout(() => {
    screenDigit.innerHTML = eval(tempResult);
    number1 = screenDigit.innerHTML;
  }, 300);
  isScrnEmpty = false;
}

let newNumber;
function Bspc() {
  newNumber = screenDigit.innerHTML.split('')
  console.log(newNumber)
  newNumber.pop();
  console.log(newNumber)
  screenDigit.innerHTML ="";

  newNumber.forEach(element => {
    screenDigit.innerHTML += element
  
  });
  console.log("screenDigit.length",screenDigit.length )
    if (screenDigit.innerHTML == 0) {
      screenDigit.innerHTML=0;      
    } else {
      number1=screenDigit.innerHTML
      console.log(screenDigit.innerHTML)
    }

}