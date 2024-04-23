import $ from "../core";

$.prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = "";
  }

  /**
   * Повертаємо об'єкт this щоб можно було запускати функціі по цепочці:
   * $('div').show().hide()...
   */
  return this;
};

$.prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = "none";
  }

  /**
   * Повертаємо об'єкт this щоб можно було запускати функціі по цепочці:
   * $('div').show().hide()...
   */
  return this;
};

$.prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === "none") {
      this[i].style.display = "";
    } else {
      this[i].style.display = "none";
    }
  }

  /**
   * Повертаємо об'єкт this щоб можно було запускати функціі по цепочці:
   * $('div').show().hide()...
   */
  return this;
};
