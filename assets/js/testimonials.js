const testimonials = [
  {
    text: "This is the first testimonial.",
    image: "../../pawsitive-poodles/assets/images/pawsitive-poodles-logo.png",
  },
  {
    text: "This is the second testimonial.",
    image: "../../pawsitive-poodles/assets/images/pawsitive-poodles-logo.png",
  },
  {
    text: "This is the third testimonial.",
    image: "../../pawsitive-poodles/assets/images/pawsitive-poodles-logo.png",
  },
];

// Initialise the index to 0 - first testimonial
let currentIndex = 0;

// Function to iterate through the array of testimonials
function showNextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  document.getElementById("testimonial-text").textContent =
    testimonials[currentIndex].text;
  document.getElementById("testimonial-image").src =
    testimonials[currentIndex].image;
}

// Set up the interval to automatically switch every 5 seconds
setInterval(showNextTestimonial, 5000);
