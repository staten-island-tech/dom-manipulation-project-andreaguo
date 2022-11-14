
const DOMSelectors = {
  button: document.getElementById("btn"),           // "Enter" button
  box: document.getElementById("entries"),          // All Entries
  imageURL: document.querySelector(`#imgInput`),      // Input image responses
  clearButton: document.querySelector(`#clear`)     // "Reload" button  
};

// function returnResponses() {
// let input = DOMSelectors.allInputsArray.value;
//   DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${input}</p>`);
//   DOMSelectors.allInputsArray.value = "";
// }

// function style() {
//   input.style.fontSize = "60px";
// }

DOMSelectors.button.addEventListener("click", function () {
  let input = document.querySelectorAll(`#input`);
  let inputs = Array.from(input);
  inputs.forEach((element) => {
    input.insertAdjacentHTML("beforeend", `<p> ${element} </p>`);
    input.value = "";
  })
  /* DOMSelectors.allInputsArray.forEach((input) => {
    console.log(input)
      DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${input}</p>`);
      DOMSelectors.input.value = "";
  });   */
}); // when "enter" button is clicked, name of food will be printed at the bottom

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.imageURL.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<img src="${input}"></img>`);
  DOMSelectors.imageURL.value = "";
}); // when "enter" button is clicked, image of food will be shown at the bottom

  DOMSelectors.button.insertAdjacentHTML(
  "afterend",
  `<h2>full entry here: <h2>`
); // heading separates results from entries

DOMSelectors.clearButton.addEventListener("click", function() {
  location.reload(); 
  return false;
}); // when "clear" button is clicked, page is refreshed/ new objects are cleared