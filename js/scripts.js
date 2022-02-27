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

  $(".scroll_y").mCustomScrollbar({
    axis:"y"
  });

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

  $(".dropdown_content .list_2 li").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dropdown");
    parent.removeClass("active");
  });

  // --------------

  
  if( $(".thumb_3_slider").length > 0 ) {

    $('.thumb_3_slider').on('init', function(){
      activeSlideImgSrc = $(this).find(".slick-active img").attr("data-src");
      parent = $(this).closest(".thumb_3_wrapp");
      slickDots = parent.find(".slick-dots");
      parent.find(".thumb_3_sl_dots").append(slickDots);
      $(this).find(".slick-active img").attr("src", activeSlideImgSrc);
    });

    $('.thumb_3_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      activeSlideImgSrc = $(this).find(".slick-slide[data-slick-index = '"+nextSlide+"'] img").attr("data-src");
      $(this).find(".slick-slide[data-slick-index = '"+nextSlide+"'] img").attr("src", activeSlideImgSrc);
    });

    $(".thumb_3_slider").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: false,
        fade: true,
        autoplaySpeed: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

  }

  // --------------

  $(".date_thumbnail").bind({
    mouseenter: function() {
      mask = $(this).find(".date_thumbnail_mask");
      textWrapp = $(this).find(".date_thumbnail_text");
      textWrapp.slideDown(500);
    },
    mouseleave: function() {
      mask = $(this).find(".date_thumbnail_mask");
      textWrapp = $(this).find(".date_thumbnail_text");
      textWrapp.slideUp(500);
    }
  });

  // --------------

  $(".dropdown_item").each(function() {
      dr = $(this).find(".dropdown_item_content");
    if($(this).hasClass("active")) {
      dr.slideDown(300);
    } else {
      dr.css({"display" : "none"});
    }
  });

  $(".dropdown_item_title").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dropdown_item");
    dr = parent.find(".dropdown_item_content");
    if(dr.is(":hidden")) {
      dr.slideDown(300);
      parent.addClass("active");
    } else {
      dr.slideUp(300);
      parent.removeClass("active");
    }
  });

  // -------------

  if($('.rateit').length > 0) {
    $('.rateit').rateit({max: 5});
  }

  // -----------

 $(".count_box button").click(function(e) {
    e.preventDefault();
    parentBlock = $(this).closest(".count_box");
    countInput = parentBlock.find(".count_num input");
    countVal = countInput.val();
    if(countVal == "") {
        countVal = 1;
    }
    if( $(this).hasClass("minus_btn") && countVal > 1 ) {
        countVal--;
    } else if( $(this).hasClass("plus_btn")) {
        countVal++;
    }
    countInput.val(countVal);
  });

 // ------------

 $(".del_btn").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".basket_item_row");
    parent.remove();
 });

 // ------------

  $("[data-dropdown-link]").each(function() {
    dr = $("[data-dropdown = '"+$(this).attr("data-dropdown-link")+"']");
    if($(this).hasClass("active")) {
      dr.slideDown(300);
    } else {
      dr.css({"display" : "none"});
    }
  });

 $("[data-dropdown-link]").on("click", function(e) {
    e.preventDefault();
    dr = $("[data-dropdown = '"+$(this).attr("data-dropdown-link")+"']") ;
    if(dr.is(":hidden")) {
      dr.slideDown(300);
      $(this).addClass("active");
    } else {
      dr.slideUp(300);
      $(this).removeClass("active");
    }
 });

 // ------------

 $(".card_big_slider").not(".slick-initialized").slick({
    dots: false,
    arrows: false,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: $(".card_miniature_slider"),
    fade: true
  });

  $(".card_miniature_slider").not(".slick-initialized").slick({
      dots: false,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 4000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      asNavFor: $(".card_big_slider"),
      focusOnSelect: true,
      prevArrow: '<button class="slick-prev miniature_arrow miniature_prev" aria-label="Previous" type="button"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                  '<path d="M26.8513 15.2426H11.0448L18.3051 7.9822L16.4608 6.15088L6.07031 16.5414L16.4608 26.9319L18.2921 25.1005L11.0448 17.8402H26.8513V15.2426Z" fill="#E0E0E0"/>'+
                  '</svg></button>',
      nextArrow: '<button class="slick-next miniature_arrow miniature_next" aria-label="Next" type="button"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                  '<path d="M26.8513 15.2426H11.0448L18.3051 7.9822L16.4608 6.15088L6.07031 16.5414L16.4608 26.9319L18.2921 25.1005L11.0448 17.8402H26.8513V15.2426Z" fill="#E0E0E0"/>'+
                  '</svg></button>'
  });

  // ------------

  $(".tabs_wrapp").each(function() {
    parent = $(this);
    parent.find("label").removeClass("active");
    $(this).find("input").each(function() {
      if($(this).is(":checked")) {
        id = $(this).attr("id");
        parent.find("label[for='"+id+"']").addClass("active");
      }
    });
  });

  $(".tabs_link label").on("click", function() {
    parent = $(this).closest(".tabs_wrapp");
    parent.find("label").removeClass("active");
    $(this).addClass("active");
  });

  // ------------

    $(document).on("click", "[data-popup-link]",  function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      $("body").addClass("fixed");
      $("body").css({
          "position" : "fixed",
          "top" :  -$(document).scrollTop() + "px",
          "overflow" : "hidden",
          "right" : 0,
          "left" : 0,
          "bottom" : 0,
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(document).on("click", ".close_popup, .popup_bg", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").attr("style", "");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").removeClass("fixed");
      $(".popup_bg").fadeOut(300);
      $("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 && $("body").hasClass("fixed")) {
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
      }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // ---------

    $("[data-popup-link = 'gallery_popup']").on("click", function() {
      setTimeout(function() {
        $(".gallery_popup_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          autoplay: false,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          appendArrows: $(".gallery_popup_slider_arrow"),
          fade: true
        });
      },200);
    });

    // ----------

    if( $(".bonuce_slider").length > 0 ) {
      $(".bonuce_slider").not(".slick-initialized").slick({
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true
      });
    }

    // ----------

    if($("input.date").length > 0) {
      new AirDatepicker('input.date');
    }

    // ----------

    $(".good_thumb .del_btn_2").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".good_thumb");
      parent.remove();
    });

    $(".vish_list_item .del_btn_2").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".vish_list_item");
      parent.remove();
    });

    $(".city_form_input .reset_btn").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".city_form_input");
      parent.find(".search_input").val("");
    });

    // -----------

    if($("input.tel_input").length > 0) {
      var im = new Inputmask("+380 (99)-999-99-99");
      im.mask($("input.tel_input"));
    }

    $(document).on("click",".tel_mask_list li", function(e) {
      e.preventDefault();
      parent = $(this).closest(".tel_mask_list");
      maskName = parent.attr("data-tel-mask-list");
      maskTempl = $(this).attr("data-mask-templ");
      var im = new Inputmask(maskTempl);
      im.mask($("#"+maskName));
      dr = parent.closest(".dropdown");
      dr.removeClass("active");
    });

    // ----------

    $(document).on("propertychange input",".search_input",function() {
      var input, filter, ul, li, a, i;
      id = $(this).attr("id");
      input = document.getElementById(id);
      filter = input.value.toUpperCase();
      parent = $(this).closest(".search_dropdown_input");
      div = parent.find(".dropdown_search");
      a = div.find(".option");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    });

    $(".search_input").on('propertychange input', function (e) {
      parent = $(this).closest(".search_dropdown_input");
      parent.addClass("active");
    });

    $(".search_input").on('click', function (e) {
      $(".search_dropdown_input").removeClass("active");
      parent = $(this).closest(".search_dropdown_input");
      parent.addClass("active");
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".search_dropdown_input").removeClass("active");
      }
    });

    $(document).mouseup(function(e) {
      hide_element = $(".search_input");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          $(".search_dropdown_input").removeClass("active");
        }
    });

    $(".dropdown_search .option").on("click", function(e) {
      e.preventDefault();
      val = $(this).attr("data-val");
      parent = $(this).closest(".search_dropdown_input");
      input = parent.find(".search_input");
      input.val(val);
      $(this).closest(".dropdown").removeClass("active");
    });

    // -------------

    


});