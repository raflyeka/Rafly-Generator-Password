let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatorPassword(length) {
  const lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const dataPassword = lowAlphabet + upAlphabet + numeric;

  let generator = "";
  for (let index = 0; index < length; index++) {
    generator += dataPassword[Math.floor(Math.random() * dataPassword.length)];
  }
  return generator;
}

function getPassword() {
  const newPassword = generatorPassword(passwordLength.value);
  password.value = newPassword;
  alert("password has been generated!");
}

// savePassword is succeed

function savePassword() {
  document.title = password.value;
  saveButton.setAttribute(
    "href",
    "data:application/octet-stream;charset=utf-8," +
      encodeURIComponent(`password saya: ${document.title}`)
  );
  saveButton.setAttribute("download", "MyPasswordGeneratorLOG.txt");
}
