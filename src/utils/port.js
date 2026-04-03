const horizontal = document.querySelector("#port");
const horSection = gsap.utils.toArray(".port_item");

gsap.to(horSection, {
  xPercent: -100 * (horSection.length - 1),
  ease: "none",

  scrollTrigger: {
    trigger: horizontal,
    start: "top 56px",
    end: () => "+=" + horizontal.offsetWidth - window.innerWidth,
    pin: true,
    scrub: 1,
    markers: true,

    invalidateOnRefresh: true, //Refresh 될 때 마다 계산
    anticipatePin: 1, //pin 시작할 때 화면이 튀는 현상을 줄여주는 옵션
  },
});
