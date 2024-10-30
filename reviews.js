const reviews = document.querySelectorAll(".reviews");
let currentIndex = 0;

const displayReviews = () => {
    // Hide all reviews
    reviews.forEach(review => {
        review.style.display = "none";
    });

    // Display the current review
        reviews[currentIndex].style.display = "block";

    // Move on to the next review then cycle back
    currentIndex = (currentIndex + 1) % reviews.length;
}


document.addEventListener("DOMContentLoaded", displayReviews);
setInterval(displayReviews, 5000); // Displays a review every 5 seconds






//images modal for viewing full screen 
// Select modal elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementsByClassName('close')[0];

// Open modal on image click
document.querySelectorAll('.img-item').forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src; // Set clicked image as the modal image
    });
});

// Close modal on 'X' click
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
