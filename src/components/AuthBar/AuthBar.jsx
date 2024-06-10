import React, { useState } from "react";
import { SlideButton, BtnWrapper } from "./AuthBar.styled";

const AuthBar = () => {
  const [isSignUpFirst, setIsSignUpFirst] = useState(true);

  const toggleButtons = () => {
    setIsSignUpFirst(!isSignUpFirst);
  };

  return (
    <BtnWrapper>
      <SlideButton
        type="button"
        $position={isSignUpFirst ? "left" : "right"}
        onClick={toggleButtons}
        $colors={isSignUpFirst ? "clear" : "black"}
        aria-label="Sign up"
      >
        Sign up
      </SlideButton>
      <SlideButton
        type="button"
        $position={isSignUpFirst ? "right" : "left"}
        onClick={toggleButtons}
        $colors={isSignUpFirst ? "black" : "clear"}
        aria-label="Sign in"
      >
        Sign in
      </SlideButton>
    </BtnWrapper>
  );
};

export default AuthBar;
