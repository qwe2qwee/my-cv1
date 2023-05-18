"use strict";

var toggle = document.querySelector(".faq-toggle");
var active = document.querySelector(".active");
var faq = document.querySelectorAll(".faq");
ubd();
toggle.addEventListener("click", function () {
  faq.classList.toggle("active");
});

function ubd() {
  faq.classList.remove("active");
}