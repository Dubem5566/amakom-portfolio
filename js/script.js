// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}


// ========================================
// PROJECT SCREENSHOT GALLERIES
// ========================================

document.querySelectorAll(".project-gallery").forEach(gallery => {

    const mainImage = gallery.querySelector(".main-project-screenshot");
    const thumbnails = gallery.querySelectorAll(".project-thumbnail");
    const caption = gallery.querySelector(".placeholder-caption");

    thumbnails.forEach(thumbnail => {

        thumbnail.addEventListener("click", () => {

            // Get the selected image and title
            const image = thumbnail.dataset.image;
            const title = thumbnail.dataset.title;

            // Update the main screenshot
            if (mainImage && image) {
                mainImage.src = image;
                mainImage.alt = title;
            }

            // Update the caption
            if (caption && title) {
                caption.textContent = title;
            }

            // Remove active class from all thumbnails
            thumbnails.forEach(item => {
                item.classList.remove("active");
            });

            // Highlight the selected thumbnail
            thumbnail.classList.add("active");

        });

    });

});