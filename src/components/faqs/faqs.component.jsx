import { HighLightText } from "../../globalStyles/text.styles";

import { FaqWrapper, FaqItem } from "./faqs.styles";

const Faq = () => {
  return (
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
  );
};

export default Faq;
