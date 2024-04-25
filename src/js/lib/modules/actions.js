import $ from "../core";
/**
 *
 * return(insert) textContent
 */
$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};

/**
 *
 * return obj with only obj[i] elem
 */
$.prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;
  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

/**
 * return index of elem in block
 */
$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = (item) => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
};

/**
 * return index of elem in block
 */
$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = (item) => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
};
