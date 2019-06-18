/**
 * jQuery Scroll
 * This code was developed by Matt Stevenson, 12/06/2019   
 * All individual scripts remain property of their Copyright Holders
 * Licensed to Stefan Pollin - Portfolio
 * Version: 1.0.0
 */

$(document).ready(function () {
    // Target all Anchor tags with an Href - Target Hash #
    $('a[href^="#"]').on('click', function (e) {
        // Prevent default event of going straight to Anchor tag
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        // Scroll via jQuery animate Method
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing'); // Set speed and animate option
    });
});