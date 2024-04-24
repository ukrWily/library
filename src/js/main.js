import $ from "./lib/lib";

$("button").on("click", function () {
  $(".wrapper>div").toggleClass("active");
});

$("button").on("click", function () {
  $(".wrapper>div").toggleAttr("required");
});
