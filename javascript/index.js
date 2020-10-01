// var bg = document.querySelector('.item-bg');
// var items = document.querySelectorAll('.projects__item');
// var item = document.querySelector('.projects__item');

// function cLog(content) {
//     console.log(content)
// }

// if ($(window).width() > 800) {
//     $(document).on("mouseover", ".projects__item", function (_event, _element) {

//         var projectsItem = document.querySelectorAll('.projects__item');
//         projectsItem.forEach(function (element, index) {
//             element.addEventListener('mouseover', function () {
//                 var x = this.getBoundingClientRect().left;
//                 var y = this.getBoundingClientRect().top;
//                 var width = this.getBoundingClientRect().width;
//                 var height = this.getBoundingClientRect().height;

//                 $('.item-bg').addClass('active');
//                 $('.projects__item').removeClass('active');
//                 // $('.projects__item').removeClass('active');


//                 bg.style.width = width + 'px';
//                 bg.style.height = height + 'px';
//                 bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
//             });

//             element.addEventListener('mouseleave', function () {
//                 $('.item-bg').removeClass('active');
//                 $('.projects__item').removeClass('active');
//             });


//         });

//     });
// }


// var swiper = new Swiper('.projects-slider', {
//     effect: 'coverflow',
//     grabCursor: true,
//     loop: false,
//     centeredSlides: true,
//     keyboard: true,
//     spaceBetween: 10,
//     slidesPerView: 'auto',
//     speed: 300,
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 0,
//         modifier: 3,
//         slideShadows: false
//     },
//     breakpoints: {
//         480: {
//             spaceBetween: 0,
//             centeredSlides: true
//         }
//     },
//     simulateTouch: true,
//     navigation: {
//         nextEl: '.projects-slider-next',
//         prevEl: '.projects-slider-prev'
//     },
//     pagination: {
//         el: '.projects-slider__pagination',
//         clickable: true
//     },
//     on: {
//         init: function () {
//             var activeItem = document.querySelector('.swiper-slide-active');

//             var sliderItem = activeItem.querySelector('.projects__item');

//             $('.swiper-slide-active .projects__item').addClass('active');

//             var x = sliderItem.getBoundingClientRect().left;
//             var y = sliderItem.getBoundingClientRect().top;
//             var width = sliderItem.getBoundingClientRect().width;
//             var height = sliderItem.getBoundingClientRect().height;


//             $('.item-bg').addClass('active');

//             bg.style.width = width + 'px';
//             bg.style.height = height + 'px';
//             bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
//         }
//     }
// });

// swiper.on('touchEnd', function () {
//     $('.projects__item').removeClass('active');
//     $('.swiper-slide-active .projects__item').addClass('active');
// });

// swiper.on('slideChange', function () {
//     $('.projects__item').removeClass('active');
// });

// swiper.on('slideChangeTransitionEnd', function () {
//     $('.projects__item').removeClass('active');
//     var activeItem = document.querySelector('.swiper-slide-active');

//     var sliderItem = activeItem.querySelector('.projects__item');

//     $('.swiper-slide-active .projects__item').addClass('active');

//     var x = sliderItem.getBoundingClientRect().left;
//     var y = sliderItem.getBoundingClientRect().top;
//     var width = sliderItem.getBoundingClientRect().width;
//     var height = sliderItem.getBoundingClientRect().height;


//     $('.item-bg').addClass('active');

//     bg.style.width = width + 'px';
//     bg.style.height = height + 'px';
//     bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
// });
//var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if ($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                //$('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                // bg.style.width = width + 'px';
                // bg.style.height = height + 'px';
                // bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                //$('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 100,
    keyboard: true,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 100,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;


            //$('.item-bg').addClass('active');

            // bg.style.width = width + 'px';
            // bg.style.height = height + 'px';
            // bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});

swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;



});