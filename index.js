const DOMSelectors = {
  button: document.getElementById("btn"),           // "Enter" button
  box: document.getElementById("entries"),          // All Entries
  input: document.querySelector('#nameInput'),     // Input Name responses 
  // // input2: document.querySelector(`#ingrInput`),     // Input ingrediences responses 
  // // input3: document.querySelector(`#instrInput`),    // Input instructions responses
  input4: document.querySelector(`#imgInput`),      // Input image responses
  clearButton: document.querySelector(`#clear`)     // "Reload" button  
};

function imageSizing(image) {
  image.style.height = "15vh";
}

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${input}</p>`);
  DOMSelectors.input.value = "";
}); // when "enter" button is clicked, name of food will be printed at the bottom

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input4.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<img src="${input}"></img>`);
  DOMSelectors.input4.value = "";
}); // when "enter" button is clicked, name of food will be printed at the bottom

DOMSelectors.button.insertAdjacentHTML(
  "afterend",
  `<h2>full entry here: <h2>`
); // heading separates results from entries

DOMSelectors.clearButton.addEventListener("click", function() {
  location.reload(); return false;
}); // when "clear" button is clicked, page is refreshed/ new objects are cleared