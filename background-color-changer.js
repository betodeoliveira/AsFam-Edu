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
                // $(".navbar_link").css("color", "#ffffff");
                $("body").css("color", "#f8f8f8");
                $(".navbar_brand-divider").css("background-color", "#ffffff");
                $(".navbar_links-bg").css("background-color", "#26344f");
                $(".navbar_brand-asfam").css({"-webkit-filter" : "brightness(10)"});
                $(".navbar_brand-eduqua").attr("src", "https://uploads-ssl.webflow.com/6323f27645f8607e87793e8f/63325fbbbac9a46ca8561c16_eduqua-logo-white.png");
            }
        },
        onEnterBack: () => {
            // console.log("change color to: " + $(this).css("color"));
            $(".page-background").css("background-color", $(this).css("background-color"));
            if($(this).children().length > 0) {
                // Set light mode?
            }
        }
    });
});

let resizeTimeoutId;

const resizeObserver = new ResizeObserver(entries => {
    // console.log('Body height changed');
    clearTimeout(resizeTimeoutId);
    resizeTimeoutId = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 200);
});

// start observing a DOM node
resizeObserver.observe(document.body);

// Scroll Trigger reset the page scroll position on reload or back so we need to preserv the position
$(window).scroll(function () {
    sessionStorage.scrollTop = $(this).scrollTop();
});

// But we don't want to move the a previous scroll posititon when we click on a link
$("a").on("click", function () {
    // So if we click on a link we prevent the page from scrolling when document is ready
    localStorage.setItem("resetScroll", "true");
});

// When ready check if we have a previous scroll position or if we should ignore it
$(document).ready(function () {
    if (localStorage.getItem("resetScroll") == "true") {
        localStorage.setItem("resetScroll", "false");
    }
    else if (sessionStorage.scrollTop != "undefined") {
        $(window).scrollTop(sessionStorage.scrollTop);
    }
    else{
        // ignore
    }
});