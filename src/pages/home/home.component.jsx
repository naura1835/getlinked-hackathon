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
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

import { useEffect } from "react";
import { animateSectionTitle } from "../../utils/animation";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".title");

    sections.forEach((elem) => {
      animateSectionTitle(elem, true);
    });
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <Layout className="layout">
        <Introduction className="title" />
        <Rules className="title" />
        <JudgingCriteria className="title" />
        <Faq className="title" />
        <TimeLine className="title" />
        <Prizes className="title" />
        <Partners className="title" />
        <PrivacyTerms className="title" />
      </Layout>
      <Footer />
    </>
  );
};

export default HomePage;
