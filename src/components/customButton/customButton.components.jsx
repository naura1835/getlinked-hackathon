/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { SubmitButton, Wrapper } from "./customButton.styles";

const CustomButton = ({ className, text, url = "/" }) => {
  return (
    <Wrapper className={className}>
      <Link to={url}>{text}</Link>
    </Wrapper>
  );
};

export const CustomSubmitButton = ({ text, type, handleClick }) => {
  return (
    <SubmitButton type={type} onClick={handleClick}>
      {text}
    </SubmitButton>
  );
};

export default CustomButton;
