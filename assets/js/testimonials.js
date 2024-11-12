function initializeTestimonials() {
  // Array of objects - the testimonials and images
  const testimonials = [
    {
      mainText:
        "I love it when Pawsitive Poodles comes to visit, it really makes the residents day.",
      whoText: "- Sheffield Hospice",
      image: "../../pawsitive-poodles/assets/images/bella-dad.jpg",
    },
    {
      mainText:
        "I love working with Pawsitive Poodles, I love seeing the residents faces light up when they see the dogs.",
      whoText: "- Pawsitive Poodles Volunteer",
      image: "../../pawsitive-poodles/assets/images/shadow-doggy-daycare.jpg",
    },
    {
      mainText:
        "Bella comes to see me at my home, I wish I could have a Poodle of my own, she makes me so happy.",
      whoText: "- Doncaster, Walking Team",
      image: "../../pawsitive-poodles/assets/images/bella-me.jpg",
    },
  ];

  // Set the initial index to 0 - first testimonial
  let currentIndex = 0;

  function showTestimonial(index) {
    const textElement = document.getElementById("testimonial-text");
    const whoElement = document.getElementById("testimonial-who");
    const imageElement = document.getElementById("testimonial-image");

    if (textElement && imageElement) {
      textElement.textContent = testimonials[index].mainText;
      whoElement.textContent = testimonials[index].whoText;
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
