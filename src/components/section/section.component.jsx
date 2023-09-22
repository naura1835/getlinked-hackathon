/* eslint-disable react/prop-types */

import { Heading2, HighLightText } from "../../globalStyles/text.styles";
import { Wrapper, SvgWrapper, DescriptionWrapper } from "./section.styles";

const Section = (props) => {
  const { direction, titleClassName, component, title, subtitle, children } =
    props;

  return (
    <Wrapper direction={direction}>
      <SvgWrapper>{component}</SvgWrapper>
      <DescriptionWrapper>
        <Heading2 className={titleClassName}>
          {title}
          <HighLightText className="subtitle">{subtitle}</HighLightText>
        </Heading2>
        {children}
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default Section;
