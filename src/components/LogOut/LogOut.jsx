import React from "react";
import {
  Wripper,
  TitleStyled,
  ButtonStyled,
  ButtonCancelStyled,
  TextStyled,
} from "./LogOut.styled";

const logOut = () => {
  const width = window.innerWidth;

  const handleLogOut = () => {
    console.log("LogoutRadax");
    console.log("close modal");
    console.log("notification logOut");
  };

  return (
    <Wripper>
      <TitleStyled>{width < 767 ? "Log out" : "Are you logging out?"}</TitleStyled>
      <TextStyled>You can always log back in at my time.</TextStyled>

      <ButtonStyled
        type="button"
        onClick={handleLogOut}
      >
        Log out
      </ButtonStyled>

      <ButtonCancelStyled
        type="button"
        onClick={() => console.log("close modal")}
      >
        Cancel
      </ButtonCancelStyled>
    </Wripper>
  );
};

export default logOut;
