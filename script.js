// Hamburger toggle
document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  });

const dropdownSections = document.querySelectorAll(".section-toggle");
dropdownSections.forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();

    const parentLi = toggle.closest("li");
    const icon = parentLi.querySelector(".dropdown-icon");
    const dropdown = parentLi.querySelector("ul");

    // Skip if desktop dropdown (no ul inside)
    if (!dropdown) return;

    const isOpen = !dropdown.classList.contains("hidden");

    // Close all others
    dropdownSections.forEach((section) => {
      const otherLi = section.closest("li");
      const otherDropdown = otherLi.querySelector("ul");
      const otherIcon = otherLi.querySelector(".dropdown-icon");

      if (otherDropdown && otherDropdown !== dropdown) {
        otherDropdown.style.height = "0px";
        otherDropdown.classList.add("overflow-hidden");
        setTimeout(() => {
          otherDropdown.classList.add("hidden");
        }, 300);
        otherIcon.style.transform = "rotate(0deg)";
        otherLi.classList.remove("bg-white");
      }
      section.classList.remove("text-black");
    });

    // Toggle selected one
    if (isOpen) {
      dropdown.style.height = dropdown.scrollHeight + "px";
      requestAnimationFrame(() => {
        dropdown.style.height = "0px";
      });
      icon.style.transform = "rotate(0deg)";
      parentLi.classList.remove("bg-white");
      setTimeout(() => {
        dropdown.classList.add("hidden");
      }, 300);
      toggle.classList.remove("text-black");
    } else {
      dropdown.classList.remove("hidden");
      dropdown.style.height = "0px";
      requestAnimationFrame(() => {
        dropdown.style.height = dropdown.scrollHeight + "px";
      });
      icon.style.transform = "rotate(180deg)";
      parentLi.classList.add("bg-[#05007e]");
      toggle.classList.add("text-white");
    }
  });
});


var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});