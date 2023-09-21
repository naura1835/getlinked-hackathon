import { styled } from "styled-components";

export const FaqWrapper = styled.ol`
  list-style-type: none;
  margin-top: 2.86rem;
`;
export const FaqItem = styled.li`
  width: 100%;
  min-height: 48px;
  height: auto;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0rem -0.0625rem ${({ theme }) => theme.colors.phlox};
`;
