import { styled } from "styled-components";

export const Wrapper = styled.div`
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
`;
