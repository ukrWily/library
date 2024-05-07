import $ from "../core";

$.prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on("click", () => {
      $(this[i])
        .addClass("tab-item--active") // Add class to target
        .siblings() // get sibling
        .removeClass("tab-item--active") // And remove of them class
        .closest(".tab") // get closest tab
        .find(".tab-content") // find tab-content into tab
        .removeClass("tab-content--active") //remove active class of all
        .eq($(this[i]).index()) // get active tab number of line
        .addClass("tab-content--active"); // And add class to active tab
    });
  }
};

$("[data-tabpanel] .tab-item").tab();
