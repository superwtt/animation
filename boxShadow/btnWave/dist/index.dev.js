"use strict";

var $button = document.getElementById("button");
var debounce = false;
$button.addEventListener("click", function () {
  if (debounce) return;
  debounce = true;
  buttonAnimate();
  createWave();
});

var buttonAnimate = function buttonAnimate() {
  $button.classList.add("clicked");
  setTimeout(function () {
    $button.classList.remove("clicked");
    debounce = false;
  }, 700);
};

var createWave = function createWave() {
  var wave = document.createElement("div");
  wave.classList.add("wave");
  document.body.appendChild(wave);
  setTimeout(function () {
    return wave.remove();
  }, 7000);
};