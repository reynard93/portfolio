$(document).ready(function() {
  $("#portfolio-button").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#portfolio-section").offset().top
      },
      1500
    );
  });
  const portImages = document.querySelectorAll(".loader img");

  const portContainer = document.querySelector("#portfolio-section");

  var is_mobile = false;

  if ($("#some-element").css("display") == "none") {
    is_mobile = true;
  }

  function debounce(func, wait = 20, immeditate = true) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immeditate) func.apply(context, args);
      };
      var callNow = immeditate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function checkSlide(e) {
    portImages.forEach(portImage => {
      const slideInAt = window.scrollY + window.innerHeight;
      var isShown;
      if (is_mobile == true) {
        isShown = slideInAt > portContainer.offsetTop - portImage.height * 10;
        console.log(portContainer.offsetTop - portImage.height * 8);
      } else {
        isShown = slideInAt > portContainer.offsetTop + portImage.height ;
      }
      if (isShown) {
        $(".loader").addClass("hidden");
      }
    });
  }

  window.addEventListener("scroll", debounce(checkSlide));

  $(".portfolio-card").on("click", function() {
    const url = $(this).data("url");
    window.open(url, "portfolioPage");
  });
});
