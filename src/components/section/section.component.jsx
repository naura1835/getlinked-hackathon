/* eslint-disable react/prop-types */
import { Heading2, HighLightText } from "../../globalStyles/text.styles";

import { Wrapper, SvgWrapper, DescriptionWrapper } from "./section.styles";

const Section = (props) => {
  const {
    direction,
    component,
    headerClassName,
    svgClassName,
    title,
    subtitle,
    children,
  } = props;
  return (
    <Wrapper direction={direction}>
      <SvgWrapper className={svgClassName}>{component}</SvgWrapper>
      <DescriptionWrapper>
        <Heading2 className={headerClassName}>
          {title}
          <HighLightText>{subtitle}</HighLightText>
        </Heading2>
        {children}
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default Section;
