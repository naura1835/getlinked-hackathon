import gsap, { Back, Power4, Sine } from "gsap";
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
    },
    yPercent: 130,
    autoAlpha: 0,
    stagger: 0.1,
    ease: Power4.easeOut,
    duration: 1,
    delay: 0.2,
  });
};

// herosection paragraph animation
export const animateParagraph = (paragraph) => {
  return gsap.to(paragraph, {
    autoAlpha: 1,
    y: 0,
  });
};

export const animateSectionParagraph = (paragraph) => {
  let string = new SplitType(paragraph, { types: "lines" });
  let stringLines = string.lines;

  gsap.from(stringLines, {
    scrollTrigger: {
      trigger: paragraph,
      start: "top center+=100",
    },
    autoAlpha: 0,
    y: 60,
    stagger: 0.15,
    ease: Power4.easeOut,
    duration: 1,
    delay: 0.2,
  });
};

export const float = (classname) => {
  return gsap.to(classname, {
    y: 30,
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    duration: 1,
  });
};
