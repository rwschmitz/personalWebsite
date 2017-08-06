/* This javscript file allows users to jump around the page with a smooth scrolling animation.  Also, this script does not add hashes (#) to the url when clicked. */

$(function() {
    $('button.home-button').click(function() {
    $('html, body').animate({
        scrollTop: $('#home').offset().top
    }, 1000);
});
});

$(function() {
    $('button.about-button').click(function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 1000);
});
});

$(function() {
    $('button.skills-button').click(function() {
    $('html, body').animate({
        scrollTop: $('#skills').offset().top
    }, 1000);
});
});

$(function() {
    $('button.blog-button').click(function() {
    $('html, body').animate({
        scrollTop: $('#blog').offset().top
    }, 1000);
});
});

$(function() {
    $('button.contact-button').click(function() {
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 1000);
});
});