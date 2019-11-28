const menu = '#menu';
const bigScreen = window.matchMedia( "(min-width: 1280px), (min-width: 961px), (min-width: 700px)" );
const smallScreen = window.matchMedia( "(max-width: 699px)" );

// Always make sure that any style values set by jquery get reset
window.onresize = function () {
    const big = window.matchMedia( "(min-width: 1280px), (min-width: 961px), (min-width: 700px)" );
    const small = window.matchMedia( "(max-width: 699px)" );
    $(menu).removeAttr('style');
    $('.burger_line').removeAttr('style');
    $('.scroll_box').removeAttr('style');
    $('.main_wrapper').removeAttr('style');
    $('#background-image').removeAttr('style');

    if (small.matches) {
        $('.modal_title').removeAttr('style');
    }
};



function activeSearch() {
        $('.search').addClass('active');
}

function inactiveSearch() {
    if($('#inpt_search').val().length === 0) {
        $('.search').removeClass('active');
    }
}
function navOpenClose() {
    if(!$(menu).hasClass('open_nav')) {
        open();
    } else {
        close();
    }
}

function open() {
    $(menu).animate({marginLeft: "0"});
    $('.burger_line').animate({backgroundColor: "rgb(255,255,255)"});
    $('#burger_wrap :nth-child(2)').animate({width: "75%"});
    $('#burger_wrap :nth-child(3)').animate({width: "50%"});
    $('.scroll_box').css({visibility: 'hidden'});
    $('#background-image').css({visibility: 'hidden'});
    $(menu).addClass('open_nav');
}

function close() {
    $(menu).removeClass('open_nav');
    $(menu).animate({marginLeft: "100%"});
    $('.burger_line').animate({backgroundColor: "rgb(0,0,0)"});
    $('#burger_wrap :nth-child(2)').animate({width: "100%"});
    $('#burger_wrap :nth-child(3)').animate({width: "100%"});
    $('.scroll_box').css({visibility: 'visible'});
    $('#background-image').css({visibility: 'visible'});
}

function openModal() {

    $(".modal").animate({marginTop: "0"}, 1000, 'linear');
    // animBrackets('open');
    if (smallScreen.matches) {
        $(".modal_title").animate({fontSize: "5vw"}, 1000, "linear");
    } else if (bigScreen.matches) {
        $(".modal_title").animate({fontSize: "2vw"}, 1000, "linear");
    }
    $("#projects_scroll").css({display: "none"});
}

function closeModal() {
    $(".modal").animate({marginTop: "100vh"}, 1000, 'linear');
    $(".modal_title").animate({fontSize: "0"}, 1000, 'linear');
    $("#projects_scroll").css({display: "grid"});
    // animBrackets('close');

}