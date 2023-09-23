/* eslint-disable react/prop-types */
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Liberty from "../../assets/liberty-company.png";
import LibertyLogo from "../../assets/liberty-company-logo.png";
import Paybox from "../../assets/Paybox.png";
import Vizual from "../../assets/vizual-plus.png";
import Winwise from "../../assets/Winwise.png";
import Wisper from "../../assets/wisper-logo-white.png";

import { Heading2, MediumText } from "../../globalStyles/text.styles";
import { Partner, PartnerGrid, Wrapper } from "./partners.styles";

const Partners = ({ className }) => {
  useEffect(() => {
    gsap.set(".partners-description", { y: 20, autoAlpha: 0 });

    gsap.to(".partners-description", {
      scrollTrigger: {
        trigger: ".partners-description",
        start: "top center+=100",
      },
      y: 0,
      autoAlpha: 1,
      delay: 0.2,
    });
  });
  return (
    <Wrapper>
      <Heading2 className={className}>Partners and Sponsors</Heading2>
      <MediumText className="partners-description">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </MediumText>
      <PartnerGrid>
        <Partner>
          <img src={LibertyLogo} />
        </Partner>
        <Partner>
          <img src={Liberty} />
        </Partner>
        <Partner>
          <img src={Winwise} />
        </Partner>
        <Partner>
          <img src={Wisper} />
        </Partner>
        <Partner>
          <img src={Paybox} />
        </Partner>
        <Partner>
          <img src={Vizual} />
        </Partner>
      </PartnerGrid>
    </Wrapper>
  );
};

export default Partners;
