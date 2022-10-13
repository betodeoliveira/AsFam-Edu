let currentImg = 0;
let tlHeroAnim = gsap.timeline();

$(".home-hero_img-detail").css('opacity', '0');
$(".home-hero_img-list").css('opacity', '0');
$(".home-hero_img").eq(currentImg).css('opacity', '1');

tlHeroAnim.pause();
tlHeroAnim.set(".home-hero_img-detail", { rotation: 45 });
tlHeroAnim.to(".home-hero_img-detail", { opacity: 1, duration: 0.5 })
    .to(".home-hero_img-detail", { rotation: 405, duration: 2 }, "<")
    .to(".home-hero_img-list", { opacity: 1, duration: 0.5 }, "<1")
    .to(".home-hero_img-detail", { opacity: 0, duration: 0.5 }, "+=2")
    .to(".home-hero_img-list", { opacity: 0, duration: 0.5 }, "<")
    .eventCallback("onComplete", SetNext);

function SetNext() {
    $(".home-hero_img").eq(currentImg).css('opacity', '0');
    currentImg++;
    if (currentImg >= $(".home-hero_img").length) {
        currentImg = 0;
    }
    $(".home-hero_img").eq(currentImg).css('opacity', '1');
    tlHeroAnim.restart();
}

$(document).ready(function () {
    tlHeroAnim.play();
});