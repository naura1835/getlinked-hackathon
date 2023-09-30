import { CustomSubmitButton } from "../customButton/customButton.components";

import LadyHappy from "../../assets/success.png";
import Wink from "../../assets/wink.png";

import { SmallMediumText, BodyIntroText } from "../../globalStyles/text.styles";
import { Wrapper } from "./modalRegisterBody.styles";

const ModalRegisterBody = ({ setIsOpen }) => {
  return (
    <Wrapper>
      <img src={LadyHappy} alt="woman excited" />
      <BodyIntroText>
        Congratulations you have successfully Registered!
      </BodyIntroText>
      <SmallMediumText>
        Yes, it was easy and you did it! check your mail box for next step
        <img
          src={Wink}
          alt="wink emoji"
          style={{ height: "18px", width: "18px" }}
        />
      </SmallMediumText>
      <CustomSubmitButton
        type="button"
        text="Back"
        handleClick={() => setIsOpen(false)}
      />
    </Wrapper>
  );
};

export default ModalRegisterBody;
