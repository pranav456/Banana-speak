// console.log("Hello");
// var username = prompt("Enter your name");
// alert("This scripts works " + username);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var OutputDiv = document.querySelector("#output");

var URL = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(text) {
  return URL + "?" + "text=" + text;
}

try {
  function clickEvent() {
    var inputText = txtInput.value;

    fetch(getTranslation(inputText))
      .then((response) => response.json())
      .then((json) => (OutputDiv.innerHTML = json.contents.translated));
  }
} catch (err) {
  console.log("error occured");
}

btnTranslate.addEventListener("click", clickEvent);
