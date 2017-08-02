/* Opens the modal. */

$(function() {
    $('button.newt-modal-open-button-one').on('click',
        function() {
        $('div.newt-modal-one, div.newt-modal-overlay-one').show();
    });
});

/* Closes the modal. */

$(function() {
    $('button.newt-modal-close-button-one').on('click',
        function() {
        $('div.newt-modal-one, div.newt-modal-overlay-one').hide();
    });
});

/* Disables background scrolling when modal is opened. */

$(function() {
    $('button.newt-modal-open-button-one').on('click',
        function() {
        $('body').css('overflow', 'hidden');
    });
});

/* Re-enables background scrolling after modal is closed. */

$(function() {
    $('button.newt-modal-close-button-one').on('click',
        function() {
        $('body').css('overflow', 'auto');
    });
});

/* Spacer comment */
/* Spacer comment */
/* Spacer comment */
/* Spacer comment */

/* Opens the modal. */

$(function() {
    $('button.newt-modal-open-button-two').on('click',
        function() {
        $('div.newt-modal-two, div.newt-modal-overlay-two').show();
    });
});

/* Closes the modal. */

$(function() {
    $('button.newt-modal-close-button-two').on('click',
        function() {
        $('div.newt-modal-two, div.newt-modal-overlay-two').hide();
    });
});

/* Disables background scrolling when modal is opened. */

$(function() {
    $('button.newt-modal-open-button-two').on('click',
        function() {
        $('body').css('overflow', 'hidden');
    });
});

/* Re-enables background scrolling after modal is closed. */

$(function() {
    $('button.newt-modal-close-button-two').on('click',
        function() {
        $('body').css('overflow', 'auto');
    });
});