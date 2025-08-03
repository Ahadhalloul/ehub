// news silder
const sliderSwiper = new Swiper(".news-slider", {
  loop: true, //  infinite loop
  slidesPerView: 1.3,
  spaceBetween: 100,
  // autoplay: { delay: 2500, disableOnInteraction: true }, //autoplay

  pagination: {
    el: ".news-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".news-slider .swiper-button-next",
    prevEl: ".news-slider .swiper-button-prev",
  },
  slideToClickedSlide: true,
  centeredSlides: true,
});
// --------------------------------------------------
//  industry logos swiper of mobility and customer expereince cards
// const logosSwiper = new Swiper(".industry-swiper", {
//   slidesPerView: 3.7,
//   spaceBetween: 8,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   on: {
//     reachBeginning: updateFades,
//     reachEnd: updateFades,
//     slideChange: updateFades,
//   },
// });

// function updateFades() {
//   const fadeLeft = document.getElementById("fadeLeft");
//   const fadeRight = document.getElementById("fadeRight");
//   fadeLeft.style.display = logosSwiper.isBeginning ? "none" : "block";
//   fadeRight.style.display = logosSwiper.isEnd ? "none" : "block";
// }
// // Fallback on window load
// window.addEventListener("load", () => {
//   updateFades();
// });
//
// ---------------------
// -------------------------
//  industry logos swiper of mobility and customer expereince cards (more than one card !!)
function updateFades(swiper) {
  const wrapper = swiper.el.closest(".industry-swiper-container");
  const leftMask = wrapper.querySelector(".fade-left");
  const rightMask = wrapper.querySelector(".fade-right");

  // Show/hide masks based on position
  leftMask.classList.toggle("fade-hidden", swiper.isBeginning);
  rightMask.classList.toggle("fade-hidden", swiper.isEnd);

  console.log(`Swiper ${swiper.el.dataset.id} at slide ${swiper.activeIndex}`);
}
//create swiper for each card
document.querySelectorAll(".industry-swiper").forEach((el, index) => {
  const swiper = new Swiper(el, {
    slidesPerView: 3.7,
    spaceBetween: 8,
    navigation: {
      nextEl: el.querySelector(".swiper-button-next"),
      prevEl: el.querySelector(".swiper-button-prev"),
    },
    on: {
      init() {
        updateFades(this);
      },
      slideChange() {
        updateFades(this);
      },
      reachBeginning() {
        updateFades(this);
      },
      reachEnd() {
        updateFades(this);
      },
    },
  });
});
