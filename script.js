$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll 
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
         //scroll-up button show/hide 
    if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });

    $(".navbar .menu li a").click(function () {
      $("html").css("scrollBehavior", "smooth");
    });
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

// lightslider script

$(document).ready(function() {
  $("#lightSlider").lightSlider({
    item: 3,
    slideMove: 1,
    mode: "slide",
    cssEasing: 'ease',
    speed: 500, 
    auto: true,
    loop: true,
    pauseOnHover: true,
    responsive : [
      {
          breakpoint:800,
          settings: {
              item:2,
              slideMove:1,
              slideMargin:10,
              speed: 500, //ms'
              auto: true,
              loop: true,
              pauseOnHover: true
            }
      },
      {
          breakpoint:480,
          settings: {
              item:1,
              slideMove:1,
              slideMargin:10,
              speed: 500, //ms'
              auto: true,
              loop: true,
              pauseOnHover: true
            }
      }
  ]
  }); 
});

// typing text animation 
var typed = new Typed(".typing", {
    strings: ["TECHNICAL SUPPORT ENGINEER"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["TECHNICAL SUPPORT ENGINEER"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });


  document.getElementById('resume').addEventListener('click', (e) => {
    window.open("https://drive.google.com/file/d/1lhP33lVfvsjaS7fwCfsY7-BeyC8bdzbX/view?usp=sharing", "_blank");
  })
  document.getElementById('resume2').addEventListener('click', (e) => {
    window.open("https://drive.google.com/file/d/1lhP33lVfvsjaS7fwCfsY7-BeyC8bdzbX/view?usp=sharing", "_blank");
  })