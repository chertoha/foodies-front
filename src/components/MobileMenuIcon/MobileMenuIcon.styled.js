import styled from "styled-components";
import { flexCenter } from "../../styles/atomic";
import theme from "../../styles/theme";

export const MobileMenuIconWrapper = styled.button`
  display: none;

  @media screen and (max-width: 767px) {
    cursor: pointer;
    border: none;
    /* background-color: ${theme.colors.light}; */
    background-color: none;
    color: ${p => (p.inverse ? p.theme.colors.light : p.theme.colors.accent)};
    ${flexCenter()}

    &:focus {
      outline: none;
    }
  }
`;
