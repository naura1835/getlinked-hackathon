import { timeline } from "./timeline.data.js";

import {
  Heading2,
  HighLightText,
  MediumText,
  SmallMediumText,
} from "../../globalStyles/text.styles";
import {
  DateText,
  TimeLineContainer,
  TimeLineItem,
  Wrapper,
} from "./timeline.styles";

const TimeLine = () => {
  return (
    <Wrapper>
      <Heading2>Timeline</Heading2>
      <SmallMediumText>
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </SmallMediumText>
      <TimeLineContainer>
        {timeline.map((info, index) => (
          <TimeLineItem
            key={index}
            data-index={index}
            direction={info.direction}
          >
            <div>
              <HighLightText>{info.title}</HighLightText>
              <MediumText>{info.description}</MediumText>
            </div>
            <DateText>{info.date}</DateText>
          </TimeLineItem>
        ))}
      </TimeLineContainer>
    </Wrapper>
  );
};

export default TimeLine;
