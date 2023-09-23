import Section from "../section/section.component";

import Lock from "../../assets/svgs/lock.svg?react";

import {
  Policy,
  PolicyList,
  PolicyListItem,
  PolicyWrapper,
  Title,
  Wrapper,
} from "./privacyTerms.style";
import { SmallMediumText } from "../../globalStyles/text.styles";
import CustomButton from "../customButton/customButton.components";
import { useEffect } from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const PrivacyTerms = ({ className }) => {
  useEffect(() => {
    gsap.set("html", {
      "--sheild-visibility": "hidden",
      "--sheild-scale": 0,
    });
    gsap.set(".sub-title", { y: 20, autoAlpha: 0 });

    gsap.to(".sub-title", {
      scrollTrigger: {
        trigger: ".sub-title",
        start: "top center",
      },
      y: 0,
      autoAlpha: 1,
      stagger: 0.3,
      ease: Power3.easeInOut,
      delay: 0.2,
    });
    gsap.to("html", {
      scrollTrigger: {
        trigger: ".man-standing-on-lock",
        start: "top center",
      },
      "--sheild-visibility": "visible",
      "--sheild-scale": 1,
      ease: Power3.easeIn,
      delay: 0.2,
      duration: 2,
    });
  });
  return (
    <Wrapper>
      <Section
        title="Privacy Policy and "
        subtitle="Terms"
        component={<Lock />}
        svgClassName="man-standing-on-lock"
        titleClassName={className}
      >
        <SmallMediumText className="sub-title">
          Last updated on September 12, 2023
        </SmallMediumText>
        <SmallMediumText className="sub-title">
          Below are our privacy & policy, which outline a lot of goodies.
          it&apos;s our aim to always take of our participant
        </SmallMediumText>
        <PolicyWrapper>
          <SmallMediumText>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </SmallMediumText>
          <Policy>
            <Title>Licensing Policy</Title>
            <SmallMediumText>
              Here are terms of our Standard License:
            </SmallMediumText>
            <PolicyList>
              <PolicyListItem>
                <SmallMediumText>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </SmallMediumText>
              </PolicyListItem>
              <PolicyListItem>
                <SmallMediumText>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </SmallMediumText>
              </PolicyListItem>
            </PolicyList>
            <CustomButton text="Read More" />
          </Policy>
        </PolicyWrapper>
      </Section>
    </Wrapper>
  );
};

export default PrivacyTerms;
