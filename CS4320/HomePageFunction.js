// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll("#heroSlider .slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Slide every 5 seconds
setInterval(showNextSlide, 5000);
