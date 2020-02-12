'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElem = function () {
  let elem;

  if (this.selector[0] === '.') {
    elem = document.createElement('div');
    elem.classList.add(this.selector.slice(1));
  }

  if (this.selector[0] === '#') {
    elem = document.createElement('p');
    elem.createAttribute(this.selector.slice(1));
  }

  return elem;
};

let div = new DomElement('.block', 185, 103, '#ccc');

console.log(div.createElem());
