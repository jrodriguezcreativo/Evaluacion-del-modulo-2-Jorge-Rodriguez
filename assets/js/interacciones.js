//jQuery
$(document).ready(function () {
  $(".ver-mas-btn").click(function () {
    const extraInfo = $(this).siblings(".extra-info");
    const estaVisible = extraInfo.is(":visible");

    extraInfo.slideToggle();
    $(this).text(estaVisible ? "Ver más" : "Ocultar");
  });
});
