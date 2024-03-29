//Home page section//
//----------------------------------------------------------------------------------------------//

var currentImage = 0;
var images = [
  "extra_images/welcomeMessage.jpg",
  "extra_images/welcomeMessage2.jpg"
];
var slideInterval;
var isPaused = false;

function slideImage() {
  var img = document.getElementById("slideshow-image");
  if (!img) return; // Check if the element exists
  
  img.style.transform = "translateX(-100%)";
  img.style.transition = "transform 1s ease-in-out";

  setTimeout(function() {
    img.src = images[currentImage];
    img.style.transform = "translateX(0)";
    currentImage = (currentImage + 1) % images.length;
  }, 1000);
}

function startSlideShow() {
  slideImage();
  slideInterval = setInterval(slideImage, 5000);
}

function pauseSlideShow() {
  var pauseButton = document.getElementById("pause-button");
  if (!pauseButton) return; // Check if the element exists
  
  if (isPaused) {
    isPaused = false;
    slideInterval = setInterval(slideImage, 5000);
    pauseButton.innerHTML = '<i class="gg-play-stop-o"></i>';
  } else {
    isPaused = true;
    clearInterval(slideInterval);
    pauseButton.innerHTML = '<i class="gg-play-button-o"></i>';
  }
}

function prevImage() {
  if (images.length <= 1) return; // Check if there are more than one images
  currentImage = (currentImage - 1 + images.length) % images.length;
  var img = document.getElementById("slideshow-image");
  if (img) img.src = images[currentImage];
}

function nextImage() {
  if (images.length <= 1) return; // Check if there are more than one images
  currentImage = (currentImage + 1) % images.length;
  var img = document.getElementById("slideshow-image");
  if (img) img.src = images[currentImage];
}

window.addEventListener("load", function() {
  startSlideShow();

  var prevButton = document.getElementById("prev-button");
  if (prevButton) prevButton.addEventListener("click", prevImage);

  var pauseButton = document.getElementById("pause-button");
  if (pauseButton) pauseButton.addEventListener("click", pauseSlideShow);

  var nextButton = document.getElementById("next-button");
  if (nextButton) nextButton.addEventListener("click", nextImage);
});
//--------------------------------------------------------------------------------------------//



  
  