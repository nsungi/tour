
  // JavaScript to change the image source
  const bannerImages = ["assets/images/conservation.jpg", "assets/images/conservation_efforts.jpg", "assets/images/sustainable_tourism.jpg"];
  let currentImageIndex = 0;
  const bannerImage = document.getElementById("bannerImage");

  // Function to change the image source with animation
  function changeBannerImage() {
    bannerImage.style.opacity = 0;
    setTimeout(() => {
      bannerImage.src = bannerImages[currentImageIndex];
      bannerImage.style.opacity = 1;
    }, 500); // Adjust the animation duration as needed
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
  }

  // Call the function to change the image source every 5 seconds
  setInterval(changeBannerImage, 3000); // Change image every 5 seconds


// current year
document.addEventListener('DOMContentLoaded', function() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Set the year in the HTML
  document.getElementById('year').textContent = currentYear;
});  