/* eslint-disable react/prop-types */
import Section from "../section/section.component";

import WomanSitting from "../../assets/svgs/woman-sitting.svg?react";

import { MediumText } from "../../globalStyles/text.styles";
import { Wrapper } from "./rules.styles";

import gsap from "gsap";
import { useEffect } from "react";
import { breakpointsUp } from "../../globalStyles/breakpoints";

const Rules = ({ className }) => {
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 899px)", () => {
      gsap.set("#woman", { y: 50, autoAlpha: 0 });
      gsap.to("#woman", {
        scrollTrigger: {
          trigger: ".svg-wrapper-woman",
          start: "top center",
        },
        y: 0,
        autoAlpha: 1,
        delay: 0.2,
        duration: 1,
      });
    });

    mm.add(breakpointsUp["tablet-landscape-up"], () => {
      let tl = gsap.timeline({
        delay: 0.2,
        scrollTrigger: {
          trigger: ".svg-wrapper-woman",
          start: "top center+=100",
        },
      });

      gsap.set("html", { "--scale-ellipse": "0" });
      gsap.set("#woman", { x: 120, autoAlpha: 0 });

      tl.to("#woman", {
        x: 0,
        autoAlpha: 1,
        delay: 0.2,
        duration: 1,
      }).to("html", {
        "--scale-ellipse": window.innerWidth > 1200 ? "0.8" : "0.6",
        duration: 0.8,
        delay: 0.2,
      });
    });
  });
  return (
    <Wrapper style={{ overflow: "hidden" }}>
      <Section
        title="Rules "
        subtitle="and Guidelines"
        component={<WomanSitting />}
        direction="row-reverse"
        svgClassName="svg-wrapper-woman"
        titleClassName={className}
      >
        <MediumText className="section-paragraph">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </MediumText>
      </Section>
    </Wrapper>
  );
};

export default Rules;
