/* eslint-disable react/prop-types */
import ScrollTrigger from "gsap/ScrollTrigger";
import Section from "../section/section.component";

import Lighbulb from "../../assets/svgs/the-big-idea.svg?react";

import { MediumText } from "../../globalStyles/text.styles";
import { Wrapper } from "./introduction.styles";
import { useEffect } from "react";

import gsap, { Power4 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Introduction = ({ className }) => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".be-creative",
        start: "top center+=100",
      },
      delay: 0.3,
    });

    let svgParts = gsap.utils.toArray([
      "#chat",
      "#paper",
      "#gear",
      "#magnifying-glass",
      "#chart",
      "#envelope",
      "#location",
    ]);
    svgParts.forEach((elem) => [
      gsap.set(elem, {
        autoAlpha: 0,
      }),
    ]);
    gsap.set(["#dotted-circle", "#lightbulb"], {
      autoAlpha: 0,
    });

    tl.to("#lightbulb", {
      autoAlpha: 1,
      ease: Power4.easeInOut,
      duration: 0.8,
    })
      .to("#dotted-circle", {
        autoAlpha: 1,
        ease: Power4.easeInOut,
        duration: 0.4,
      })
      .to(svgParts, {
        autoAlpha: 1,
        stagger: 0.2,
        duration: 1,
      });
  });
  return (
    <Wrapper>
      <Section
        title="Introduction to getlinked "
        subtitle="tech Hackathon 1.0"
        component={<Lighbulb />}
        svgClassName="be-creative"
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

export default Introduction;
