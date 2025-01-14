const gallery = document.getElementById('gallery');
let isDragging = false;
let startY;
let scrollTop;

// Adjust scaling based on image position
function adjustImageSizes() {
    const images = document.querySelectorAll('.gallery div img');
    const galleryCenter = gallery.offsetHeight / 2;

    images.forEach((img) => {
        const imgRect = img.getBoundingClientRect();
        const imgCenter = imgRect.top + imgRect.height / 2;
        const distance = Math.abs(galleryCenter - imgCenter);

        if (distance < imgRect.height) {
            img.classList.add('active');
            img.classList.remove('small');
        } else {
            img.classList.add('small');
            img.classList.remove('active');
        }
    });
}

// Dragging functionality for the carousel
gallery.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.pageY - gallery.offsetTop;
    scrollTop = gallery.scrollTop;
    gallery.style.cursor = 'grabbing';
});

gallery.addEventListener('mouseleave', () => {
    isDragging = false;
    gallery.style.cursor = 'grab';
});

gallery.addEventListener('mouseup', () => {
    isDragging = false;
    gallery.style.cursor = 'grab';
});

gallery.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const y = e.pageY - gallery.offsetTop;
    const distance = (y - startY) * 2; // Adjust scrolling speed
    gallery.scrollTop = scrollTop - distance;
    adjustImageSizes();
});

// Adjust image sizes on scroll
gallery.addEventListener('scroll', () => {
    adjustImageSizes();
});

// Initial adjustment
adjustImageSizes();
