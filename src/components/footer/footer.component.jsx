import LinkedIn from "../../assets/svgs/linkedin.svg?react";
import Instagram from "../../assets/svgs/instagram.svg?react";
import Facebook from "../../assets/svgs/facebook.svg?react";
import X from "../../assets/svgs/x.svg?react";
import Contact from "../../assets/contact.png";
import LocationIcon from "../../assets/location.png";

import {
  Heading4,
  HighLightText,
  MediumText,
} from "../../globalStyles/text.styles";
import {
  FooterList,
  FooterListItem,
  FooterLogo,
  FooterSection,
  Terms,
  Wrapper,
} from "./footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <FooterSection>
        <FooterLogo>
          get<HighLightText>linked</HighLightText>
        </FooterLogo>
        <MediumText>
          Getlinked Tech Hackathon is a technology innovation program
          established by a group of organizations with the aim of showcasing
          young and talented individuals in the field of technology
        </MediumText>
        <Terms>
          Terms of Use <span /> Privarcy Policy
        </Terms>
      </FooterSection>
      <FooterSection>
        <Heading4>Useful Links</Heading4>
        <FooterList>
          <FooterListItem>Overview</FooterListItem>
          <FooterListItem>Timeline</FooterListItem>
          <FooterListItem>FAQs</FooterListItem>
          <FooterListItem>Register</FooterListItem>
          <FooterListItem>
            <HighLightText style={{ fontSize: "0.75rem" }}>
              Follow us
            </HighLightText>
            <Instagram />
            <X />
            <Facebook />
            <LinkedIn />
          </FooterListItem>
        </FooterList>
      </FooterSection>
      <FooterSection>
        <Heading4>Contact Us</Heading4>
        <FooterList>
          <FooterListItem>
            <img src={Contact} alt="contact" />
            +234 679 81819
          </FooterListItem>
          <FooterListItem style={{ width: "8.563rem" }}>
            <img src={LocationIcon} alt="contact" />
            27,Alara Street Yaba 100012 Lagos State
          </FooterListItem>
        </FooterList>
      </FooterSection>
      <FooterSection>All rights reserved. © getlinked Ltd.</FooterSection>
    </Wrapper>
  );
};

export default Footer;
