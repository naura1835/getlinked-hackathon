import Section from "../section/section.component";

import ManThinking from "../../assets/svgs/man-thinking.svg?react";

import { HighLightText, MediumText } from "../../globalStyles/text.styles";
import { FaqWrapper, FaqItem, Wrapper, InnerWrapper } from "./faqs.styles";

const Faq = () => {
  return (
    <Wrapper>
      <Section
        component={<ManThinking />}
        title="Frequently Ask "
        subtitle="Question"
        svgClassName="faqs"
        headerClassName="faqs--title"
      >
        <InnerWrapper>
          <MediumText>
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
