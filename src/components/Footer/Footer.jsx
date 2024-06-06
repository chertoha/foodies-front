import Container from "components/Container";
import Logo from "components/Logo/Logo";
import Socials from "components/UIKit/Socials/Socials";
import { CopyrightWrapper, Inner, Outer } from "./Footer.styled";

const Footer = () => {
  return (
    <>
      <footer>
        <Outer>
          <Container>
            <Inner>
              <Logo />
              <Socials />
            </Inner>
          </Container>
        </Outer>

        <CopyrightWrapper>
          <p>@2024, Foodies. All rights reserved</p>
        </CopyrightWrapper>
      </footer>
    </>
  );
};

export default Footer;
