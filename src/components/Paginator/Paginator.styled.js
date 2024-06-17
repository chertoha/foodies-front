import styled from "styled-components";
import theme from "styles/theme";
import { pt } from "styles/atomic";

export const Wrapper = styled.div`
  ${pt(8)}

  ${theme.mq.tablet} {
    ${pt(15)}
  }
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  color: ${theme.colors.accent};
  transition: ${theme.transitions.default};
  padding: 0;

  border: 1px solid ${theme.colors.accent};

  font-size: 14px;
  font-weight: 400;

  text-align: center;

  &.active,
  &:hover,
  &:focus {
    color: ${theme.colors.light};
    background-color: ${theme.colors.accent};
  }
`;
