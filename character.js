//voices
var audio;

$(document).ready(function(){
  // マウスオーバー
  $(document).on('mouseover', '.rollover', function(){
    $(this).attr("src",$(this).attr("src").replace("_off.", "_on."));
  });

  $(document).on('mouseout', '.rollover', function(){
    $(this).attr("src",$(this).attr("src").replace("_on.", "_off."));
  });

  $(document).on('mouseover', '.bg_rollover', function(){
    $(this).css("background-image",$(this).css("backgroundImage").replace("_off.", "_on."));
  });

  $(document).on('mouseout', '.bg_rollover', function(){
    $(this).css("background-image",$(this).css("backgroundImage").replace("_on.", "_off."));
  });

  $(document).on('mouseover', '.ro', function(){
    $(this).find('img').attr("src",$(this).find('img').attr("src").replace("_off.", "_on."));
  });

  $(document).on('mouseout', '.ro', function(){
    $(this).find('img').attr("src",$(this).find('img').attr("src").replace("_on.", "_off."));
  });

  $(document).on('mouseover', '.rollover-wp', function(){
    $(".off",this).addClass("hide");
    $(".on",this).removeClass("hide");
  });
  $(document).on('mouseout', '.rollover-wp', function(){
    $(".off",this).removeClass("hide");
    $(".on",this).addClass("hide");
  });
  // スクロール
  $(document).on('click', 'a.scroll', function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  // totop
  $(".totop").on('mouseover', '.rollover2', function(){
    $(this).delay(500).queue(function(next) {
      $(this).attr("src",$(this).attr("src").replace("_off.", "_on."));
      $(".totop").addClass("hov");
      next();
    });
  });
  $(".totop").on('mouseout', '.rollover2', function(){
    $(this).attr("src",$(this).attr("src").replace("_on.", "_off."));
    $(".totop").removeClass("hov");
  });

  $(".to-top").on('click', function() {
    $(".to-top").addClass("selected");
    $('body,html').delay(500).animate({scrollTop:0}, 400, 'swing');
    $(this).delay(1000).queue(function(next) {
      $(".to-top").removeClass("selected");
      next();
    });
    return false;
  });

  // header-sub-nav
  $(".nav-special a , .sub-nav").on('mouseover', function() {
    if($("body#page-home").length > 0){
      if($(".header2:visible").length){
        $('.header-nav .sub-nav').stop().fadeIn('fast');
      }else{
        $('.kv-nav .sub-nav').stop().fadeIn('fast');
      }
    }else{
      $('.sub-nav').stop().fadeIn('fast');
    }
  });
  $(".nav-special a , .sub-nav").on('mouseout', function() {
    $('.sub-nav').stop().fadeOut('fast');
  });

  $(window).on("scroll", function(){
    if($("body#page-home").length > 0){
      $("#site-header .header2").css("left", -$(window).scrollLeft());
    }else{
      $("#site-header").css("left", -$(window).scrollLeft());
    }
  });


  //pageごとの scrpit
  if($("body#page-home").length > 0){
    customScrollbar('#twitter-widget-holder','iframe');
    customScrollbar('.content,.scroll-wrap');

    var y;
    $(".movie.openmodal a").colorbox({
      iframe: true,
      transition: "none",
      width: "960px",
      height: "540px",
      fixed: true,
      overlayClose: false,
      onOpen: function(){
        $('#colorbox').addClass("modal-movie");
        y = $(window).scrollTop();
        // Stop master scroll
        $('body').addClass('fixed').css({
          'top' : y * -1
        });
      },
      onCleanup: function(){
        $('#colorbox').addClass("modal-movie");
        //revive master scroll
        $('body').removeClass('fixed').css('top','auto');
        $('body,html').stop().animate({scrollTop:y}, 1);
      },
    });
    $(".kv-banner .modal a, .lower-banner .modal a").colorbox({
      transition: "fade",
      width: "788px",
      height: "492px",
      inline: true,
      scrolling: false,
      fixed: true,
      overlayClose: false,
      onOpen: function(){
        y = $(window).scrollTop();
        // Stop master scroll
        $('body').addClass('fixed').css({
          'top' : y * -1
        });
      },
      onCleanup: function(){
        //revive master scroll
        $('body').removeClass('fixed').css('top','auto');
        $('body,html').stop().animate({scrollTop:y}, 1);
      },
    });
    $('.char-list').not('.slick-initialized').slick({
      draggable: true,
      arrows: true,
      dots: false,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });
    $(window).on("resize",function(){
      var currentSlick = $('.char-list').slick("slickCurrentSlide");
      $('.char-list').slick("unslick");
      $('.char-list').slick({
        draggable: true,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        centerMode: true,
        initialSlide: currentSlick,
        variableWidth: true
      });

    });
    //ready
    //wait loading kv images
    $('.kv-area').imagesLoaded( function() {
      $(".loading-content").animate({"opacity":0},{duration:500});
      $(".site-wrapper").addClass("loaded");
      $(".loading-content").addClass("loaded");
      fixKv();
      $(window).on("load resize",function(){
        fixKv();
      });
    });

    function fixKv(where){
      var zoom = $(".kv-area").width() / 1100;
      $(".kv").css({
        transform:"scale("+zoom+")"
      });
      $(".kv-lower").css({
        paddingTop: 810 * (zoom)
      });

      $(".kv-area").addClass("shown");
      $("#site-header ul.dl").addClass("shown");
      $("#site-header .right .logos").addClass("shown");

      //opning anmation
    }
    $(window).on('scroll',function(){
      if($(window).scrollTop() -66 > $(".kv-nav").offset().top && $('.header2:visible').length == 0){
        $('.header2').fadeIn(300);
      }else if($(window).scrollTop() -66 <= $(".kv-nav").offset().top){
        $('.header2').fadeOut(300);
      }
    });
  }

  if($("body#page-story").length > 0){
    $(".title").addClass("shown");
    $(".main-text").delay(500).queue(function(next) {
      $(this).addClass("shown");
      next();
      $(".char-img").delay(500).queue(function(next) {
        $(this).addClass("shown");
        next();
        $(".subtitle").delay(500).queue(function(next) {
          $(this).addClass("shown");
          next();
          $(".chars").delay(500).queue(function(next) {
            $(this).addClass("shown");
            next();
          });
        });
      });
    });
  }

  if($("body#page-fankit").length > 0){
    customScrollbar('.terms');
  }

  if($("body#page-movie").length > 0){
    var y;
    $(".main-list li a").colorbox({
      iframe: true,
      transition: "none",
      width: "960px",
      height: "540px",
      fixed: true,
      overlayClose: false,
      onOpen: function(){
        $('#colorbox').addClass("modal-movie");
        y = $(window).scrollTop();
        // Stop master scroll
        $('body').addClass('fixed').css({
          'top' : y * -1
        });
      },
      onCleanup: function(){
        $('#colorbox').addClass("modal-movie");
        //revive master scroll
        $('body').removeClass('fixed').css('top','auto');
        $('body,html').stop().animate({scrollTop:y}, 1);
      },
    });


    $(".main-list li:first-child").addClass("show");
    $(".thumb-list li a").on("click",function () {
      var showClass = $(this).attr("data-category");
      $(".thumb-list li a").removeClass("selected");
      $(this).addClass("selected");
      $(".main-list li").each(function () {
        $(this).animate({
          "opacity": 0
        }, 300, function () {
          $(this).removeClass("show");

          if ($(this).hasClass(showClass)) {
            $(this).addClass("show");
            $(this).animate({
                "opacity": 1
            }, 300);
          }
        });
      });
    });
    $('.thumb-list').not('.slick-initialized').slick({
      draggable: false,
      arrows: true,
      dots: false,
      slidesToShow: 4,
    });
  }


  if($("body#page-news-index").length > 0){
    //more button
    $(document).on("click",".btn-news-more > a",function(){
      var link = $(this).attr("data-url");
      $.ajax({
        url: link,
        cache: false,
        success: function(html){
          $(html).find(".news-list > li").each(function(){
            if($(".news-list > li[data-post-id="+$(this).attr("data-post-id")+"]").length < 1){
              $(".news-list").append($(this).css("opacity",0));
            }
          });
          $(".btn-news-more").remove();
          if($(html).find(".btn-news-more").length > 0){
            $(".news-list").after($(html).find(".btn-news-more"));
          }
          $(".news-list > li").animate({opacity:1},500);
        }
      });
    });

  }

  if($("body#page-character-detail").length > 0){

    //voice
    $(document).on("click",".voice a.play",function(){
      if(audio){
        audio.pause();
        audio = null;
        $(".voice a.stop").addClass("play").removeClass("stop");
      }

      var audioFile= $(this).attr("data-voicefile");

      audio = new Audio(audioFile);
      audio.play();
      $(audio).on("playing",function(){
        $(".voice a.play").addClass("stop").removeClass("play");
      });
      $(audio).on("ended",function(){
        if(audio){
          audio.pause();
          audio = null;
        }
        $(".voice a.stop").addClass("play").removeClass("stop");
      });

    });

    //STOP
    $(document).on("click",".voice a.stop",function(){
      if(audio){
        audio.pause();
        audio = null;
      }
        $(".voice a.stop").addClass("play").removeClass("stop");
    });

  }

  //gamesystem
  if($("body#page-gamesystem").length > 0){
    $(document).on('click', '.gamesystem-list li dl dt a:not(.opened)', function() {
      var parentDD = $('.gamesystem-list li dl dd');
      var parentDT = $('.gamesystem-list li dl dt a');

      $(parentDT).removeClass('opened');
      $(parentDD).stop().slideUp('easeInOutSine');
      $(this).addClass('opened');
      $(this).parent('dt').next('dd').slideDown('easeInOutSine');
    });

    $(document).on('click', '.gamesystem-list li dl dt a.opened', function() {
      $(this).removeClass('opened');
      $(this).parent('dt').next('dd').slideUp('easeInOutSine');
    });

  }



  //contact contact
  if($("body#page-contact").length > 0){

    $("#btn-send,#btn-confirm").on("click",function(){
      $('#contact-form').submit();
    });
    $("#btn-back").on("click",function(){
      $("input[name=backsubmit]").val(1);
      $('#contact-form').submit();
    });
  }

  //faq
  if($("body#page-faq").length > 0){
    $(document).on('click', '.tab ul li a:not(.active)', function() {
      var target = $(this).attr('rel');

      $('.faq-list.active').removeClass('active');
      $(target).addClass('active');
      $('.tab ul li a.active').removeClass('active');
      $(this).addClass('active');
    });


    $(document).on('click', '.faq li dl dt a:not(.opened)', function() {
      var parentDD = $('.faq li dl dd');
      var parentDT = $('.faq li dl dt a');

      $(parentDT).removeClass('opened');
      $(parentDD).stop().slideUp('easeInOutSine');
      $(this).addClass('opened');
      $(this).parent('dt').next('dd').slideDown('easeInOutSine');
    });

    $(document).on('click', '.faq li dl dt a.opened', function() {
      $(this).removeClass('opened');
      $(this).parent('dt').next('dd').slideUp('easeInOutSine');
    });

    $(document).on('click', '.search a', function() {
      search($('.search input'));
    });
  }

  //contact-complete contact
  if($("body#page-complete").length > 0){

  }

  if($("body#page-demo").length > 0){

    var ua = navigator.userAgent;
    var not_support_redirect = false;
    if(ua.indexOf('Firefox') > 0){
      //FF ok
    }else if(ua.indexOf('Chrome') > 0){
      //Chrome ok
      //But Edge is not
      if(ua.indexOf('Edge') > 0){
        not_support_redirect = true;
      }

    }else{
      //not supported
      not_support_redirect = true;
    }

    if(not_support_redirect){
      $(".demo-wrap").hide();
      $(".not-supported").show();
      setTimeout(function(){
        location.href = "/";
      },5000);
    }

    //changeDemoDesign();

    $(".selector li a").on("click",function(){
      $(".demo-wrap").removeClass("big mid small");
      $(".demo-wrap").addClass($(this).data("size"));
      $(".selector li").removeClass("active");
      $(this).parent("li").addClass("active");
    });
  }


});

function d(){
  $(".debug-sheet").toggle();
}

function b(){
  $("body").toggleClass("display-boxline");
}
// カスタムスクロールバー
function customScrollbar(elm, iframe) {
  if (iframe === undefined) {
    iframe = false;
  }
  if(iframe) {

    $(elm).mCustomScrollbar({
      theme: "light-3",
      scrollButtons: {enable: false},
      scrollInertia: 0,
      mouseWheelPixels: 50,
    })
    .on('mouseenter', function() {
      $(this).find('iframe').css('pointer-events', 'none');
    })
    .on('mouseup', function() {
      if(!$(this).find('.mCSB_scrollTools_onDrag').length) return;
      setTimeout(function() {
        $(elm).trigger('mouseenter');
      }, 1);
    });

    $(window).on('blur', function() {
      $(elm + ' iframe').css('pointer-events', 'auto');
    })
    .on('focus', function() {
      $(elm).trigger('mouseenter');
    });


  } else {

    $(elm).mCustomScrollbar({
      theme:"light-3",
      scrollButtons:{enable: false},
      scrollInertia: 0,
      mouseWheelPixels: "auto",
    });

  }
}

function search($input) {
  var key = $input.val();
  var hitCount = 0;
  $(".search-hit").removeClass("search-hit");
  $(".no-result").removeClass("active");

  key = key.replace(/　/g,' ').trim();

  if(key != "") {
    var keys = key.split(" ");
    keys = $.grep(keys, function(e) {
      return e != "";
    });

    $("nav.tab").addClass("search");

    $(".faq li").each(function() {
      if(searchByKeys(keys, this)){
        $(this).addClass("search-hit");
        hitCount++;
        var result = $('.faq li.search-hit').length;
        $('.result-count').text(result);
      }else{
        $(this).removeClass("search-hit");
      }
    });

    $(".faq-list").each(function(){
      if($(this).find(".search-hit").length > 0){
        $(this).addClass("search");
      }
    });


    // 検索キーワード該当なし
    if (hitCount == 0) {
      searchInitialDisplay();
      $(".no-result").html("「キーワード：" + keys.join(", ") + "」を含む質問は見つかりませんでした").addClass('active');
      $('.result-count').text('0');
      $(".result").removeClass('active');
    } else {
      $(".no-restult").removeClass('active');
      $(".result").addClass('active');
    }

  } else {
    searchInitialDisplay();
  }

}

// keysの分ループし、QとAの中でval（key）があるか照合し、なければfalseを返す
function searchByKeys(keys, liObj) {
  var res = true;

  $.each(keys, function(i, val) {
    if(
      $(liObj).find("dl").text().indexOf(val) == -1) {
      res = false;
    }
  });

  return res;
}

function searchInitialDisplay() {
  $(".tab").removeClass("search");
  $(".faq-list").removeClass("search");
  $(".no-restult").removeClass('active');
  $(".result").removeClass('active');

  $(".faq li").each(function() {
    $(this).removeClass("search-active");
  });
}

function changeTwitterWidgetDesign(){
  var $twitter_widget = $('iframe.twitter-timeline');
  var $twitter_widget_contents = $twitter_widget.contents();

  if ($twitter_widget.length > 0 && $twitter_widget[0].contentWindow.document.body.innerHTML !== ""){
    $twitter_widget_contents.find('head').append('<link href="/assets/css/common.css?'+release_number+'" rel="stylesheet" type="text/css">');
  }
  else {
    setTimeout(function(){
      changeTwitterWidgetDesign();
    }, 350);
  }
}

function changeDemoDesign(){
  var $demo = $('.demo-wrap > iframe');
  var $demo_contents = $demo.contents();

  if ($demo.length > 0 && $demo[0].contentWindow.document.body.innerHTML !== ""){
    $demo_contents.find('head').append('<link href="/assets/css/demo_override.css?'+release_number+'" rel="stylesheet" type="text/css">');
  }
  else {
    setTimeout(function(){
      changeDemoDesign();
    }, 350);
  }
}
