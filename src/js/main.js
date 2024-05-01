import $ from "./lib/lib";

$("#first").on("click", () => {
  $("div").eq(0).fadeOut(800);
});
$('[data-count="second"]').on("click", () => {
  $("div").eq(1).fadeToggle(800);
});
$("button")
  .eq(2)
  .on("click", () => {
    $(".w-500").fadeToggle(800);
  });

$(".wrap").html(`
  <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Lorem ipsum dolor sit amet.</a>
            <a href="#" class="dropdown-item">Lorem, ipsum dolor.</a>
            <a href="#" class="dropdown-item">Lorem ipsum dolor sit.</a>
        </div>
    </div>
`);

$(".dropdown-toggle").dropdown();

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
