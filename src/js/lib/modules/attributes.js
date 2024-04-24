import $ from "../core";

$.prototype.addAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attrName);
  }

  return this;
};

$.prototype.removeAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attrName);
  }

  return this;
};

$.prototype.toggleAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    this[i].toggleAttribute(attrName);
  }

  return this;
};
