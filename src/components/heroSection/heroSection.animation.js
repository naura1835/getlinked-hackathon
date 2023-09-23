import gsap from "gsap";

import { animateParagraph, animateTitle } from "../../utils/animation";

export const animateHeroSection = () => {
  gsap.set(".hero-section", {
    visibility: "visible",
  });
  gsap.set(".man-wearing-glasses", {
    scale: 0,
    y: 20,
  });
  gsap.set(".description", {
    autoAlpha: 0,
    y: 12,
  });

  gsap.set(".blue-flare", {
    scale: 0,
  });

  let masterTl = gsap.timeline({ delay: 0.5 });

  ["Igniting a Revolution in HR Innovation"].forEach((word) => {
    let tl = gsap.timeline();

    tl.to(".typewriter", {
      duration: word.length * 0.1,
      text: {
        value: word,
        delimiter: "",
      },
    });
    masterTl.add(tl);
  });

  masterTl.to(
    ".typewriter",
    {
      "--scale-x": "1",
    },
    3
  );

  masterTl.add(animateTitle(".getlinked"), 3);
  masterTl.to(
    ".getlinked",
    {
      "--scale-bulb": window.innerWidth < 1200 ? "0.4" : "1",
    },
    4
  );
  masterTl.add(animateTitle(".hackathon-version"), 3);
  masterTl.to(
    ".hackathon-version",
    {
      "--scale-chain": "1",
      "--scale-boom": "1",
    },
    4
  );
  masterTl
    .add(animateParagraph(".description"))
    .fromTo(
      ".register-btn",
      {
        scale: 0,
      },
      { scale: 1 },
      "sync"
    )
    .fromTo(
      ".countdown",
      {
        opacity: 0,
      },
      { opacity: 1 },
      "sync"
    )
    .to(
      ".man-wearing-glasses",
      {
        transformOrigin: "bottom",
        y: 0,
        scale: 1,
      },
      "sync"
    )
    .to(
      ".blue-flare",
      {
        scale: 1,
        delay: 0.5,
      },
      "sync-with-blue-flare"
    )
    .to(
      [".typewriter", ".description-section"],
      {
        delay: 0.6,
        "--scale-star": window.innerWidth < 600 ? "0.4" : "0.8",
        "--scale-star-1": window.innerWidth < 600 ? "0.5" : "1",
        "--scale-star-2": window.innerWidth < 600 ? "0.4" : "1",
      },
      "sync-with-blue-flare"
    );
};
