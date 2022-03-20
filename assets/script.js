// NFT Slider
var slider = new Swiper('.nfts-slider', {
    slidesPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,
    loop: true,
    loopedSlides: 18,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// NFT Thumbnails
var thumbs = new Swiper('.nfts-thumbs', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
});
slider.controller.control = thumbs;
thumbs.controller.control = slider;

// Chibis
var chibis = document.querySelectorAll(".profilpic");
for (var i = 0; i < chibis.length; i++) {
    chibis[i].addEventListener("click", (e) => {
        var chibiimg = document.getElementById('chibiimg');
        if (chibiimg.src == e.target.src) {
            return;
        }
        chibiimg.style.transform = 'translateY(100%)';
        setTimeout(function() {
            chibiimg.src = e.target.src;
            chibiimg.style.transform = '';
        }, 300)
    });
}

// Stick Nav
const nav = document.querySelector('nav.navbar');
let navTop = nav.offsetTop;

var stickNav = (e) => {
    if (window.scrollY > navTop) {
        nav.classList.add('stick');
    } else {
        nav.classList.remove('stick');
    }
}
window.addEventListener('scroll', stickNav);

// Scroll Anchor
$('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    scrollTopOffset = target[0].id != 'nft' ?
        (window.screen.width <= 768 ? 100 : 150) : 0;
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - scrollTopOffset
        }, 500);
    }
});