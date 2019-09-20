const delay = (amount = number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, amount);
    });
};

const menu = '#menu';

function navOpenClose() {
    if(!$(menu).hasClass('open_nav')) {
        open();
        setTimeout(menuListAnimate, 1000, 'open');
    } else {
        close();
        menuListAnimate('close');
    }
}

function open() {
    $(menu).animate({marginLeft: "0"});
    $('.burger_line').animate({backgroundColor: "rgb(255,255,255)"});
    $('#burger_wrap :nth-child(2)').animate({width: "75%"});
    $('#burger_wrap :nth-child(3)').animate({width: "50%"});
    $(menu).addClass('open_nav');
}

function close() {
    $(menu).removeClass('open_nav');
    $(menu).animate({marginLeft: "100%"});
    $('.burger_line').animate({backgroundColor: "rgb(0,0,0)"});
    $('#burger_wrap :nth-child(2)').animate({width: "100%"});
    $('#burger_wrap :nth-child(3)').animate({width: "100%"});
}

function menuListAnimate(direction) {
    var menuItems = document.getElementById('menu_items').getElementsByTagName('li').length;

    if (direction === 'open') {
        async function openLoop() {
            for (let i = 0; i < menuItems; i++) {
                var item = $('ul.menu_items li')[i];
                $(item).animate({opacity: '100'});
                await delay(1000);
            }
        }
        openLoop();
    } else if (direction === 'close') {
        $('ul.menu_items li').animate({opacity: '0'});
    }

}

async function animBrackets(direction) {
    if(direction === 'open') {
        await delay(1000);
        $(".bracket").animate({opacity: "0"}, 1000, "linear");
        await delay(1000);
    } else if (direction === 'close') {
        $(".bracket").animate({opacity: "100"}, 1000, 'linear');
    }
}

function openModal() {

    $(".modal").animate({marginTop: "0"}, 1000, 'linear');
    animBrackets('open');
    $(".modal_title").animate({fontSize: "40px"}, 1000, "linear");
}

function closeModal() {
    $(".modal").animate({marginTop: "100vh"}, 1000, 'linear');
    $(".modal_title").animate({fontSize: "0"}, 1000, 'linear');
    animBrackets('close');

}