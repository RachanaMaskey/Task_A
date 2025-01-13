const gallery = document.getElementById('gallery');
let isDragging = false;
let startY;
let scrollTop;

// Clone the first and last set of images for continuous looping
const firstClone = gallery.children[0].cloneNode(true);
const lastClone = gallery.children[gallery.children.length - 1].cloneNode(true);

gallery.appendChild(firstClone); // Add first clone to the end
gallery.insertBefore(lastClone, gallery.children[0]); // Add last clone to the beginning

// Reset the scroll to show the first set after cloning
gallery.scrollTop = gallery.clientHeight;

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
});

// Event listener for automatic loop when scrolling reaches the first or last clone
gallery.addEventListener('scroll', () => {
    if (gallery.scrollTop >= gallery.scrollHeight - gallery.clientHeight) {
        gallery.scrollTop = gallery.clientHeight; // Jump back to the first original set
    } else if (gallery.scrollTop <= 0) {
        gallery.scrollTop = gallery.scrollHeight - 2 * gallery.clientHeight; // Jump back to the last original set
    }
});

// Next and Back buttons for manual scrolling
document.querySelector("#nextbtn").addEventListener("click", () => {
    gallery.scrollTop += gallery.clientHeight; // Scroll down by one set of images
});

document.querySelector("#backbtn").addEventListener("click", () => {
    gallery.scrollTop -= gallery.clientHeight; // Scroll up by one set of images
});
