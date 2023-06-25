$(document).ready(function () {
  $(".reviews__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    customPaging: function (slider, i) {
      return `
      <div class="reviews__dot">
        <img src=${`img/reviews/0${i + 1}.svg`} alt="Logo" />
      </div>
`;
    },
    appendDots: $(".reviews__slider"),
  });
});

document.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  const targetItem = e.target;
  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
}

const header = document.querySelector(".header__top");
const loreSection = document.querySelector(".lore");

function updateHeader() {
  let position = loreSection.getBoundingClientRect();
  if (position.top < 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

window.addEventListener("scroll", updateHeader);

const counter = document.querySelector(".counter__current");
const heroSection = document.querySelector(".hero");
const charactersSection = document.querySelector(".characters");
const gallerySection = document.querySelector(".gallery");
const gameplaySection = document.querySelector(".gameplay");
const reviewsSection = document.querySelector(".reviews");

function updateCounter() {
  const currentY = window.scrollY + (window.innerHeight * 81.8) / 100;
  const sections = [
    heroSection,
    loreSection,
    charactersSection,
    gallerySection,
    gameplaySection,
    reviewsSection,
  ];
  sections.forEach((section) => {
    if (currentY > section.offsetTop) {
      counter.textContent = "0" + section.dataset.count;
    }
  });
}
window.addEventListener("scroll", updateCounter);
