/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Wrapper } from "./customButton.styles";

const CustomButton = ({ className, text }) => {
  return (
    <Wrapper className={className}>
      <Link to="/">{text}</Link>
    </Wrapper>
  );
};

export default CustomButton;
