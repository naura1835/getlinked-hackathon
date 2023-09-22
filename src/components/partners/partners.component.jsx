import Liberty from "../../assets/liberty-company.png";
import LibertyLogo from "../../assets/liberty-company-logo.png";
import Paybox from "../../assets/Paybox.png";
import Vizual from "../../assets/vizual-plus.png";
import Winwise from "../../assets/Winwise.png";
import Wisper from "../../assets/wisper-logo-white.png";

import { Heading2, MediumText } from "../../globalStyles/text.styles";
import { Partner, PartnerGrid, Wrapper } from "./partners.styles";

const Partners = ({ className }) => {
  return (
    <Wrapper>
      <Heading2 className={className}>Partners and Sponsors</Heading2>
      <MediumText>
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
