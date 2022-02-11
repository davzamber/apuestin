(function($){
  "user strict";

  $(document).on('ready',function() {
    // inline background image function call
    background();
    // Show or hide the sticky footer button
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 200) {
          $(".scroll-to-top").fadeIn(200);
      } else {
          $(".scroll-to-top").fadeOut(200);
      }
    });

    // Animate the scroll to top
    $(".scroll-to-top").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate({scrollTop: 0}, 300);
    });
  });

  // header search 
  $(".header-serch-btn").on('click', function(){
    if ($(this).hasClass('toggle-close')) {
        $(this).removeClass('toggle-close').addClass('toggle-open');
        $('.header-top-search-area').addClass('open');
    }
    else {
        $(this).removeClass('toggle-open').addClass('toggle-close');
        $('.header-top-search-area').removeClass('open');
    }
  });

  // close search area when click off of container
  $(document).on('click touchstart', function (e){
    if (!$(e.target).is('.header-serch-btn, .header-serch-btn *, .header-top-search-area, .header-top-search-area *')) {
      $('.header-top-search-area').removeClass('open');
      $('.header-serch-btn').addClass('toggle-close');
    }
  });

  // mobile menu js
  $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
    const element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
    }
    else {
      element.addClass("open");
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
    }
  });

  //js code for menu toggle
  $(".menu-toggle").on("click", function() {
      $(this).toggleClass("is-active");
  });
  
   // menu options custom affix
   var fixed_top = $(".header-section");
   $(window).on("scroll", function(){
       if( $(window).scrollTop() > 50){  
           fixed_top.addClass("animated fadeInDown menu-fixed");
       }
       else{
           fixed_top.removeClass("animated fadeInDown menu-fixed");
       }
   });

  // header-top 
  $('.header-top-open-btn').on('click', function(){
    $('.header-top').addClass('open');
  });

  $('.header-top .close-btn').on('click', function(){
    $('.header-top').removeClass('open');
  });

  // inline background image function
  function background() {
    var img =$('.bg_img');
    img.css('background-image', function () {
    var bg = ('url(' + $(this).data('background') + ')');
    return bg;
    });
  };

  // lightcase plugin init
  $('a[data-rel^=lightcase]').lightcase();

  $('.login-open-btn').on('click', function(){
    $('.login-section').addClass('active');
  });

  $('.login-close').on('click', function(){
    $('.login-section').addClass('duration');
    setTimeout(RemoveClass, 2000);
    setTimeout(RemoveClass2, 2000);
  });

  function RemoveClass() {
    $('.login-section').removeClass("active");
  }
  function RemoveClass2() {
    $('.login-section').removeClass("duration");
  }

  $('.signup-open-btn, .move-signup-btn').on('click', function(){
    $('.signup-section').addClass('active');
  });

  $('.signup-close, .switch-login-page-btn').on('click', function(){
    $('.signup-section').addClass('duration');
    setTimeout(signupRemoveClass, 2000);
    setTimeout(signupRemoveClass2, 2000);
  });

  function signupRemoveClass() {
    $('.signup-section').removeClass("active");
  }
  function signupRemoveClass2() {
    $('.signup-section').removeClass("duration");
  }

  $(".error-section").on('mousemove',function(e) {
    parallaxIt(e, ".el-1", -150);
    parallaxIt(e, ".el-2", -100);
    parallaxIt(e, ".el-3", -110);
    parallaxIt(e, ".el-4", -90);
    parallaxIt(e, ".el-5", -120);
    parallaxIt(e, ".el-6", -150);
    parallaxIt(e, ".el-7", -80);
  });
  
  function parallaxIt(e, target, movement) {
    var $this = $(".error-section");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
  
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }

   // wow js init
  new WOW().init();

  $('select').niceSelect();

  $('.post-share-btn').on('click', function(){
    $(this).siblings('.post-action-links').toggleClass('active')
  });

  $(document).on('click touchstart', function (e){
    if (!$(e.target).is('.post-share-btn')) {
      $('.post-action-links').removeClass('active');
    }
  });

  $('.post-share-btn').on('click', function(){
    $(this).siblings('.post-share-links').toggleClass('active')
  });

  $(document).on('click touchstart', function (e){
    if (!$(e.target).is('.post-share-btn')) {
      $('.post-share-links').removeClass('active');
    }
  });

  //testimonial slider
  $('.testimonial-slider').slick({
    centerMode: true,
    centerPadding: '575px',
    slidesToShow: 1,
    arrows: false,
    speed: 700,
    // autoplay: true,
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          centerPadding: '550px',
        }
      },
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '450px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '350px',
        }
      },
      {
        breakpoint: 992,
        settings: {
          // centerMode: false,
          centerPadding: '250px',
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 0,
        settings: {
          centerPadding: '15px',
        }
      }
    ]
  });

  $('.blog-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    prevArrow: $('.blog-nav .prev'),
    nextArrow: $('.blog-nav .next'),
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 0, 
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });

  $('.blog-slider-two').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 700,
    prevArrow: $('.blog-nav .prev'),
    nextArrow: $('.blog-nav .next'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.brand-slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 700,
    prevArrow: $('.brand-nav .prev'),
    nextArrow: $('.brand-nav .next'),
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.post-thumb-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.post-thumb-nav .prev'),
    nextArrow: $('.post-thumb-nav .next'),
  });
    

  $('#profitTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('#missionVissionTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('.bet-form-open-btn').on('click', function(){
    $(this).siblings().addClass('bet-form-open');
    $(this).addClass('active');
  });

  $('.bet-form-close-btn').on('click', function(){
    if($('.let-bet-form').hasClass('bet-form-open')){
      $('.let-bet-form').removeClass('bet-form-open');
      $('.bet-form-open-btn').removeClass('active');
    }
  });

  $('.user-panel-sidebar-btn').on('click', function(){
    $('.user-panel-sidebar').slideToggle();
  });


})(jQuery);
