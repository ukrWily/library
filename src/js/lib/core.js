const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; // т.е повертаємо пустий об'єкт- {}
  }
  /**
   * Якщо замість селектора приходить HTML елемент,
   * створюємо об'єкт вручну
   */
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;

  return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $; // робимо $ глобальним об'єктом

export default $;
