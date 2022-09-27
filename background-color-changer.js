gsap.registerPlugin(ScrollTrigger);
$(".background-trigger").each(function (index) {
    ScrollTrigger.create({
        trigger: $(this),
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            // console.log("change color to: " + $(this).css("background-color"));
            $(".page-background").css("background-color", $(this).css("background-color"));
            if($(this).children().length > 0) {
                $(".navbar_background").css("background-color", "#26344f");
                $("h1").css("color", "#18a0fb");
                $(".navbar_desktop-link").css("color", "#ffffff");
                $("body").css("color", "#f8f8f8");
                $(".navbar_brand-divider").css("background-color", "#ffffff");
                $(".navbar_brand-asfam").css({"-webkit-filter" : "brightness(10)"});
                $(".navbar_brand-eduqua").attr("src", "https://uploads-ssl.webflow.com/6323f27645f8607e87793e8f/63325fbbbac9a46ca8561c16_eduqua-logo-white.png");
            }
        },
        onEnterBack: () => {
            // console.log("change color to: " + $(this).css("color"));
            $(".page-background").css("background-color", $(this).css("background-color"));
            if($(this).children().length > 0) {
                $(".set-light-mode").click();
            }
        }
    });
});

// To prevent triggers at wrong positions recalculate when page is ready
$(document).ready(function () {
    setTimeout(function(){
        ScrollTrigger.refresh();
    }, 2000);
});

// Check the animation time and put a little bit more on timeout
$(".values-item_expand-btn").on( "click", function() {
    ScrollTrigger.disable();
    setTimeout(function(){
        ScrollTrigger.enable();
        ScrollTrigger.refresh();
    }, 600);
});