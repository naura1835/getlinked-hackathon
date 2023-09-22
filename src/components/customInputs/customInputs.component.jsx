/* eslint-disable react/prop-types */
import styled from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const CustomInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  handleChange,
  // hasError,
}) => {
  return (
    <>
      {label && <CustomLabel htmlFor={label}>{name}</CustomLabel>}
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
    </>
  );
};

export const CustomSelect = ({ label, name, placeholder, options }) => {
  return (
    <>
      <CustomLabel>{label}</CustomLabel>
      <CustomSelectWrapper>
        <select id={label} name={name} placeholder={placeholder}>
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.value}
            </option>
          ))}
        </select>
      </CustomSelectWrapper>
    </>
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
    width: 27.3125rem;
    height: 2.9375rem;
  }
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
