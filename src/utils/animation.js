import gsap, { Back } from "gsap";

export const animateTitle = (stringArray) => {
  return gsap.from(stringArray, {
    yPercent: 130,
    stagger: 0.02,
    ease: Back.easeOut,
    duration: 1,
    delay: 0.2,
  });
};

export const animateParagraph = (paragraph) => {
  return gsap.fromTo(
    paragraph,
    {
      autoAlpha: 0,
      y: 12,
    },
    {
      autoAlpha: 1,
      y: 0,
    }
  );
};
