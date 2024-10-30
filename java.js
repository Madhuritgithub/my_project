let generateImageForm = document.getElementById('generate-image-form');
let formInput = document.getElementById('input-value');
let imageContainerText = document.getElementById('imageContainerText');
let imageGenerated = document.getElementById('generated-image');
let imageContainer = document.getElementById('images-visible');

// Function to fetch image from Unsplash API
async function fetchImages(keyword) {
    try {
        // Using your Unsplash API key
        let response = await fetch(`https://api.unsplash.com/photos/random?query=${keyword}&client_id=XnJkvaFGuP-C3iIpwLvPYWSfHKeyiADRwosS98-dH8E`);

        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }

        let data = await response.json();
        imageContainerText.innerText = "Here is your AI-generated image:";
        imageGenerated.src = data.urls.regular;
        imageContainer.style.display = "block";
    } catch (error) {
        imageContainerText.innerText = "Failed to generate image. Try again!";
        imageContainer.style.display = "block";
        console.error(error);
    }
}

// Handle form submission to generate image
generateImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let enteredText = formInput.value;

    if (enteredText !== "") {
        fetchImages(enteredText);
    } else {
        imageContainerText.innerText = "Input field cannot be empty!";
        imageContainer.style.display = "block";
    }
});
