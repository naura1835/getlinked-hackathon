/* eslint-disable react/prop-types */
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
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimeLine = ({ className }) => {
  useEffect(() => {
    gsap.set(".timeline-description", { y: 20, autoAlpha: 0 });

    gsap.to(".timeline-description", {
      scrollTrigger: {
        trigger: ".timeline-description",
        start: "top center+=100",
      },
      y: 0,
      autoAlpha: 1,
      delay: 0.2,
    });
  });
  return (
    <Wrapper>
      <Heading2 className={className}>Timeline</Heading2>
      <SmallMediumText className="timeline-description">
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
