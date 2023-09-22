import styled from "styled-components";
import Header from "../../components/header/header.component";
import { breakpointsUp } from "../../globalStyles/breakpoints";

const Contact = () => {
  return (
    <>
      <Header />
      <p>hello from contact</p>
      <></>
    </>
  );
};

export default Contact;

const CustomSelect = () => {
  return (
    <>
      <CustomLabel></CustomLabel>
      <CustomSelectWrapper>
        {/* <select id={} name={}> */}
        <select placeholder="select your category">
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
      </CustomSelectWrapper>
    </>
  );
};

const CustomLabel = styled.label`
  color: #fff;
  font-family: "Montserrat";
  font-size: 0.8125rem;
  font-weight: 400;
  margin-bottom: 0.94rem;
`;

const CustomSelectWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 9.6875rem;
  height: 2.4375rem;
  border-radius: 0.25rem;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  > select {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;

    > option {
      background: #150e28;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;
