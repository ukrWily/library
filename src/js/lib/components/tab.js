import $ from "../core";

$.prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on("click", () => {
      $(this[i])
        .addClass("tab-item--active")
        .siblings()
        .removeClass("tab-item--active");
    });
  }
};

$("[data-panel .tab-item").tab();
