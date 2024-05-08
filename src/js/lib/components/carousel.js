import $ from "../core";

$.prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(
      this[i].querySelector(".carousel-inner")
    ).width;
    const slides = this[i].querySelectorAll(".carousel-item");
    const slidesField = this[i].querySelector(".carousel-slides");
    const dots = document.querySelectorAll(".carousel-indicators li");

    slidesField.style.width = 100 * slides.length + "%";
    slides.forEach((slide) => {
      slide.style.width = width;
    });

    /**
     * number of slide
     */
    let offset = 0;
    let slideIndex = 0;

    $(this[i].querySelector('[data-slide="next"]')).click((e) => {
      e.preventDefault();
      /**
       * if this slide is final-> next slide is first slide
       */
      if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, "");
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[slideIndex].classList.add("active");
    });

    $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
      e.preventDefault();
      /**
       * if this slide is final-> next slide is first slide
       */
      if (offset == 0) {
        offset = +width.replace(/\D/g, "") * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, "");
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[slideIndex].classList.add("active");
    });

    /**
     * switch slide by dots
     */
    const slideId = this[i].getAttribute("id");
    $(`#${slideId} .carousel-indicators li`).click((e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = +width.replace(/\D/g, "") * slideTo;

      slidesField.style.transform = `translateX(-${offset}px)`;
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[slideIndex].classList.add("active");
    });
  }
};

$(".carousel").carousel();
