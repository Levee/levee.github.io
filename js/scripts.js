/*
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

const colors = [
  // main colors
  '#384cbd',
  '#6f42c1',
  '#e83e8c',
  '#dc3545',
  '#bd5d38',
  '#ffc107',
  '#28a745',
  '#20c997',
  '#17a2b8',
  '#343a40',
  // additional colors
  '#493731',
  '#7ab5e1',
];

function getColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

(function ($) {
  "use strict"; // Start of use strict

  $(':root').css('--primary', getColor());
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });
})(jQuery); // End of use strict

window.onscroll = function () { progress() };

function progress() {
  var scroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (scroll / height) * 85;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
