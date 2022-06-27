$(document).ready(function () {
  $(window).scroll(function () {
    // sticky nav on scroll script
    if (this.scrollY > 20) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  });
  // menu btn function
  $(".menu-bttn").click(function () {
    $(".nav .menu").toggleClass("active");
    $(".menu-bttn i").toggleClass("active");
  });
  // typing animation
  var typed = new Typed(".typing", {
    strings: ["Graphic designer", "Frontend developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
