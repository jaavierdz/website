// Function to smoothly change the color of an element
function rainbowColor(elementId) {
    const hueStep = 2; // The amount by which the hue value changes per step
    const delay = 50; // Delay between each color change (in milliseconds)
    let currentHue = 0; // Initial hue value

    // Function to update the color of the element
    function updateColor() {
        currentHue = (currentHue + hueStep) % 360; // Increment the hue value
        const element = document.getElementById(elementId);
        if (element) {
            element.style.color = `hsl(${currentHue}, 100%, 50%)`; // Set the color using HSL format
        }
    }

    // Call updateColor() function repeatedly with a delay
    setInterval(updateColor, delay);
}

// Call the rainbowColor function with the ID of the element
rainbowColor('titulo');
rainbowColor('eod');
