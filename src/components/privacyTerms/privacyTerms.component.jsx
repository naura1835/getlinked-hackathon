import Section from "../section/section.component";

import Lock from "../../assets/svgs/lock.svg?react";
// import LockBg from "../../assets/svgs/logo-bg.svg?react";
import {
  Policy,
  PolicyList,
  PolicyListItem,
  PolicyWrapper,
  Title,
  Wrapper,
} from "./privacyTerms.style";
import { SmallMediumText } from "../../globalStyles/text.styles";
import CustomButton from "../customButton/customButton.components";

const PrivacyTerms = () => {
  return (
    <Wrapper>
      <Section
        title="Privacy Policy and "
        subtitle="Terms"
        component={<Lock />}
      >
        <SmallMediumText>Last updated on September 12, 2023</SmallMediumText>
        <SmallMediumText>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </SmallMediumText>
        <PolicyWrapper>
          <SmallMediumText>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </SmallMediumText>
          <Policy>
            <Title>Licensing Policy</Title>
            <SmallMediumText>
              Here are terms of our Standard License:
            </SmallMediumText>
            <PolicyList>
              <PolicyListItem>
                <SmallMediumText>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </SmallMediumText>
              </PolicyListItem>
              <PolicyListItem>
                <SmallMediumText>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </SmallMediumText>
              </PolicyListItem>
            </PolicyList>
            <CustomButton text="Read More" />
          </Policy>
        </PolicyWrapper>
      </Section>
    </Wrapper>
  );
};

export default PrivacyTerms;

// const SheildLock = () => {
//   return (
//     <>
//       <LockBg />
//       <Lock />
//     </>
//   );
// };
