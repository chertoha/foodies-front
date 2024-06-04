import { ROUTES } from "config/router";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  /* text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.normal};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: -0.02em; */

  color: rgba(5, 5, 5, 0.4);

  transition: ${p => p.theme.transitions.prop("color")};
  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;

const Breadcrumbs = () => {
  return (
    <BreadcrumbsWrapper>
      <HomeLink to={ROUTES.HOME}>Home</HomeLink> / <p>Add recipe</p>
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
