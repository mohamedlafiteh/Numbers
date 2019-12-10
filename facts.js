let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");

numberInput.addEventListener("input", getFactAFetch);

function getFactAFetch() {
  let number = numberInput.value;
  fetch("https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + number)
    .then(response => response.text())
    .then(data => {
      if (number != "") {
        fact.style.display = "block";
        factText.innerText = data;
      }
    })
    .catch();
}
