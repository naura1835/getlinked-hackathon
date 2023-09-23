import { useEffect } from "react";
import gsap from "gsap";

import Faq from "../../components/faqs/faqs.component";
import Layout from "../../components/layout/layout.component";
import Header from "../../components/header/header.component";
import HeroSection from "../../components/heroSection/heroSection.component";
import JudgingCriteria from "../../components/judgingCriteria/judgingCriteria.component";
import Footer from "../../components/footer/footer.component";
import Introduction from "../../components/introduction/introduction.components";
import Rules from "../../components/rules/rules.component";
import TimeLine from "../../components/timeline/timeline.component";
import Prizes from "../../components/prizes/prizes.component";
import Partners from "../../components/partners/partners.component";
import PrivacyTerms from "../../components/privacyTerms/privacyTerms.component";

import ScrollTrigger from "gsap/ScrollTrigger";

import {
  animateSectionParagraph,
  animateSectionTitle,
} from "../../utils/animation";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    const titles = gsap.utils.toArray(".title");
    const paragraphs = gsap.utils.toArray(".section-paragraph");

    titles.forEach((elem) => {
      animateSectionTitle(elem);
    });
    paragraphs.forEach((elem) => {
      animateSectionParagraph(elem);
    });
  }, []);
  return (
    <>
      <Layout className="header-herosection">
        <Header />
        <HeroSection />
      </Layout>
      <Layout className="layout">
        <Introduction className="title" />
        <Rules className="title" />
        <JudgingCriteria className="title" />
        <Faq className="title" />
        <TimeLine className="title" />
        <Prizes className="title" />
        <Partners className="title" />
        <PrivacyTerms className="title" />
        <Footer />
      </Layout>
    </>
  );
};

export default HomePage;
