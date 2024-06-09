import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { FooterWrapper, Main, RootWrapper } from "./SharedLayout.styled";
import Footer from "components/Footer";
// import Header from "components/Header/Header";

const SharedLayout = () => {
  return (
    <RootWrapper>
      {/* <Header /> */}
      <div style={{ outline: "1px solid green", flexShrink: 0 }}>
        <p>Header</p>
      </div>

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
