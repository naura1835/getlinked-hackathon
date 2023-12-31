import gsap from "gsap";
import { TextPlugin } from "gsap/all";

import BlueFlare from "../../assets/Blue-Flare.png";
import Boom from "../../assets/Boom.png";
import Chain from "../../assets/Chain.png";
import ManWearingGlasses from "../../assets/man-wearing-smart-glasses.png";

import CustomButton from "../customButton/customButton.components";

import { animateHeroSection } from "./heroSection.animation";

import {
  BodyIntroText,
  Heading1,
  HighLightText,
} from "../../globalStyles/text.styles";
import {
  Container,
  CountDown,
  Description,
  DescriptionWrapper,
  ImageWrapper,
  Wrapper,
} from "./heroSection.styles";
import { useEffect } from "react";

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  useEffect(() => {
    animateHeroSection();
  }, []);

  return (
    <Wrapper className="hero-section">
      <BodyIntroText className="typewriter"></BodyIntroText>
      <DescriptionWrapper className="description-section">
        <Heading1 className="getlinked">
          <Container>getlinked Tech</Container>
        </Heading1>
        <Heading1 className="hackathon-version">
          <Container>
            Hackathon <HighLightText>1.0</HighLightText>
          </Container>
          <img src={Chain} alt="chain" />
          <img src={Boom} alt="boom spark" />
        </Heading1>
        <Description className="description">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </Description>
        <CustomButton className="register-btn" text="Register" />
        <CountDown className="countdown">
          00<span>H</span> 00<span>M</span> 00<span>S</span>
        </CountDown>
      </DescriptionWrapper>
      <ImageWrapper>
        <img
          src={ManWearingGlasses}
          className="man-wearing-glasses"
          alt="man wearing smart glasses touching virtual screen"
        />
        <img src={BlueFlare} className="blue-flare" alt="blue flare screen" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default HeroSection;
