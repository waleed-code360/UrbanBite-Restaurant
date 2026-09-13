// 1. Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// 2. Menu filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const category = button.getAttribute("data-category");

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });
        button.classList.add("active");

        menuItems.forEach(function (item) {
            const itemCategory = item.getAttribute("data-category");
            item.style.display = category === "all" || itemCategory === category ? "block" : "none";
        });
    });
});

// 3. Contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill all required fields.";
            formMessage.style.color = "#ff6b6b";
        } else {
            formMessage.textContent = "Thank you! Your request has been received.";
            formMessage.style.color = "#7bed9f";
            contactForm.reset();
        }
    });
}

// 4. Gallery modal
const galleryModal = document.getElementById("galleryModal");

if (galleryModal) {
    const galleryImages = document.querySelectorAll(".gallery-image");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            modalImage.src = image.src;
            galleryModal.classList.add("show");
        });
    });

    closeModal.addEventListener("click", function () {
        galleryModal.classList.remove("show");
    });

    galleryModal.addEventListener("click", function (event) {
        if (event.target === galleryModal) {
            galleryModal.classList.remove("show");
        }
    });
}
