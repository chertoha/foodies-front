import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import { FooterWrapper, Main, RootWrapper } from "./SharedLayout.styled";
import Footer from "components/Footer";

const SharedLayout = () => {
  return (
    <RootWrapper>
      <Header inverse={true} />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </RootWrapper>
  );
};

export default SharedLayout;
