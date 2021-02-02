const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "FGbt30KpHgCWnzKTO-eYL0hrU2Oy-zKSNH7RXeH_F3Q";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash image</a>
        const item = document.createElement("a");
        item.setAttribute("href", photo.urls.full);
        item.setAttribute("target", "_blank");

        // Creat <img> tag for photo
        const img = document.createElement("img");
        img.setAttribute("src", photo.urls.regular);
        img.setAttribute("alt", photo.alt_description);
        img.setAttribute("title", photo.alt_description);

        // Put <img> inside <a></a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        
        displayPhotos();

    } catch (error) {
        // Catch Error Here
        console.log(error)
    }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        
    }
})

// On Load
getPhotos();