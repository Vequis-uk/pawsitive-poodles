function initializeTestimonials() {
  console.log("Testimonials component loaded");

  // Array of objects - the testimonials and images
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

  // Set the initial index to 0 - first testimonial
  let currentIndex = 0;

  function showTestimonial(index) {
    const textElement = document.getElementById("testimonial-text");
    const imageElement = document.getElementById("testimonial-image");

    if (textElement && imageElement) {
      textElement.textContent = testimonials[index].text;
      imageElement.src = testimonials[index].image;
    }
  }

  // Iterate through the testimonials array
  function showNextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  // Initialize the first testimonial on page load
  showTestimonial(currentIndex); // Display the first testimonial
  setInterval(showNextTestimonial, 5000); // Set up the interval to switch every 5 seconds
}
