import $ from "../core";

$.prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute("id");
    $(this[i]).click(() => {
      console.log($(".dropdown-menu"));
      $(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

/**
 * Щоб все зразу зароботоло, зразу ініціалізуємо
 */
$(".dropdown-toggle").dropdown();

/**
 * Example
 */
// <!-- Dropdown menu -->
// <div class="dropdown">
//     <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//     <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//         <a href="#" class="dropdown-item">Lorem ipsum dolor sit amet.</a>
//         <a href="#" class="dropdown-item">Lorem, ipsum dolor.</a>
//         <a href="#" class="dropdown-item">Lorem ipsum dolor sit.</a>
//     </div>
// </div>
