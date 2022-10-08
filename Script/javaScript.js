const charactersAll = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersNoNumber = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersNoSymbol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charactersNoSymbolNoNumber = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


let characters;
// Element Selectors
let boxOneContent = document.getElementById("box-one-content");
let boxTwoContent = document.getElementById("box-two-content");
let generatPass = document.getElementById("generate-pass");
let themeIcon = document.getElementById("theme-icon");
let copyImgOne = document.getElementById("copy-img-one");
let copyImgTwo = document.getElementById("copy-img-two");
// Theme Changere
themeIcon.addEventListener("click", function () {
  if (
    window
      .getComputedStyle(themeIcon, null)
      .getPropertyValue("background-color") === "rgb(0, 0, 0)"
  ) {
    themeIcon.style.background = "#10b981";
    themeIcon.src =
      "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
    document.body.style.color = "#333";
    document.getElementById("card").style.background = "#baf8db";
    document.querySelector(".primary-color").style.textShadow =
      "1px 1px 3px #000";
    document.getElementById("box-one").style.background = "#10b981";
    document.getElementById("box-two").style.background = "#10b981";
    document.querySelector(".btn").style.background = "#273549";
  } else {
    themeIcon.style.background = "#000";
    themeIcon.src =
      "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
    document.body.style.color = "#fff";
    document.getElementById("card").style.background = "#1f2937";
    document.querySelector(".primary-color").style.textShadow =
      "0px 0px 3px #4adf86";
    document.getElementById("box-one").style.background = "#273549";
    document.getElementById("box-two").style.background = "#273549";
    document.querySelector(".btn").style.background = "#10b981";
  }
});

// Generate Passwords
generatPass.addEventListener("click", function () {
  // Checking the CheckBoxes
  let SymbCheckBox = document.getElementById("symbols-checkbox-input").checked;
  let NumCheckBox = document.getElementById("numbers-checkbox-input").checked;
  if (NumCheckBox && SymbCheckBox) {
    characters = charactersAll;
  } else if (NumCheckBox && SymbCheckBox === false) {
    characters = charactersNoSymbol;
  } else if (NumCheckBox === false && SymbCheckBox) {
    characters = charactersNoNumber;
  } else {
    characters = charactersNoSymbolNoNumber;
  }
  // Setting Numbers of the characters
  let numberOfCharacters = document.getElementById(
    "number-of-characters"
  ).value;
  // Reseting Box Content
  boxOneContent.textContent = "";
  boxTwoContent.textContent = "";
  // Making a loop to search inside characters and fill the Box Content
  for (let i = 0; i < numberOfCharacters; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    boxOneContent.textContent += characters[randomIndexOne];
    boxTwoContent.textContent += characters[randomIndexTwo];
  }
});

// Copy on Click
copyImgOne.addEventListener("click", function () {
  // Copy the text inside the text field
  navigator.clipboard.writeText(boxOneContent.textContent);
});
copyImgTwo.addEventListener("click", function () {
  // Copy the text inside the text field
  navigator.clipboard.writeText(boxTwoContent.textContent);
});
