/* eslint-disable react/prop-types */
import styled from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const CustomInput = ({
  label,
  name,
  type,
  placeholer,
  ...otherProps
}) => {
  return (
    <>
      <CustomLabel htmlFor={label}>{name}</CustomLabel>
      <CustomInputBar>
        <input
          id={label}
          name={name}
          type={type}
          placeholder={placeholer}
          {...otherProps}
        />
      </CustomInputBar>
    </>
  );
};

export const CustomSelect = () => {
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

const CustomInputBar = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  max-width: 18.4375rem;
  height: 2.4375rem;
  border-radius: 0.25rem;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  > input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    max-width: 16.4375rem;
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    height: 2.9375rem;
  }
`;

const CustomSelectWrapper = styled.div`
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
