$(function() {
        $('div.splash-statement-one').hide().delay(1000).fadeIn(1000).fadeOut(1000);
        $('div.splash-statement-two').hide().delay(3000).fadeIn(1000).fadeOut(1000);
        $('div.splash-statement-three').hide().delay(5000).fadeIn(1000).delay(1000).fadeOut(1000);
        $('div.continue-button-ID').hide().delay(12000).fadeIn(500);
});

$(function() {
    
        $('button.continue-button-icon','div.newt-splash').on('click', 
            function() {
                $('div.newt-splash').fadeOut(1000);
            });
});

$(function() {
    
        $('button.cancel-button-icon','div.newt-splash').on('click', 
            function() {
                $('div.newt-splash').fadeOut(1000);
            });
});

/* Enables scrolling after continue button is clicked. */

$(function() {
    $('button.continue-button-icon').on('click',
        function() {
        $('.newt-nav-main').css('display', 'block');
    });
});

$(function() {
    $('button.continue-button-icon').on('click',
        function() {
        $("#home, #about, #projects").css('display', 'inline-block');
    });
});

$(function() {
    $('button.continue-button-icon').on('click',
        function() {
        $("#contact, .newt-footer").css('display', 'inherit');
    });
});

/* Enables scrolling after cancel button is clicked. */

$(function() {
    $('button.cancel-button-icon').on('click',
        function() {
        $('.newt-nav-main').css('display', 'block');
    });
});

$(function() {
    $('button.cancel-button-icon').on('click',
        function() {
        $("#home, #about, #projects").css('display', 'inline-block');
    });
});

$(function() {
    $('button.cancel-button-icon').on('click',
        function() {
        $("#contact, .newt-footer").css('display', 'inherit');
    });
});