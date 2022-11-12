const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${input}</p>`);
  DOMSelectors.input.value = "";
}); // this function will cause new HTML to be added when the input button is clicked.

DOMSelectors.button.insertAdjacentHTML(
  "afterend",
  `<p>you can have multiple HTML elements in the same DOMSelector!<p>`
);
// you can put multiple HTML tags in the same DOMSelector as if you were writing out regular HTML, you're also able to assigned classes and ids that can be used for styling the elements you add through js.
