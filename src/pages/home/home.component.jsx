import Faq from "../../components/faqs/faqs.component";
import Layout from "../../components/layout/layout.component";
import Header from "../../components/header/header.component";
import HeroSection from "../../components/heroSection/heroSection.component";
import JudgingCriteria from "../../components/judgingCriteria/judgingCriteria.component";
import Section from "../../components/section/section.component";

import Lighbulb from "../../assets/svgs/the-big-idea.svg?react";
// import LookingAtChart from "../../assets/svgs/looking-at-chart.svg?react";
import ManThinking from "../../assets/svgs/man-thinking.svg?react";
import WomanSitting from "../../assets/svgs/woman-sitting.svg?react";

import { MediumText } from "../../globalStyles/text.styles";

import { Wrapper } from "./home.styles";
import Footer from "../../components/footer/footer.component";

const HomePage = () => {
  return (
    <>
      {/* <Layout className="header-herosection"> */}
      <Header />
      <HeroSection />
      {/* </Layout> */}
      {/* <Layout className="intro-rules"> */}
      <Layout className="layout">
        <Section
          title="Introduction to getlinked "
          subtitle="tech Hackathon 1.0"
          component={<Lighbulb />}
          svgClassName="lightbulb"
          headerClassName="big-idea--title"
        >
          <MediumText>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </MediumText>
        </Section>
        <Section
          title="Rules "
          subtitle="and Guidelines"
          component={<WomanSitting />}
          svgClassName="woman-sitting"
          headerClassName="rules--title"
          direction="row-reverse"
        >
          <MediumText>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </MediumText>
        </Section>
        <JudgingCriteria />
        {/* <Section
          title="Judging Criteria "
          subtitle="Key attributes"
          component={<LookingAtChart />}
          svgClassName="people-standing"
          headerClassName="people-standing--title"
        >
          <JudgingCriteria />
        </Section> */}
        <Section
          component={<ManThinking />}
          title="Frequently Ask "
          subtitle="Question"
          svgClassName="faqs"
          headerClassName="faqs--title"
        >
          <Wrapper>
            <MediumText>
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </MediumText>
            <Faq />
          </Wrapper>
        </Section>
      </Layout>
      <Footer />
    </>
  );
};

export default HomePage;
