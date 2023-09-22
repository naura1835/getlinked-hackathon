/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { SubmitButton, Wrapper } from "./customButton.styles";

const CustomButton = ({ className, text }) => {
  return (
    <Wrapper className={className}>
      <Link to="/">{text}</Link>
    </Wrapper>
  );
};

export const CustomSubmitButton = ({ text, type }) => {
  return <SubmitButton type={type}>{text}</SubmitButton>;
};

export default CustomButton;
