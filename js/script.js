$(document).ready(function(){
    $(".burger").click(function() {
        $(this).toggleClass("burger--act"),
        $(".menu").toggleClass("menu--act"),
        $(".zakaz").removeClass("zakaz--open")
        // $("html").removeClass("ov-h"),
        // $("body").removeClass("ov-h")
        // $(".startheader__logo").toggleClass("startheader__logo--white")
    });                   
    $(".zakaz-btn").click(function() {
        $(".zakaz").addClass("zakaz--open"),
        $(".menu").removeClass("menu--act"),
        $(".burger").removeClass("burger--act")
        // $(".startheader__logo").toggleClass("startheader__logo--white")
    });                  
    $(".zakaz__close").click(function() {
        $(".zakaz").removeClass("zakaz--open")   
        // $(".startheader__logo").toggleClass("startheader__logo--white")
    });        

    $(".nav__search").click(function(e) {
        e.preventDefault(),
        $(".search").addClass("search--act")
        // $("html").addClass("ov-h"),
        // $("body").addClass("ov-h"),
    });
    $(".search__close").click(function(e) {
        e.preventDefault(),
        $(".search").removeClass("search--act")
        // $("html").removeClass("ov-h"),
        // $("body").removeClass("ov-h")
           
    });            
    // jQuery(function($){
    //   $(".js--phone").mask("+7 (999) 999-99-99");
    // });

    $(".js--scroll-btn").bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1200);
        e.preventDefault();
        return false;    
    }); 

    // $('.js--slick-1').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   fade: true,
    //   draggable: false,
    //   // adaptiveHeight: true,
    //   // centerMode: true,
    //   asNavFor: '.js--slick-1-preview'
    // });

    // $('.js--slick-1-preview').slick({
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   asNavFor: '.js--slick-1',
    //   // dots: true,
    //   // centerMode: true,
    //   focusOnSelect: true,  
    //   arrows: false,
    //   // spaceBetween: 30 
    //     responsive: [
    //       {
    //         breakpoint: 470,
    //         settings: {
    //           slidesToShow: 3,
    //         }
    //       },
    //     ]     
    // });




});


 


  // $(document).ready(function(){
  //   $("#start").sticky({topSpacing:0});
  // });
 

   

// $('[aria-expanded="false"].navbar-toggler').click(
//   function(){
//     $(this).toggleClass('burger-open');
//   }
// ); 