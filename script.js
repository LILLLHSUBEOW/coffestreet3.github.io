// Navigation
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu")
    const navigation = document.querySelector(".navigation")
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
// End Navigation

// Active Icon
const activeIcon = document.querySelectorAll(".activeIcon");
activeIcon.forEach((eL) => {
    eL.addEventListerner("cllick", function () {
        eL.classList.toggle("active");
    });
});
// End Active icon

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  autoplay: {
    //delay: 2500,
    //disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  }
});
// End Swiper Slider