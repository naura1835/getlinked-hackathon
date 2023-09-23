/* eslint-disable react/prop-types */
import CustomButton from "../../components/customButton/customButton.components";
import { HighLightText } from "../../globalStyles/text.styles";
import Section from "../section/section.component";

import LookingAtChart from "../../assets/svgs/looking-at-chart.svg?react";

import {
  JudgingCriteriaWrapper,
  ParagraphList,
  ParagraphListItem,
  Wrapper,
} from "./judgingCriteria.styles";
import { useEffect } from "react";

const JudgingCriteria = ({ className }) => {
  useEffect(() => {});
  return (
    <Wrapper>
      <Section
        title="Judging Criteria "
        subtitle="Key attributes"
        component={<LookingAtChart />}
        titleClassName={className}
      >
        <JudgingCriteriaWrapper>
          <ParagraphList>
            <ParagraphListItem className="criteria">
              <HighLightText>Innovation and Creativity:</HighLightText> Evaluate
              the uniqueness and creativity of the solution. Consider whether it
              addresses a real-world problem in a novel way or introduces
              innovative features.
            </ParagraphListItem>
            <ParagraphListItem className="criteria">
              <HighLightText>Functionality:</HighLightText> Assess how well the
              solution works. Does it perform its intended functions effectively
              and without major issues? Judges would consider the completeness
              and robustness of the solution.
            </ParagraphListItem>
            <ParagraphListItem className="criteria">
              <HighLightText>Impact and Relevance:</HighLightText> Determine the
              potential impact of the solution in the real world. Does it
              address a significant problem, and is it relevant to the target
              audience? Judges would assess the potential social, economic, or
              environmental benefits.
            </ParagraphListItem>
            <ParagraphListItem className="criteria">
              <HighLightText>Technical Complexity:</HighLightText> Evaluate the
              technical sophistication of the solution. Judges would consider
              the complexity of the code, the use of advanced technologies or
              algorithms, and the scalability of the solution.
            </ParagraphListItem>
            <ParagraphListItem className="criteria">
              <HighLightText>Adherence to Hackathon Rules:</HighLightText>{" "}
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </ParagraphListItem>
          </ParagraphList>
          <CustomButton text="Read More" />
        </JudgingCriteriaWrapper>
      </Section>
    </Wrapper>
  );
};

export default JudgingCriteria;
