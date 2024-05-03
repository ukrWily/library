import $ from "../core";

// //todo`````prevent jump window because of  hidden scrolling
// function calcScroll() {
//   let div = document.createElement("div");

//   div.style.width = "50px";
//   div.style.height = "50px";
//   div.style.overflowY = "scroll";
//   div.style.visibility = "hidden";

//   document.body.appendChild(div);
//   let scrollWidth = div.offsetWidth - div.clientWidth;
//   div.remove();

//   return scrollWidth;
// }

$.prototype.modal = function () {
  // let scroll = calcScroll();
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target");
    $(this[i]).click((e) => {
      e.preventDefault();
      $(target).fadeIn(500);
      /**
       * block scrolling page under modal
       */
      document.body.style.overflow = "hidden";
      //todo`````prevent jump window because of  hidden scrolling
      // document.body.style.marginRight = `${scroll}px`;
    });
  }
  /**
   * close modal
   */
  const closeElements = document.querySelectorAll("[data-close]");
  closeElements.forEach((elem) => {
    $(elem).click(() => {
      $(".modal").fadeOut(500);
      document.body.style.overflow = "";
    });
  });

  /**
   * close modal by click outside of modal
   */
  $(".modal").click((e) => {
    if (e.target.classList.contains("modal")) {
      $(".modal").fadeOut(500);
      document.body.style.overflow = "";
    }
  });
};

$('[data-toggle="modal"]').modal();
