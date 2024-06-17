import styled from "styled-components";
import theme from "styles/theme";
import { px, py, body1 } from "styles/atomic";

export const StyledButton = styled("button")`
  height: 48px;
  width: 100%;
  ${py("14")};
  ${px("32")};
  border-radius: 30px;
  border: none;
  background-color: #050505d9;
  color: ${theme.colors.light};
  ${body1()};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
  cursor: pointer;
  transition: ${theme.transitions.default};

  ${theme.mq.tablet} {
    height: 56px;
    ${py(4)};
    ${px("120")};
  }

  &:hover {
    background-color: #6a6868;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(5, 5, 5, 0.2);
  }
`;
