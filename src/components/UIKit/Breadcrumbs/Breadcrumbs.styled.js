import styled from "styled-components";
import { Link } from "react-router-dom";

export const BreadcrumbsWrapper = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 8px;

  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.normal};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: -0.02em;
`;

export const HomeLink = styled(Link)`
  color: rgba(5, 5, 5, 0.4);

  transition: ${p => p.theme.transitions.prop("color")};
  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;
