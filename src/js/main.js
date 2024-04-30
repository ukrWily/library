import $ from "./lib/lib";

$("#first").on("click", () => {
  $("div").eq(0).fadeOut(800);
});
$('[data-count="second"]').on("click", () => {
  $("div").eq(1).fadeOut(800);
});
$("button")
  .eq(2)
  .on("click", () => {
    $(".w-500").fadeOut(800);
  });

// $("button").on("click", function () {
//   $(".wrapper>div").toggleClass("active");
// });

// $("button").on("click", function () {
//   $("div").eq(0).toggleClass("active");
// });

// $("div").click(function () {
//   console.log($(this).index());
// });

// $("button").on("click", function () {
//   $(".wrapper>div").toggleAttr("required");
// });

// console.log($(".some").closest(".findmeq"));
// console.log($(".more").eq(0).siblings());
// console.log($(".target").siblings());
// $(".target").fadeIn(1800);
