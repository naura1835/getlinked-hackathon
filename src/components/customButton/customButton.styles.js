import { styled } from "styled-components";

export const Wrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.linearGradient};
  display: grid;
  place-items: center;
  max-width: 10.75rem;
  width: 100%;
  height: 3.3125rem;

  a {
    color: #fff;
  }

  &.back {
    margin-inline: auto;
  }
`;

export const SubmitButton = styled.button`
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.linearGradient};
  color: #fff;
  display: grid;
  place-items: center;
  max-width: 10.75rem;
  width: 100%;
  height: 3.3125rem;
  outline: none;
  border: none;
`;
