$(document).ready(function () {
    const clicknav = $('#clicknav');
    const togglenav = $('#togglenav');

    const backToTop = $('.back-to-top');

    clicknav.click(function () {
        togglenav.slideToggle('slow')
    });

    $(window).scroll(function () {
        const getScrollTop = $(window).scrollTop();
        console.log(getScrollTop);
        if (getScrollTop > 200) {
            backToTop.css('display', 'block');
        }
        else {
            backToTop.css('display', 'none');
        }
    });

    backToTop.click(function () {
        $('html, body').animate({
            scrollTop: 0
        },
            "slow"
        )
    })
});