jQuery(document).ready(function ($) {
  var leaderHeight = $("#mvp-leader-wrap").outerHeight();
  var logoHeight = $("#mvp-main-nav-top").outerHeight();
  var botHeight = $("#mvp-main-nav-bot").outerHeight();
  var navHeight = $("#mvp-main-head-wrap").outerHeight();
  var headerHeight = navHeight + leaderHeight;
  var aboveNav = leaderHeight + logoHeight;
  var totalHeight = logoHeight + botHeight;
  var previousScroll = 0;
  $(window).scroll(function (event) {
    var scroll = $(this).scrollTop();
    if (typeof leaderHeight !== "undefined") {
      if ($(window).scrollTop() > aboveNav) {
        $("#mvp-main-nav-top").addClass("mvp-nav-small");
        $("#mvp-main-nav-bot").css("margin-top", logoHeight);
      } else {
        $("#mvp-main-nav-top").removeClass("mvp-nav-small");
        $("#mvp-main-nav-bot").css("margin-top", "0");
      }
      if ($(window).scrollTop() > headerHeight) {
        $("#mvp-main-nav-top").addClass("mvp-fixed");
        $("#mvp-main-nav-bot").addClass("mvp-fixed1");
        $("#mvp-main-body-wrap").css("margin-top", totalHeight);
        $("#mvp-main-nav-top").addClass("mvp-fixed-shadow");
        $(".mvp-fly-top").addClass("mvp-to-top");
        if (scroll < previousScroll) {
          $("#mvp-main-nav-bot").addClass("mvp-fixed2");
          $("#mvp-main-nav-top").removeClass("mvp-fixed-shadow");
        } else {
          $("#mvp-main-nav-bot").removeClass("mvp-fixed2");
          $("#mvp-main-nav-top").addClass("mvp-fixed-shadow");
        }
      } else {
        $("#mvp-main-nav-top").removeClass("mvp-fixed");
        $("#mvp-main-nav-bot").removeClass("mvp-fixed1");
        $("#mvp-main-nav-bot").removeClass("mvp-fixed2");
        $("#mvp-main-body-wrap").css("margin-top", "0");
        $("#mvp-main-nav-top").removeClass("mvp-fixed-shadow");
        $(".mvp-fly-top").removeClass("mvp-to-top");
      }
    } else {
      if ($(window).scrollTop() > logoHeight) {
        $("#mvp-main-nav-top").addClass("mvp-nav-small");
        $("#mvp-main-nav-bot").css("margin-top", logoHeight);
      } else {
        $("#mvp-main-nav-top").removeClass("mvp-nav-small");
        $("#mvp-main-nav-bot").css("margin-top", "0");
      }
      if ($(window).scrollTop() > navHeight) {
        $("#mvp-main-nav-top").addClass("mvp-fixed");
        $("#mvp-main-nav-bot").addClass("mvp-fixed1");
        $("#mvp-main-body-wrap").css("margin-top", totalHeight);
        $("#mvp-main-nav-top").addClass("mvp-fixed-shadow");
        $(".mvp-fly-top").addClass("mvp-to-top");
        if (scroll < previousScroll) {
          $("#mvp-main-nav-bot").addClass("mvp-fixed2");
          $("#mvp-main-nav-top").removeClass("mvp-fixed-shadow");
        } else {
          $("#mvp-main-nav-bot").removeClass("mvp-fixed2");
          $("#mvp-main-nav-top").addClass("mvp-fixed-shadow");
        }
      } else {
        $("#mvp-main-nav-top").removeClass("mvp-fixed");
        $("#mvp-main-nav-bot").removeClass("mvp-fixed1");
        $("#mvp-main-nav-bot").removeClass("mvp-fixed2");
        $("#mvp-main-body-wrap").css("margin-top", "0");
        $("#mvp-main-nav-top").removeClass("mvp-fixed-shadow");
        $(".mvp-fly-top").removeClass("mvp-to-top");
      }
    }
    previousScroll = scroll;
  });

  $(".mvp-alp-side-in").niceScroll({
    cursorcolor: "#ccc",
    cursorwidth: 5,
    cursorborder: 0,
    zindex: 999999,
  });
});

jQuery(document).ready(function ($) {
  // Mobile Social Buttons More
  $(".mvp-soc-mob-right").on("click", function () {
    $("#mvp-soc-mob-wrap").toggleClass("mvp-soc-mob-more");
  });
});

jQuery(document).ready(function ($) {
  // Continue Reading Button
  $(".mvp-cont-read-but").on("click", function () {
    $("#mvp-content-body-top").css("max-height", "none");
    $("#mvp-content-body-top").css("overflow", "visible");
    $(".mvp-cont-read-but-wrap").hide();
  });
});

jQuery(document).ready(function ($) {
  var leaderHeight = $("#mvp-leader-wrap").outerHeight();
  $("#mvp-site-main").css("margin-top", leaderHeight);

  $(window).resize(function () {
    var leaderHeight = $("#mvp-leader-wrap").outerHeight();
    $("#mvp-site-main").css("margin-top", leaderHeight);
  });
});

jQuery(document).ready(function ($) {
  $(".menu-item-has-children a").click(function (event) {
    event.stopPropagation();
  });

  $(".menu-item-has-children").click(function () {
    $(this).addClass("toggled");
    if ($(".menu-item-has-children").hasClass("toggled")) {
      $(this).children("ul").toggle();
      $(".mvp-fly-nav-menu").getNiceScroll().resize();
    }
    $(this).toggleClass("tog-minus");
    return false;
  });

  // Main Menu Scroll
  $(".mvp-fly-nav-menu").niceScroll({
    cursorcolor: "#888",
    cursorwidth: 7,
    cursorborder: 0,
    zindex: 999999,
  });
});

jQuery(document).ready(function ($) {
  $(".infinite-content").infinitescroll({
    navSelector: ".mvp-nav-links",
    nextSelector: ".mvp-nav-links a:first",
    itemSelector: ".infinite-post",
    errorCallback: function () {
      $(".mvp-inf-more-but").css("display", "none");
    },
  });
  $(window).unbind(".infscr");
  $(".mvp-inf-more-but").click(function () {
    $(".infinite-content").infinitescroll("retrieve");
    return false;
  });
  if ($(".mvp-nav-links a").length) {
    $(".mvp-inf-more-but").css("display", "inline-block");
  } else {
    $(".mvp-inf-more-but").css("display", "none");
  }
});

// create a Element
const divElement = document.createElement("div");
$(function () {
  var stickyHeaderTop = $("#stickytypeheader").offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > stickyHeaderTop) {
      $("#stickytypeheader").css({ position: "fixed", top: "0px" });
      $("#sticky").css("display", "block");
    } else {
      $("#stickytypeheader").css({ position: "static", top: "0px" });
      $("#sticky").css("display", "none");
    }
  });
});
