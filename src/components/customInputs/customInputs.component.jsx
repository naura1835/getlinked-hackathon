/* eslint-disable react/prop-types */
import styled from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const CustomInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  labelText,
  handleChange,
  // hasError,
}) => {
  return (
    <div>
      {labelText && <CustomLabel htmlFor={label}>{labelText}</CustomLabel>}
      <CustomInputBar>
        <input
          id={label}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
      </CustomInputBar>
    </div>
  );
};

export const CustomSelect = ({
  label,
  labelText,
  name,
  placeholder,
  optionsArray,
  handleChange,
}) => {
  return (
    <div>
      <CustomLabel htmlFor={label}>{labelText}</CustomLabel>
      <CustomSelectWrapper>
        <select
          id={label}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
        >
          {optionsArray &&
            optionsArray.map((opt) => (
              <option key={opt.id} value={opt.id || opt}>
                {opt.name || opt}
              </option>
            ))}
        </select>
      </CustomSelectWrapper>
    </div>
  );
};

export const CustomTextarea = ({
  placeholder,
  name,
  value,
  handleChange,
  // hasError,
}) => {
  return (
    <CustomTextareWrapper>
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        required
      ></textarea>
    </CustomTextareWrapper>
  );
};

export const CustomCheckBox = ({ labelText, name, handleChange }) => {
  return (
    <CheckboxWrapper>
      <input type="checkbox" name={name} onChange={handleChange} />
      <span>{labelText}</span>
    </CheckboxWrapper>
  );
};

export const CustomTextareWrapper = styled.div`
  width: 100%;
  height: 10rem;
  border-radius: 0.25rem;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  > textarea {
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: none;
    outline: none;
    background-color: transparent;
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    max-width: 27.3125rem;
  }
`;

export const CustomLabel = styled.label`
  color: #fff;
  font-family: "Montserrat";
  font-size: 0.8125rem;
  font-weight: 400;
  margin-bottom: 0.94rem;
`;

export const CheckboxWrapper = styled(CustomLabel)`
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;

  & > input {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    margin: 0;
    margin-right: 1rem;
    font: inherit;
    color: #fff;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 0.125rem;
    border: 1px solid #fff;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em #ff26b9;
      background-color: CanvasText;
    }

    &:checked::before {
      transform: scale(1);
    }
  }
`;

export const CustomInputBar = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 2.4375rem;
  border-radius: 0.25rem;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  > input {
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.03);
    width: 100%;
    height: 100%;
    padding: 0.2rem 1rem;

    &:-internal-autofill-selected {
      background-color: transparent;
    }
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    max-width: 27.3125rem;
    width: 100%;
    height: 2.9375rem;
  }
  /* @media ${breakpointsUp["desktop-up"]} {
    width: 27.3125rem;
    height: 2.9375rem;
  } */
`;

export const CustomSelectWrapper = styled.div`
  display: grid;
  place-items: center;
  max-width: 9.6875rem;
  width: 100%;
  height: 2.4375rem;
  border-radius: 0.25rem;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  > select {
    width: 100%;
    max-width: 8.4375rem;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;

    > option {
      background: #150e28;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    height: 2.9375rem;
    max-width: 18.4375rem;

    > select {
      max-width: 16.4375rem;
    }
  }
`;
