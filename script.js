'use strict';

function DomElement(selector, height, width, bg, fontSize, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
  this.top = 0;
  this.left = 0;
}

DomElement.prototype.createElem = function () {
  let elem;

  if (this.selector[0] === '.') {
    elem = document.createElement('div');
    elem.classList.add(this.selector.slice(1));
  } else if (this.selector[0] === '#') {
    elem = document.createElement('p');
    elem.setAttribute('id', this.selector.slice(1));
  } else {
    elem = document.createElement('div');
  }

  this.styling(elem);
  this.writeText(elem);
  this.addElem(elem);
};

DomElement.prototype.styling = function (elem) {
  elem.style.cssText = `position: ${this.position}; height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
};

DomElement.prototype.writeText = function (elem) {
  elem.textContent = 'Lorem ipsum dolor sit amet!';
};

DomElement.prototype.addElem = function (elem) {
  document.body.prepend(elem);
};


let square = new DomElement('.square', '100px', '100px', '#ccc', '10px', 'absolute');

document.addEventListener('DOMContentLoaded', function () {
  square.createElem();
});

document.body.addEventListener('keydown', function (event) {
  let squareCopy = document.querySelector(square.selector);

  if (event.key === 'ArrowUp') {
    if (square.top - 10 > 0) {
      squareCopy.style.top = `${square.top-10}px`;
      square.top -= 10;
    }
    /*else {
      squareCopy.style.top = `0`;
      square.top = 0;
    }*/
  }

  if (event.key === 'ArrowDown') {
    if (square.top + 110 < window.innerHeight) {
      squareCopy.style.top = `${square.top+10}px`;
      square.top += 10;
    }
  }

  if (event.key === 'ArrowLeft') {
    if (square.left - 10 > 0) {
      squareCopy.style.left = `${square.left-10}px`;
      square.left -= 10;
    }
    /*else {
      squareCopy.style.left = `0`;
      square.left = 0;
    }*/
  }

  if (event.key === 'ArrowRight') {
    if (square.left + 110 < window.innerWidth) {
      squareCopy.style.left = `${square.left+10}px`;
      square.left += 10;
    }
  }
});
