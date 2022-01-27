function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getWRapperParams() {
  $(".wrapper").css({
    "padding-top" : $("#headerSite").height() + "px"
  });
}

function getWrapperParams() {
  if($(document).scrollTop() > $("#headerSite").height()) {
    $("#headerSite").addClass("scroll");
  } else {
    $("#headerSite").removeClass("scroll");
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {
  getAnimation();
});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getWrapperParams();
  getAnimation();
  if(bodyWidth >= 1024) {
    $(".sub_menu_list > li").removeClass("active");
  }
});

$(document).scroll(function() {
  getWrapperParams();
  getAnimation();
});

$(document).ready(function() {
  getWrapperParams();

  if( $(".promo_slider").length > 0 ) {
      $(".promo_slider").not(".slick-initialized").slick({
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 5000,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true
      });
  }

  if( $(".slider_2").length > 0 ) {
    $(".slider_2").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 5,
        variableWidth: true
    });
  }

  if( $(".slider_3").length > 0 ) {
    $(".slider_3").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
  }

  $(".main_nav li").mouseover(function() {
    if(bodyWidth > 1024) {
      subMenu = $(this).children(".sub_menu");
      maxLeftCoord = $(this).offset().left + subMenu.width();
      if(maxLeftCoord >= bodyWidth - 30) {
        subMenu.addClass("rightPosition");
      }
    }
  });

  $(".main_nav li").mouseleave(function() {
    if(bodyWidth > 1024) {
      subMenu = $(this).children(".sub_menu");
      subMenu.removeClass("rightPosition");
    }
  });

  $(".sub_menu_list > li").mouseover(function() {
    if(bodyWidth > 1024) {
      parent = $(this).closest(".sub_menu");
      subMenu2 = $(this).children(".sub_menu_2");
      if(!parent.hasClass("hoverHeight")) {
        topCoord = subMenu2.offset().top -  parent.offset().top;
        subMenu2.css({
          "top" : -1 * topCoord + "px",
          "min-height" : parent.height() + "px"
        });
      }
      parent.addClass("hoverHeight");
      height = $(this).children(".sub_menu_2").height();
      $(".sub_menu.hoverHeight").css({
        "min-height" : height + "px"
      });
    }
  });

  $(".sub_menu_list > li").mouseleave(function() {
    if(bodyWidth > 1024) {
      parent = $(this).closest(".sub_menu");
      $(".sub_menu.hoverHeight").css({
        "min-height" : "auto"
      });
      parent.removeClass("hoverHeight");
      parent.removeClass("rightPosition");
      subMenu2 = $(this).children(".sub_menu_2");
      topCoord = subMenu2.offset().top -  parent.offset().top;
      $(".sub_menu_2").css({
        "top" : 0,
        "min-height" : "auto"
      });
    }
  });

  // -----------------

  $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
  });
  
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth <= 1024) {
          $("#resp_nav").fadeOut(300);
          $(".respmenubtn").removeClass("active");
      }
  });

  $(".close_menu").click(function(e) {
    e.preventDefault();
    $("#resp_nav").fadeOut(300);
    $(".respmenubtn").removeClass("active");
  });

  // ----------------

  $(".sub_right_arrow").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest("li");
    subMenu = parent.children(".sbm");
    if(subMenu.is(":hidden")) {
      subMenu.slideDown(300);
      $(this).addClass("active");
      parent.addClass("active");
    } else {
      subMenu.slideUp(300);
      $(this).removeClass("active");
      parent.removeClass("active");
    }
  });

  // ----------------

  $(".dropdown_title").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dropdown");
    if(!parent.hasClass("active")) {
      if(parent.closest(".dropdown.active").length == 0) {
        $(".dropdown").removeClass("active");
      }
      parent.addClass("active");
    } else {
      parent.removeClass("active");
    }
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27) {
      $(".dropdown").removeClass("active");
    }
  });

  $(document).mouseup(function(e) {
    hide_element = $(".dropdown");
    if (!hide_element.is(e.target)
        && hide_element.has(e.target).length === 0) {
        hide_element.removeClass("active");
      }
  });

});