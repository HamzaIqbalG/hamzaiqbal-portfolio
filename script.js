//Home page section//
//----------------------------------------------------------------------------------------------//
var currentImage = 0;
var images = [
  "extra_images/scenery1.jpg",
  "extra_images/scenery2.jpg",
  "extra_images/scenery3.jpg"
];
var slideInterval;
var isPaused = false;

function slideImage() {
  var img = document.getElementById("slideshow-image");
  img.style.transform = "translateX(-100%)"; // Start the slide animation
  img.style.transition = "transform 1s ease-in-out"; // Set the transition duration

  setTimeout(function() {
    img.src = images[currentImage];
    img.style.transform = "translateX(0)"; // Reset the position after the animation
    currentImage = (currentImage + 1) % images.length;
  }, 1000); // Delay changing the image to 1000 milliseconds (1 second)
}

function startSlideShow() {
  slideImage();
  slideInterval = setInterval(slideImage, 5000); // Slide every 5 seconds
}

function pauseSlideShow() {
  var pauseButton = document.getElementById("pause-button");
  if (isPaused) {
    isPaused = false;
    slideInterval = setInterval(slideImage, 5000); // Resume the slideshow
    pauseButton.innerHTML = '<i class="gg-play-stop-o"></i>'; // Display play-stop icon
  } else {
    isPaused = true;
    clearInterval(slideInterval); // Pause the slideshow
    pauseButton.innerHTML = '<i class="gg-play-button-o"></i>'; // Display play button icon
  }
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length; // Move to the previous image
  var img = document.getElementById("slideshow-image");
  img.src = images[currentImage];
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length; // Move to the next image
  var img = document.getElementById("slideshow-image");
  img.src = images[currentImage];
}

window.addEventListener("load", function() {
  startSlideShow(); // Start the slideshow on page load

  var prevButton = document.getElementById("prev-button");
  prevButton.addEventListener("click", prevImage); // Add event listener for previous button

  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", pauseSlideShow); // Add event listener for pause button

  var nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", nextImage); // Add event listener for next button
});



//--------------------------------------------------------------------------------------------//



  
  