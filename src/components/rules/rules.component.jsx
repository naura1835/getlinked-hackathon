/* eslint-disable react/prop-types */
import Section from "../section/section.component";

import WomanSitting from "../../assets/svgs/woman-sitting.svg?react";

import { MediumText } from "../../globalStyles/text.styles";
import { Wrapper } from "./rules.styles";

const Rules = ({ className }) => {
  return (
    <Wrapper>
      <Section
        title="Rules "
        subtitle="and Guidelines"
        component={<WomanSitting />}
        direction="row-reverse"
        titleClassName={className}
      >
        <MediumText className="section-paragraph">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </MediumText>
      </Section>
    </Wrapper>
  );
};

export default Rules;
