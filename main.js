$(document).ready(function () {
  $(window).scroll(function () {
    const navbarContainerObj = $(".container-navbar");

    navbarContainerObj.removeClass("shadow-sm");

    if ($(this).scrollTop() > navbarContainerObj.height()) {
      navbarContainerObj.addClass("shadow-sm");
    }
  });
});
