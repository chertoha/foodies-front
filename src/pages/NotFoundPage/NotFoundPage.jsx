import styled from "styled-components";
import theme from "styles/theme";
import Container from "components/Container";
import MainTitle from "components/MainTitle";
import NotFound from "components/NotFound";

import { ROUTES } from "config/router";
import { Link } from "react-router-dom";
import { body1, mt, px, py } from "styles/atomic";

export const TitleWrapper = styled("div")`
  text-align: center;

  ${theme.mq.tablet} {
    ${mt(5)};
  }
`;

export const LinkWrapper = styled("div")`
  ${mt(6)}
  text-align: center;

  ${theme.mq.tablet} {
    ${mt(10)};
  }
`;

export const GoHomeLink = styled(Link)`
  display: inline-block;
  ${px(5)};
  ${py(3)};

  ${body1()};
  border: 1px solid ${p => p.theme.colors.dark};
  border-radius: ${p => p.theme.radii.lg};
  color: ${p => p.theme.colors.dark};
  text-transform: uppercase;

  transition: ${p => p.theme.transitions.default};
  &:hover {
    background-color: ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.white};
  }

  ${theme.mq.tablet} {
    ${px(8)};
    ${py(4)};
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <NotFound />

        <TitleWrapper>
          <MainTitle label="404 - Page not found" />
        </TitleWrapper>

        <LinkWrapper>
          <GoHomeLink
            to={ROUTES.HOME}
            replace={true}
          >
            Go to home page
          </GoHomeLink>
        </LinkWrapper>
      </Container>
    </>
  );
};

export default NotFoundPage;
