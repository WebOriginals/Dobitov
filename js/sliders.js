var click_timeout;
$(document).ready(function () {


    var sliderAbout = new Swiper('.screen-3__swiper-container', {
        // swiper-container
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 285, 
        // nextButton: '.screen-3__btn-next',
        // prevButton: '.screen-3__btn-prev',
        navigation: {
            nextEl: '.screen-3__btn-next',
            prevEl: '.screen-3__btn-prev',
        },
        // nextButton: '.screen-3__btn-next',
        // prevButton: '.screen-3__btn-prev',  
        loop: true,        
        // slideChangeTransitionStart: function (e) {

        // },
    });
    
    sliderAbout.on('slideChange', function () {
        // console.log('callback');
        // console.log(sliderAbout.activeIndex);
        $('.screen-3__links-wrap').each(function () {

            var modNum = $(this).find('.screen-3__link-gt').length;
            // var trueIndex = (sliderAbout.activeIndex - 1) % modNum ;
            var trueIndex = (sliderAbout.activeIndex) % modNum;
            $(this).find('.screen-3__link-gt').removeClass('screen-3__link-gt--active');
            // $(this).find('.screen-3__link-gt').eq(sliderAbout.activeIndex).addClass('screen-3__link-gt--active');
            $(this).find('.screen-3__link-gt').eq(trueIndex).addClass('screen-3__link-gt--active');
            // console.log("для меню присваиваем index =" + trueIndex);
        });
    });
    // console.log( sliderAbout );

    function swiper_to( index ) {
        sliderAbout.slideTo(index - 1);
        // console.log('index = ' + index);        
    }

    // $(window).on('resize', function () {
    //     swiperScroller.update();
    // });
    // $(window).on('load', function () {
    //     swiperScroller.update();
    // });
     
    $(".screen-3__link-gt").click(function () {
        $(".screen-3__link-gt").removeClass("screen-3__link-gt--active");
        $(this).addClass("screen-3__link-gt--active");
        var sAboutIndex = $(this).attr("data-goto-slide");
        swiper_to( sAboutIndex );
    });  

// 123
    // var swiperScroller = new Swiper('.swiper-scroller-1', {
    //   direction: 'vertical',
    //   slidesPerView: 'auto',
    //   freeMode: true,
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    //   mousewheel: true,
    // });

    // $(window).resize(function () {
    //     sliderAbout.update();
    //     // swiperScroller.update();
    // });
    // swiperScroller.update();
    

    $("ul.zakaz__tabs li").on('click', function () {
        clearTimeout(click_timeout);
        // console.log('клик');
        swiperScroller2.update();
        click_timeout = setTimeout(function () {
            swiperScroller2.update();
            // console.log('таймаут');            
        }, 200);
    });
   
    
    /*
    $(".nav-link").on('click',
        function(){
            $(".nav-link").unbind('click');
            clearTimeout(click_timeout);
            console.log('клик');
            swiperScroller2.update();
            click_timeout = setTimeout(function () {
                swiperScroller2.update();
                console.log('таймаут');
            }, 200 );
        }
    ); */         
});

//function swiper_to(index) {
    //sliderAbout.slideTo(index - 1);
    //console.log('index = ' + index);
//}
    var swiperScroller = new Swiper('.swiper-scroller-1', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });

    var swiperScroller2 = new Swiper('.swiper-scroller-2', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });


    // $(window).resize(function () {
    //     swiperScroller.update();
    // });
    $(window).on('resize', function () {
        swiperScroller.update();
        swiperScroller2.update();
    });
    $(window).on('load',function () {
        swiperScroller.update();
        swiperScroller2.update();
    });   

