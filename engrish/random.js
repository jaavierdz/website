// Function to get a random integer between two values
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get the current date in YYYY-MM-DD format
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Function to set a random image for the day
function setRandomImage() {
  const currentDate = getCurrentDate();
  const randomIndex = getRandomInt(1, 10); // Adjust 10 to the number of images in your /images directory
  const imageUrl = `/images/${currentDate}_${randomIndex}.jpg`; // Change the extension to match your image format
  document.getElementById('randomImage').src = imageUrl;
}

// Call the function to set a random image when the page loads
window.onload = setRandomImage;
