const revealTargets = document.querySelectorAll(
  ".hero-image-card, .hero-note, .hero-meta div, .service-card, .booking-panel, .booking-copy, .location-card, .social-card, .gallery-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealTargets.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});

const bookingModal = document.getElementById("booking-modal");
const bookingButtons = document.querySelectorAll("[data-open-booking]");
const closeButtons = document.querySelectorAll("[data-close-booking]");
const galleryRail = document.getElementById("gallery-rail");
const galleryScrollButton = document.getElementById("gallery-scroll");

const openBooking = () => {
  bookingModal.classList.add("is-open");
  bookingModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeBooking = () => {
  bookingModal.classList.remove("is-open");
  bookingModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

bookingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openBooking();
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeBooking);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && bookingModal.classList.contains("is-open")) {
    closeBooking();
  }
});

if (galleryRail && galleryScrollButton) {
  galleryScrollButton.addEventListener("click", () => {
    const card = galleryRail.querySelector(".gallery-card");
    const step = card ? card.getBoundingClientRect().width + 16 : 320;
    const remaining = galleryRail.scrollWidth - galleryRail.clientWidth - galleryRail.scrollLeft;
    const nextLeft = remaining < step ? 0 : galleryRail.scrollLeft + step;

    galleryRail.scrollTo({
      left: nextLeft,
      behavior: "smooth",
    });
  });
}
