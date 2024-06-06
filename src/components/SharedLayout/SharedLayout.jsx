import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { FooterWrapper, Main, RootWrapper } from "./SharedLayout.styled";
import Socials from "components/UIKit/Socials";
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
        <p>Footer</p>
        <Socials/>
      </FooterWrapper>
    </RootWrapper>
  );
};

export default SharedLayout;
