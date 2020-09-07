let passwordArray = [];
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "-_!@#$%^&*+?№~";
let characters = "";
let password = "";

function setCharacters() {
  if (document.querySelector("#checkbox1").checked) characters += uppercase;
  if (document.querySelector("#checkbox2").checked) characters += lowercase;
  if (document.querySelector("#checkbox3").checked) characters += numbers + numbers;
  if (document.querySelector("#checkbox4").checked) characters += symbols + symbols;
  return characters;
}

function pickRandom(string) {
  let random = Math.floor(Math.random() * string.length);
  return string[random];
}

function getArrayOfRandom(string) {
  const arrayOfRandom = [];
  while (arrayOfRandom.length < 111) arrayOfRandom.push(pickRandom(string));
  passwordArray = arrayOfRandom;
  characters = "";
}

function generatePassword() {
  getArrayOfRandom(setCharacters());
  length = document.querySelector("#number").value;
  if (length < 3 || length > 52)
    document.querySelector("#message").innerHTML = "Выберите другое число символов";
  else
    while (password.length < length) password += pickRandom(passwordArray);
}

function getPassword() {
  password = "";
  generatePassword();
  document.querySelector("#password").innerHTML = password;
  if (password !== "") document.querySelector("#message").innerHTML = "Пароль создан!";
}