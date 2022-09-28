let loader = gsap.timeline();
loader
.set(".gallery-video_item", { boxShadow: "none" })
.from(".gallery_loader-img", {
    scaleX: 1.1,
    scaleY: 1.1,
    opacity: 0,
    duration: 0.5,
    stagger: { each: 0.2 },
    onComplete: () => {
        let state = Flip.getState(".gallery_loader-img");
        Flip.from(state, {
            targets: ".is-flip-to",
            duration: 0.8,
            stagger: { each: 0.2, from: "end" },
            ease: "power1.inOut",
            onComplete: () => {
                $(".gallery-video_item").css("box-shadow", "0 0 20px 10px hsla(0, 0.00%, 100.00%, 0.20)")
            }
        });
    }
})
.to(".gallery_loader", { opacity: 0 })
.set(".gallery_loader", { display: "none" })