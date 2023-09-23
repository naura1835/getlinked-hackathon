import { useEffect } from "react";
import gsap, { Power0 } from "gsap";
import { float } from "../../utils/animation";

import Trophy from "../../assets/svgs/trophy.svg?react";

import { DescriptionWrapper, SvgWrapper } from "../section/section.styles";
import {
  AwardDiv,
  Position,
  PositionTitle,
  PrizeMoney,
  Wrapper,
} from "./prizes.styles";
import {
  Heading2,
  HighLightText,
  MediumText,
} from "../../globalStyles/text.styles";

// eslint-disable-next-line react/prop-types
const Prizes = ({ className }) => {
  useEffect(() => {
    let tl = gsap.timeline({
      delay: 0.2,
      scrollTrigger: {
        trigger: ".prize-description",
        start: "top center",
      },
    });
    gsap.set([".position--third", ".position--second", ".position--first"], {
      autoAlpha: 0,
      scale: 0.8,
    });
    gsap.set(".prize-description", {
      y: 20,
      autoAlpha: 0,
    });

    tl.to(".prize-description", { y: 0, autoAlpha: 1, delay: 0.2 }).to(
      [".position--third", ".position--second", ".position--first"],
      {
        duration: 0.8,
        stagger: {
          amount: 0.5,
        },
        autoAlpha: 1,
        scale: 1,
        delay: 0.2,
        ease: Power0.easeOut,
      }
    );
    float(".trophy");
  });
  return (
    <Wrapper>
      <DescriptionWrapper>
        <Heading2 className={className}>
          Prizes <HighLightText>and Rewards</HighLightText>
        </Heading2>
        <MediumText className="prize-description">
          Highlight of the prizes or rewards for winners and for participants.
        </MediumText>
      </DescriptionWrapper>
      <SvgWrapper>
        <Trophy className="trophy" />
      </SvgWrapper>
      <AwardDiv>
        <Position className="position--second">
          <img src="src/assets/silver-medal.png" alt="silver medal" />
          <PositionTitle>
            2nd
            <br /> Runner
          </PositionTitle>
          <PrizeMoney>N300,000</PrizeMoney>
        </Position>
        <Position
          className="position--first"
          color="#903AFF"
          bg="rgba(144, 58, 255, 0.12)"
        >
          <img src="src/assets/gold-medal.png" alt="gold medal" />
          <PositionTitle>
            1st
            <br /> Runner
          </PositionTitle>
          <PrizeMoney color="#903AFF">N400,000</PrizeMoney>
        </Position>
        <Position className="position--third">
          <img src="src/assets/bronze-medal.png" alt="bronze medal" />
          <PositionTitle>
            3rd
            <br /> Runner
          </PositionTitle>
          <PrizeMoney>N150,000</PrizeMoney>
        </Position>
      </AwardDiv>
    </Wrapper>
  );
};

export default Prizes;
