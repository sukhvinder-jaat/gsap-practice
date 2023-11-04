var tl = gsap.timeline();

tl.from("nav span , ul li , nav button , nav", {
  y: -80,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.3,
});
tl.from("#page1 h1", {
  x: -500,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
});
tl.from("#heroImg", {
  scale: 0.2,
  opacity: 0,
  duration: 0.5,
});

var tl2 = gsap.timeline();

tl2.from("#page2 .card", {
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  //   x: -500,
  rotate: 30,
  scrollTrigger: {
    trigger: "#page2 .card",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 50%",
    scrub: true,
  },
});

gsap.to("#page1 h2", {
  transform: "translateX(-90%)",
  scrollTrigger: {
    trigger: "#page1 h2",
    scroller: "body",
    // markers: true,
    start: "top 40%",
    end: "top -200%",
    scrub: true,
    pin: true,
  },
});
