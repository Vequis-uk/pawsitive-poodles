/* Function that accepts file path and element id in order in inject into this index.html */
function loadComponent(filePath, elementId) {
  fetch(filePath)
    .then((response) => response.text())
    .then((text) => {
      document.getElementById(elementId).innerHTML = text;
    });
}

/* Function that will load list of components below */
function loadAllComponents() {
  loadComponent("components/header.html", "poodle-header");
  loadComponent("components/top-hero.html", "poodle-top-hero");
}

/* Watches to see if the dom is loaded and runs loadAllComponents if it is */
document.addEventListener("DOMContentLoaded", loadAllComponents);
