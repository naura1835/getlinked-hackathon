import gsap, { Back, Power4 } from "gsap";
import SplitType from "split-type";

export const animateTitle = (classname) => {
  let string = new SplitType(classname, { types: "chars" });
  let stringChars = string.chars;

  return gsap.from(stringChars, {
    yPercent: 130,
    stagger: 0.02,
    ease: Back.easeOut,
    duration: 1,
    delay: 0.2,
  });
};

export const animateSectionTitle = (classname) => {
  let string = new SplitType(classname, { types: "lines" });
  let stringLines = string.lines;

  return gsap.from(stringLines, {
    scrollTrigger: {
      trigger: classname,
      start: "top center+=100",
      // markers: true,
    },
    yPercent: 130,
    autoAlpha: 0,
    stagger: 0.05,
    ease: Power4.easeOut,
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
