import Section from "../section/section.component";

import ManThinking from "../../assets/svgs/man-thinking.svg?react";

import { HighLightText, MediumText } from "../../globalStyles/text.styles";
import { FaqWrapper, FaqItem, Wrapper, InnerWrapper } from "./faqs.styles";
import { useEffect } from "react";
import { float } from "../../utils/animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const Faq = ({ className }) => {
  useEffect(() => {
    gsap.set("#question-mark", { autoAlpha: 0 });
    gsap.set(".faq-description", {
      y: 20,
      autoAlpha: 0,
    });

    gsap.to("#question-mark", {
      scrollTrigger: {
        trigger:
          window.innerWidth > 475 ? ".faq-description" : "#question-mark",
      },
      autoAlpha: 1,
      stagger: 0.5,
      delay: 0.1,
    });

    gsap.to(".faq-description", {
      scrollTrigger: {
        trigger: ".faq-description",
        start: "top center",
      },
      y: 0,
      autoAlpha: 1,
      delay: 0.2,
    });

    float(".man-on-cloud");
  });
  return (
    <Wrapper>
      <Section
        component={<ManThinking />}
        title="Frequently Ask "
        subtitle="Question"
        titleClassName={className}
        svgClassName="man-on-cloud"
      >
        <InnerWrapper>
          <MediumText className="faq-description">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </MediumText>
          <FaqWrapper>
            <FaqItem>
              Can I work on a project I started before the hackathon?
              <HighLightText>+</HighLightText>
            </FaqItem>
            <FaqItem>
              What happens if I need help during the hackathon?
              <HighLightText>+</HighLightText>
            </FaqItem>
            <FaqItem>
              What happens if I don&apos;t have an idea for a project?
              <HighLightText>+</HighLightText>
            </FaqItem>
            <FaqItem>
              Can I join a team or do I have to come with one?
              <HighLightText>+</HighLightText>
            </FaqItem>
            <FaqItem>
              What happens after the hackathon ends
              <HighLightText>+</HighLightText>
            </FaqItem>
            <FaqItem>
              Can I work on a project I started before the hackathon?
              <HighLightText>+</HighLightText>
            </FaqItem>
          </FaqWrapper>
        </InnerWrapper>
      </Section>
    </Wrapper>
  );
};

export default Faq;
