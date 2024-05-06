import $ from "../core";

$.prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on("click", () => {});
  }
};

$("[data-panel .tab-item").tab();
