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

$.prototype.modal = function (created) {
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

    /**
     * close modal
     */
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach((elem) => {
      $(elem).click(() => {
        $(target).fadeOut(500);
        document.body.style.overflow = "";
        /**
         * if this modal was created with JS- remove it
         */
        if (created) {
          document.querySelector(target).remove();
        }
      });
    });

    /**
     * close modal by click outside of modal
     */
    $(target).click((e) => {
      if (e.target.classList.contains("modal")) {
        $(target).fadeOut(500);
        document.body.style.overflow = "";
        /**
         * if this modal was created with JS- remove it
         */
        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function ({ text, btns } = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));

    /**
     * create buttons
     */
    // btns = {count: num, settings: [{text, classNames=[], close, cb}]}
    const buttons = [];
    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement("button");
      btn.classList.add("btn", ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];
      if (btns.settings[j][2]) {
        btn.setAttribute("data-close", "true");
      }
      if (btns.settings[j][3] && typeof btns.settings[j][3] === "function") {
        btn.addEventListener("click", btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
            <button class="close" data-close>
                <span>&times;</span>
            </button>
            <div class="modal-header">
                <div class="modal-title">${text.title}</div>
            </div>
            <div class="modal-body">${text.body}</div>
            <div class="modal-footer">
            </div>
          </div>
      </div>
    `;

    modal.querySelector(".modal-footer").append(...buttons);
    document.body.appendChild(modal);
    $(this[i]).modal(true);
    $(this[i].getAttribute("data-target")).fadeIn(500);
  }
};
