
const DOMSelectors = {
  button: document.getElementById("btn"),           // "Enter" button
  box: document.getElementById("entries"),          // All Entries
  imageURL: document.querySelector(`#imgInput`),      // Input image responses
  display:document.querySelector(".display"),
  input: document.querySelectorAll(`#input`),
  inputs: Array.from(input),
  clear: document.querySelectorAll(".clear")
};

DOMSelectors.button.addEventListener("click", function () {
  const recipe = {};
  recipe.name = DOMSelectors.inputs[0].value;
  recipe.ingredients = DOMSelectors.inputs[1].value;
  recipe.instructions = DOMSelectors.inputs[2].value;
  recipe.url = DOMSelectors.imageURL.value;
  console.log(DOMSelectors.inputs)
  DOMSelectors.inputs.forEach((el)=>{
    el.value="";
  })  
  
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
      <h1 class="display-name">${recipe.name}</h1>
      <h2 class="display-ingr">${recipe.ingredients}</h2>
      <h2 class="display-instr">${recipe.instructions}</h2>
      <img src="${recipe.url}" class="display-img" alt="inserted image">
      <button class="clear"> remove recipe </button>
  </div>`
  );

  DOMSelectors.imageURL.value = "";
  
  DOMSelectors.clear = document.querySelectorAll(".clear");
  DOMSelectors.clear.forEach((button) =>
    button.addEventListener("click", function () {
      this.parentElement.remove();
    })
  );
  
});