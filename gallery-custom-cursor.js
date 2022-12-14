let cursorSize = "1rem";
let cursorGrowSize = "10rem";

$('.cursor_dot').css( {"height": cursorSize, "width": cursorSize});
gsap.set(".cursor_text", {opacity: 0, y: "4rem", duration: 0.3});

$('.gallery-video_item, .gallery-gallery_item').mouseenter(function() {
    $('body').css('cursor', 'none');
    $('.cursor_dot').css( {"height": cursorGrowSize, "width": cursorGrowSize});
    $('.cursor_text').text($(this).children('.gallery-tooltip').text());
    $('.cursor_text').css("opacity", "1");
    gsap.to(".cursor_text", {opacity: 1, y: "0rem", duration: 0.3});
});

$('.gallery-video_item, .gallery-gallery_item').mouseleave(function() {
    $('body').css('cursor', 'auto');
    $('.cursor_dot').css( {"height": cursorSize, "width": cursorSize});
    gsap.killTweensOf(".cursor_text");
    gsap.set(".cursor_text", {opacity: 0, y: "4rem", duration: 0.3});
});