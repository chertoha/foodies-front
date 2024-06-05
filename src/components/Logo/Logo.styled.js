import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "styles/theme";

export const LogoLink = styled(Link)`
  color: ${theme.colors.light};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.extraBold};
  line-height: ${theme.lineHeights.normal};
  letter-spacing: -0.025em;
  text-transform: lowercase;
  text-decoration: none;

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes["2xl"]};
    letter-spacing: -0.03em;
  }

  ${theme.mq.desktop} {
    font-size: ${theme.fontSizes["2xl"]};
    letter-spacing: -0.03em;
  }
`;