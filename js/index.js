// Owl Carousel 2
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin: 10,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1
            },
        }
    });
});

// Floating WhatsApp button
$(function() {
    $('.floating-wpp').floatingWhatsApp({
        phone: '+5511999999999',
        popupMessage: 'Olá! Como posso ajudá-lo(a)?',
        showPopup: true,
        position: 'right', // left or right
        autoOpen: false, // true or false
        //autoOpenTimer: 4000,
        message: '',
        //headerColor: 'orange', // enable to change msg box color
        headerTitle: 'Renee Trajar Support',
    });
});

// Sticky Header when Scrolling
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 450);
});

// Smooth Scrolling Navigation
document.querySelectorAll('header ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});