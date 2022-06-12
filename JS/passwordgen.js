const passwordInput = document.getElementById("passwordInput");
const generatePasswords = document.getElementById("generatePasswords");

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let password3 = document.getElementById("password3");
let password4 = document.getElementById("password4");
const ranPossiblities = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "!",
  "?",
];

generatePasswords.addEventListener("click", function () {
  if (passwordInput.value < 31 && passwordInput.value > 0) {
    generatePass();
  }
});

function password() {
  let password = "";
  for (let i = 0; i < passwordInput.value; i++) {
    password +=
      ranPossiblities[Math.floor(Math.random() * ranPossiblities.length)];
  }
  return password;
}

function generatePass() {
  password1.textContent = password();
  password2.textContent = password();
  password3.textContent = password();
  password4.textContent = password();
}

// function generatePasswords() {
//     password1.textContent = passGenerator()
//     password2.textContent = passGenerator()
//     password3.textContent = passGenerator()
//     password4.textContent = passGenerator()
// }

// function passGenerator(num) {
//     return new Array(num).fill(0).map(function(){
//         return ranPossiblities[Math.floor(Math.random()* ranPossiblities.length)]
//     }).join(``)
// }
