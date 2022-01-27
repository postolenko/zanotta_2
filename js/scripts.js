function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getSubMenuParams() {
  if(bodyWidth > 1024) {
    $(".sub_menu_2").each(function() {
      parent = $(this).closest(".sub_menu");
      topCoord = $(this).offset().top -  parent.offset().top;
      $(this).css({
        "top" : -1 * topCoord + "px"
      });
    });
  }
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

});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getSubMenuParams();
  getWrapperParams();
  getAnimation();
});

$(document).scroll(function() {
  getWrapperParams();
  getAnimation();
});

$(document).ready(function() {

  getSubMenuParams();
  getWrapperParams();
  getAnimation();

  if( $(".promo_slider").length > 0 ) {
      $(".promo_slider").not(".slick-initialized").slick({
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
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
        speed: 1200,
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
        speed: 1200,
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
      parent.addClass("hoverHeight");
      height = $(this).children(".sub_menu_2").height();
      $(".sub_menu.hoverHeight").css({
        "min-height" : height + "px"
      });
      subMenu2 = $(this).children(".sub_menu_2");
      topCoord = subMenu2.offset().top -  parent.offset().top;
      subMenu2.css({
        "top" : -1 * topCoord + "px"
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
        "top" : 0
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

});