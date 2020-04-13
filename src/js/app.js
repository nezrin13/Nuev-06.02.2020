'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'owl.carousel2';
import '@fancyapps/fancybox/dist/jquery.fancybox';
import './selectbox';
$(function () {
    // post about section
    $('.unknown-number').click(function () {
        $('.unknown-number').addClass('active');
        $('.known-number').addClass('active');
    })

    // header price 

    $('.search-price').click(function(){
        $(".search-click").slideToggle("");
    })

    // cache-header
    
    $('.cache-header').click(function (){
        $('.cache-body').slideToggle();
    })



    $('.carousel-parent-1 .homepage-carousel').owlCarousel({
        loop: false,
        margin: 10,
        dots: false,
        nav: true,
        navContainer: '.homepage-carousel-nav',
        navClass: ['prev', 'next'],
        navText: ["", ""],
        responsive: {
            0: {
                items: 1
            }
        }
    })
    $('.carousel-parent-2 .homepage-carousel').owlCarousel({
        loop: false,
        margin: 10,
        dots: false,
        nav: true,
        navContainer: '.homepage-carousel-nav2',
        navClass: ['prev', 'next'],
        navText: ["", ""],
        responsive: {
            0: {
                items: 1
            }
        }
    })
    $('.post-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<img src='../assets/left.png'>", "<img src='../assets/right.png'>"],
        responsive: {
            0: {
                items: 1
            }
        }
    })
    $('.post-news .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<img src='../assets/left.png'>", "<img src='../assets/right.png'>"],
        responsive: {
            0: {
                items: 1
            }
        }
    })

    $('.bookmark').click(function () {
        $(this).toggleClass('active');
    })
});