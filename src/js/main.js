import $ from "./lib/lib";

// $("button").on("click", function () {
//   $(".wrapper>div").toggleClass("active");
// });

// $("button").on("click", function () {
//   $("div").eq(0).toggleClass("active");
// });

$("div").click(function () {
  console.log($(this).index());
});

// $("button").on("click", function () {
//   $(".wrapper>div").toggleAttr("required");
// });

// console.log($("button").html());
