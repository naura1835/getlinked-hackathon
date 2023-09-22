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
  return (
    <Wrapper>
      <DescriptionWrapper>
        <Heading2 className={className}>
          Prizes <HighLightText>and Rewards</HighLightText>
        </Heading2>
        <MediumText>
          Highlight of the prizes or rewards for winners and for participants.
        </MediumText>
      </DescriptionWrapper>
      <SvgWrapper>
        <Trophy />
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
