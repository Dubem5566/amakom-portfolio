const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const bartrackMainImage = document.querySelector("#bartrack-main-image");
const bartrackThumbnails = document.querySelectorAll(".project-thumbnail");

bartrackThumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", () => {

        const image = thumbnail.dataset.image;
        const alt = thumbnail.dataset.alt;

        bartrackMainImage.src = image;
        bartrackMainImage.alt = alt;

        bartrackThumbnails.forEach((item) => {
            item.classList.remove("active");
        });

        thumbnail.classList.add("active");
    });

});