$(function () {
	
/********************************************************

                     OWL CAROUSEL

********************************************************/

$(".slider-wrapper").owlCarousel({
items: 1,
autoplay:true,
smartSpeed:700,
loop: true,
autoplayHoverPause: true,
dots: false
});

$(".novi-proizvodi-slider").owlCarousel({
items: 5,
autoplay:true,
smartSpeed:700,
loop: true,
autoplayHoverPause: true,
dots: false,
responsive : {
// breakpoint from 0 up
0 : {
items: 1
},
// breakpoint from 480 up
480 : {
items: 1
},
// breakpoint from 768 up
768 : {
items: 3
},
992 :{
items: 3
},
1199 :{
items: 5	
}
}
});

owl = $('.novi-proizvodi-slider').owlCarousel();
$(".prev").click(function () {
    owl.trigger('prev.owl.carousel');
});

$(".next").click(function () {
    owl.trigger('next.owl.carousel');
});

});