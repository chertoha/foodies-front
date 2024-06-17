import Container from "components/Container";
import MainTitle from "components/MainTitle";
import SomethingNotFound from "components/NotFound";

import { ROUTES } from "config/router";
import { GoHomeLink, LinkWrapper, TitleWrapper } from "./ErrorLoading.styled";

const ErrorLoading = () => {
  return (
    <>
      <Container>
        <SomethingNotFound />

        <TitleWrapper>
          <MainTitle label="Something get wrong. Please try again" />
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

export default ErrorLoading;
