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

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Layout className="layout">
        <Introduction />
        <Rules />
        <JudgingCriteria />
        <Faq />
        <TimeLine />
        <Prizes />
        <Partners />
        <PrivacyTerms />
      </Layout>
      <Footer />
    </>
  );
};

export default HomePage;
