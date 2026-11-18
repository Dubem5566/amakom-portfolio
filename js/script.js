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

    const thumbnails = gallery.querySelectorAll(".project-thumbnail");
    const placeholder = gallery.querySelector(".screenshot-placeholder");
    const caption = gallery.querySelector(".placeholder-caption");

    thumbnails.forEach(thumbnail => {

        thumbnail.addEventListener("click", () => {

            const title = thumbnail.dataset.title;

            // Update placeholder caption
            if (caption) {
                caption.textContent = title;
            }

            if (placeholder) {
                placeholder.dataset.placeholder = title;
            }

            // Update active thumbnail
            thumbnails.forEach(item => {
                item.classList.remove("active");
            });

            thumbnail.classList.add("active");

        });

    });

});