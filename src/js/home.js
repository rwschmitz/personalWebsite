var allIcons = true;

$('.fa-leaf').on('click',
   function() {
      if (allIcons) {
         $(".fa-cutlery, .fa-gamepad, .fa-lightbulb-o, .fa-desktop, .home-img-center-text, .home-img-right-text, .home-img-lower-left-text, .home-img-lower-right-text").fadeOut(500);
         $(".fa-leaf").delay(500).animate({
            'marginLeft': "+=228%"
         }, 500);
         $(".home-info1").animate({
            'marginLeft': "+=139%"
         }, );
         $(".home-info1").delay(1000).fadeIn();
         allIcons = false;
      } else {
         $(".fa-cutlery, .fa-gamepad, .fa-lightbulb-o, .fa-desktop, .home-img-center-text, .home-img-right-text, .home-img-lower-left-text, .home-img-lower-right-text").delay(1000).fadeIn();
         $(".fa-leaf").delay(500).animate({
            'marginLeft': "-=228%"
         }, 500);

         $(".home-info1").fadeOut(500);
         $(".home-info1").animate({
            'marginLeft': "-=139%"
         }, );
         allIcons = true;
      };
   });

/* Spacing comment */

$('.fa-cutlery').on('click',
   function() {
      if (allIcons) {
         $(".fa-leaf, .fa-gamepad, .fa-lightbulb-o, .fa-desktop, .home-img-left-text, .home-img-right-text, .home-img-lower-left-text, .home-img-lower-right-text").fadeOut(500);
         $(".fa-cutlery").delay(500).animate({
            'marginLeft': "+=117%"
         }, 500);
         $(".home-info2").animate({
            'marginLeft': "+=35%"
         }, );
         $(".home-info2").delay(1000).fadeIn();
         allIcons = false;
      } else {
         $(".fa-leaf, .fa-gamepad, .fa-lightbulb-o, .fa-desktop, .home-img-left-text, .home-img-right-text, .home-img-lower-left-text, .home-img-lower-right-text").delay(1000).fadeIn();
         $(".fa-cutlery").delay(500).animate({
            'marginLeft': "-=117%"
         }, 500);
         $(".home-info2").fadeOut(500);
         $(".home-info2").animate({
            'marginLeft': "-=35%"
         }, );
         allIcons = true;
      };
   });

/* Spacing comment */

$('.fa-gamepad').on('click',
   function() {
      if (allIcons) {
         $(".fa-leaf, .fa-cutlery, .fa-lightbulb-o, .fa-desktop, .home-img-left-text, .home-img-center-text, .home-img-lower-left-text, .home-img-lower-right-text").fadeOut(500);
         $(".fa-gamepad").delay(500).animate({
            'marginLeft': "+=6%"
         }, 500);
         $(".home-info3").animate({
            'marginLeft': "-=76%"
         }, );
         $(".home-info3").delay(1000).fadeIn();
         allIcons = false;
      } else {
         $(".fa-leaf, .fa-cutlery, .fa-lightbulb-o, .fa-desktop, .home-img-left-text, .home-img-center-text, .home-img-lower-left-text, .home-img-lower-right-text").delay(1000).fadeIn();
         $(".fa-gamepad").delay(500).animate({
            'marginLeft': "-=6%"
         }, 500);
         $(".home-info3").fadeOut(500);
         $(".home-info3").animate({
            'marginLeft': "+=76%"
         }, );
         allIcons = true;
      };
   });

/* Spacing comment */

$('.fa-lightbulb-o').on('click',
   function() {
      if (allIcons) {
         $(".fa-leaf, .fa-cutlery, .fa-gamepad, .fa-desktop, .home-img-left-text, .home-img-center-text, .home-img-lower-right-text, .home-img-lower-right-text").fadeOut(500);
         $(".fa-lightbulb-o").delay(500).animate({
            'marginLeft': "-=108%"
         }, 500);
         $(".home-info4").animate({
            'marginLeft': "-=190%"
         }, );
         $(".home-info4").delay(1000).fadeIn();
         allIcons = false;
      } else {
         $(".fa-leaf, .fa-cutlery, .fa-gamepad, .fa-desktop, .home-img-left-text, .home-img-center-text, .home-img-lower-right-text, .home-img-lower-right-text").delay(1000).fadeIn();
         $(".fa-lightbulb-o").delay(500).animate({
            'marginLeft': "+=108%"
          }, 500);
         $(".home-info4").fadeOut(500);
         $(".home-info4").animate({
            'marginLeft': "+=190%"
         }, );


         allIcons = true;
      };
   });

/* Spacing comment */

$('.fa-desktop').on('click',
   function() {
      if (allIcons) {
         $(".fa-leaf, .fa-cutlery, .fa-gamepad, .fa-lightbulb-o, .home-img-left-text, .home-img-center-text, .home-img-right-text, .home-img-lower-left-text").fadeOut(500);
         $(".fa-desktop").delay(500).animate({
            'marginLeft': "-=221%"
         }, 500);
         $(".home-info5").animate({
            'marginLeft': "-=298%"
         }, );
         $(".home-info5").delay(1000).fadeIn();
         allIcons = false;
      } else {
         $(".fa-leaf, .fa-cutlery, .fa-gamepad, .fa-lightbulb-o, .home-img-left-text, .home-img-center-text, .home-img-right-text, .home-img-lower-left-text").delay(1000).fadeIn();
         $(".fa-desktop").delay(500).animate({
            'marginLeft': "+=221%"
         }, 500);
         $(".home-info5").fadeOut(500);
         $(".home-info5").animate({
            'marginLeft': "+=298%"
         }, );
         allIcons = true;
      };
   });