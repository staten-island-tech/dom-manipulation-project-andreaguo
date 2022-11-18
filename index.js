
const DOMSelectors = {
  button: document.getElementById("btn"),           // "Enter" button
  box: document.getElementById("entries"),          // All Entries
  imageURL: document.querySelector(`#imgInput`),      // Input image responses
  clear: document.querySelector(`#clear`),     // "Reload" button  
  display:document.querySelector(".display")
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
  const recipe = {};
  recipe.name = inputs[0].value;
  recipe.ingredients = inputs[1].value;
  recipe.instructions = inputs[2].value;
  DOMSelectors.display.insertAdjacentHTML("beforeend", `<p> Recipe For ${recipe.name}</p>`);
  DOMSelectors.display.insertAdjacentHTML("beforeend", `<p> Ingredients:
  ${recipe.ingredients}</p>`);
  DOMSelectors.display.insertAdjacentHTML("beforeend", `<p> Instructions: 
  ${recipe.instructions}</p>`);
  console.log(inputs)
  inputs.forEach((el)=>{
    el.value="";
  })
}); // when "enter" button is clicked, name of food will be printed at the bottom

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.imageURL.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<img src="${input}"></img>`);
  DOMSelectors.imageURL.value = "";
}); // when "enter" button is clicked, image of food will be shown at the bottom

  DOMSelectors.button.insertAdjacentHTML(
  "afterend",
  `<div class="button">
    <image src></image>
    <h1 class="">${input}</h1>
    <img src="${imageURL}" class="img" alt="">
    <br>
    <button type="clear" class="clear" id="clear">clear</button>

  </div>`
); // heading separates results from entries

DOMSelectors.clearButton.addEventListener("click", function() {
  location.reload(); 
  return false;
}); // when "clear" button is clicked, page is refreshed/ new objects are cleared