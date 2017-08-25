var modalOneOpen = false;
var modalTwoOpen = false;

/* Opens modal one. */

$(function() {
   $('button.newt-modal-open-button-one').on('click',
      function() {
         $('div.newt-modal-one, div.newt-modal-overlay-one').show();
         modalOneOpen = true;
      });
});

/* Disables background scrolling when modal one is opened. */

$(function() {
   $('button.newt-modal-open-button-one').on('click',
      function() {
         $('body').css('overflow', 'hidden');
      });
});

/* Closes modal one. */

$(function() {
   $('button.newt-modal-close-button-one').on('click',
      function() {
         $('div.newt-modal-one, div.newt-modal-overlay-one').hide();
      	$('body').css('overflow','auto');
         modalOneOpen = false;
      });
});

$(document).click(function(event) {
   if (!$(event.target).is("#newt-modal-one, .newt-modal-one, .newt-modal-contents-one, .newt-interior-modal-one-text, .newt-interior-modal-one-description, .newt-modal-open-button-one, .newt-modal-img-one") && modalOneOpen === true) {
      $(".newt-modal-one, .newt-modal-overlay-one").hide();
		$('body').css('overflow','auto');
      modalOneOpen = false;
   };
});



/* Spacer comment */
/* Spacer comment */


/* Opens modal two. */

$(function() {
   $('button.newt-modal-open-button-two').on('click',
      function() {
         $('div.newt-modal-two, div.newt-modal-overlay-two').show();
         modalTwoOpen = true;
      });
});

/* Disables background scrolling when modal two is opened. */

$(function() {
   $('button.newt-modal-open-button-two').on('click',
      function() {
         $('body').css('overflow', 'hidden');
      });
});

/* Closes modal two. */

$(function() {
   $('button.newt-modal-close-button-two').on('click',
      function() {
         $('div.newt-modal-two, div.newt-modal-overlay-two').hide();
      	$('body').css('overflow','auto');
         modalTwoOpen = false;
      });
});

$(document).click(function(event) {
   if (!$(event.target).is("#newt-modal-two, .newt-modal-two, .newt-modal-contents-two, .newt-interior-modal-two-text, .newt-interior-modal-two-description, .newt-modal-open-button-two, .newt-modal-img-two") && modalTwoOpen === true) {
      $(".newt-modal-two, .newt-modal-overlay-two").hide();
      $('body').css('overflow', 'auto');
      modalTwoOpen = false;
   };
});