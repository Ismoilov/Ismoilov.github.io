// ---------topbar-search-------------
document.querySelector('#cover').onclick = function () {
    $('.r2').toggleClass('hide');
    $('.hide1').toggleClass('r1');
}

window.addEventListener('load', function (e) {
    $('.language-box ul li').on('click', function () {
        $('.language-box ul li').removeClass('active');
        $(this).addClass('active');
    });
});

// ------------------------Navbar-------------------
$(document).ready(function () {

    var toggleAffix = function (affixElement, scrollElement, wrapper) {

        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;

        if (scrollElement.scrollTop() >= top) {
            wrapper.height(height);
            affixElement.addClass("affix");
        }
        else {
            affixElement.removeClass("affix");
            wrapper.height('auto');
        }

    };


    $('[data-toggle="affix"]').each(function () {
        var ele = $(this),
            wrapper = $('<div></div>');

        ele.before(wrapper);
        $(window).on('scroll resize', function () {
            toggleAffix(ele, $(this), wrapper);
        });

        // init
        toggleAffix(ele, $(window), wrapper);
    });

});

// --------------Owl carousel--------------
$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    lazyLoad: true,
    autoplay: false,
    smartSpeed: 800,
    navText: ['<i class="fal fa-chevron-left"></i>', '<i class="fal fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

