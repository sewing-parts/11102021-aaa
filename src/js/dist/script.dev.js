"use strict";

// WRITE YOUR JS CODE HERE
var controls = document.querySelector(".controls");
var container = document.querySelector(".thumbnail-container");
var allBox = container.children;
var containerWidth = container.offsetWidth;
var margin = 30;
var items = 0;
var totalItems = 0;
var jumpSlideWidth = 0;
responsive = [{
  breakPoint: {
    width: 300,
    item: 1
  }
}, {
  breakPoint: {
    width: 600,
    item: 2
  }
}, {
  breakPoint: {
    width: 1000,
    item: 3
  }
}, {
  breakPoint: {
    width: 1300,
    item: 4
  }
}, {
  breakPoint: {
    width: 1600,
    item: 5
  }
}]; ////////////////////////

function load() {
  for (var i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakPoint.width) {
      items = responsive[i].breakPoint.item;
    }
  }

  start();
}

function start() {
  var totalItemWidth = 0;

  for (var i = 0; i < allBox.length; i++) {
    allBox[i].style.width = containerWidth / items - margin + "px";
    allBox[i].style.margin = margin / 2 + "px";
    totalItemWidth += containerWidth / items;
    totalItems++;
  }

  container.style.width = totalItemWidth + "px";
  var allSlides = Math.ceil(totalItems / items);
  var ul = document.createElement("ul");

  for (var _i = 1; _i <= allSlides; _i++) {
    var li = document.createElement("li");
    li.id = _i;
    li.innerHTML = _i;
    li.setAttribute("onclick", "controlSlides(this)"); // onclick = "location.reload(); return false;"

    ul.appendChild(li);

    if (_i == 1) {
      li.className = "active";
    }
  }

  controls.appendChild(ul);
}

function controlSlides(ele) {
  var ul = controls.children;
  var li = ul[0].children;
  var active;

  for (var i = 0; i < li.length; i++) {
    if (li[i].className == "active") {
      active = i;
      li[i].className = "";
    }
  }

  ele.className = "active";
  var numb = ele.id - 1 - active;
  jumpSlideWidth = jumpSlideWidth + containerWidth * numb;
  container.style.marginLeft = -jumpSlideWidth + "px";
}

window.onload = load(); /////////////////////////////////////////////////
/////////////////////////////////////////////////
// const divw = document.querySelector('div');
// divw.addEventListener('change', changeURLLanguage);
// function changeURLLanguage() {
//     // let lang = div.value;
//     location.href = window.location.pathname + "/" + "#";
// }
//////////////////////////////////////////////////
//////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////////

var langE1 = document.querySelector('.langWrap'); //////////////////////////////////////////////////////
///////////////////////////////////////////////////