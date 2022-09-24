let loader = gsap.timeline();
loader
.from(".tour_loader-img", {
    scaleX: 1.1,
    scaleY: 1.1,
    opacity: 0,
    duration: 0.5,
    stagger: { each: 0.2 },
    onComplete: () => {
        let state = Flip.getState(".tour_loader-img");
        Flip.from(state, {
            targets: ".is-tour-flip-to",
            duration: 0.8,
            stagger: { each: 0.2, from: "end" },
            ease: "power1.inOut"
        });
    }
})
.to(".tour_loader", { opacity: 0 })
.set(".tour_loader", { display: "none" })