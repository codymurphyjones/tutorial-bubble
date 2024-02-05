console.log("first Line");
var isInitialized = false;
var isToggled = false;
var overlay = undefined;
var message = undefined;
var highlight = undefined;
console.log(isToggled);
console.log(overlay);
console.log(message);
console.log(highlight);

function cssContains(element, className) {
  return element.classList.contains(className);
}

function toggleShowHideElementForce(element, forceShow) {
  console.log(element.classList);
  if (!cssContains(element, "hide") && !forceShow) {
    element.classList.remove("show");
    element.classList.add("hide");
  } else {
    element.classList.add("show");
    element.classList.remove("hide");
  }
}

function toggleShowHideElement(element) {
  console.log("!:", element.classList);

  toggleShowHideElementForce(element, cssContains(element, "hide"));
}

function resetOverlay() {
  if (!isInitialized) return;

  isToggled = false;
  element.classList.remove("mystyle");
  highlight.style.backgroundColor = "transparent";
  highlight.style.padding = "0px";
  message.style.display = "none";
}

function calculateOverlay() {
  if (!isInitialized) return;

  toggleShowHideElement(overlay);
  toggleShowHideElement(message);
  toggleShowHideElement(highlight);
}

function toggleOverlay() {
  if (!isInitialized) return;
  console.log("i fire at start?");
  console.log("pre:", isToggled);
  isToggled = !isToggled;
  console.log("post:", isToggled);

  calculateOverlay();
}

window.onload = (event) => {
  console.log("page is fully loaded");
  overlay = document.querySelector(".overlay");
  message = document.querySelector(".menu-overlay-message");
  highlight = document.querySelector("nav ul");
  isInitialized = true;

  console.log(overlay);
  console.log(message);
  console.log(highlight);

  toggleShowHideElementForce(overlay, false);
  toggleShowHideElementForce(message, false);
  toggleShowHideElementForce(highlight, false);
  window.toggleOverlay = toggleOverlay;
};
