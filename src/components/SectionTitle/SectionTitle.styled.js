import styled from "styled-components";
import { heading3 } from "styles/atomic";
import theme from "styles/theme";

export const TitleSection = styled.h3`
  ${heading3()}
  margin-right: auto;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.32px;
  @media screen and (min-width: 769px) {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.4px;
  }
`;
