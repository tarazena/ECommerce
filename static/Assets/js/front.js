$(function () {

    utils();


    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass("show");


        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

    });


    $('i.delete').on('click', function () {
        $(this).parents('.item').fadeOut();
    });


    // ------------------------------------------------------- //
    // Open & Close Search Panel
    // ------------------------------------------------------ //
    $('.search').on('click', function () {
        $('.search-area').fadeIn();
    });

    $('.search-area .close-btn').on('click', function () {
        $('.search-area').fadeOut();
    });


    // ------------------------------------------------------- //
    // Items Carousel
    // ------------------------------------------------------ //


    // ------------------------------------------------------- //
    // Increase/Reduce product amount
    // ------------------------------------------------------ //

    // ------------------------------------------------------- //
    // Scroll to top button
    // ------------------------------------------------------ //
    // Scroll to top button
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 1500) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });


    $('#scrollTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });



    // ------------------------------------------------------- //
    // Bootstrap select
    // ------------------------------------------------------ //
    $('.bs-select').selectpicker({
        size: 4
    });

    // ------------------------------------------------------- //
    // Products Slider
    // ------------------------------------------------------ //

    // ------------------------------------------------------- //
    // Brands Slider
    // ------------------------------------------------------ //
});

// ------------------------------------------------------ //
// For demo purposes, can be deleted
// ------------------------------------------------------ //

var stylesheet = $('link#theme-stylesheet');
$("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
var alternateColour = $('link#new-stylesheet');

if ($.cookie("theme_csspath")) {
    alternateColour.attr("href", $.cookie("theme_csspath"));
}

$("#colour").change(function () {

    if ($(this).val() !== '') {

        var theme_csspath = 'css/style.' + $(this).val() + '.css';

        alternateColour.attr("href", theme_csspath);

        $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

    }

    return false;
});

function utils() {

    /* click on the box activates the link in it */

    $('.box.clickable').on('click', function (e) {

        window.location = $(this).find('a').attr('href');
    });
    /* external links in new window*/

    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });
    /* animated scrolling */

    $('.scroll-to, .scroll-to-top').click(function (event) {

        var full_url = this.href;
        var parts = full_url.split("#");
        if (parts.length > 1) {

            scrollTo(full_url);
            event.preventDefault();
        }
    });
    function scrollTo(full_url) {
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top - 100;
        if (target_top < 0) {
            target_top = 0;
        }

        $('html, body').animate({
            scrollTop: target_top
        }, 1000);
    }
}