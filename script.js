//Home page section//
//----------------------------------------------------------------------------------------------//
var currentImage= 0;
var images=["extra_images/scenery1.jpg","extra_images/scenery2.jpg","extra_images/scenery3.jpg"];

function changeImage(){
  var img= document.getElementById("slideshow-image");
  img.classList.add("fade-out"); //fade out transition effect

  setTimeout(function(){
    img.src = images[currentImage];
    currentImage = (currentImage+1)%(images.length);
  },500); //delay changing the image to 500 miliseconds
}

function startSlideShow(){
    changeImage();
    setInterval(changeImage,3000); //change image every 3000 miliseconds
}

window.addEventListener("load", startSlideShow);


//--------------------------------------------------------------------------------------------//


  
  