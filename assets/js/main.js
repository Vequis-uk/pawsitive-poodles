/* Function that accepts file path and element id in order to inject into this index.html */
function loadComponent(filePath, elementId) {
  fetch(filePath)
    .then((response) => response.text())
    .then((text) => {
      document.getElementById(elementId).innerHTML = text;
      if (elementId === "poodle-testimonials") {
        loadTestimonialsScript();
      }
    });
}

/* Function that will load list of components below */
function loadAllComponents() {
  loadComponent("components/header.html", "poodle-header");
  loadComponent("components/top-hero.html", "poodle-top-hero");
  loadComponent("components/testimonials.html", "poodle-testimonials");
}

/* Watches to see if the dom is loaded and runs loadAllComponents if it is */
document.addEventListener("DOMContentLoaded", loadAllComponents);

/* Function to load the external testimonials script */
function loadTestimonialsScript() {
  const script = document.createElement("script");
  script.src = "../../pawsitive-poodles/assets/js/testimonials.js";
  script.onload = () => {
    if (typeof initializeTestimonials === "function") {
      initializeTestimonials();
    } else {
      console.error("initializeTestimonials is not defined");
    }
  };
  document.body.appendChild(script);
}
