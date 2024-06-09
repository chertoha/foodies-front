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
        $position={isSignUpFirst ? "left" : "right"}
        onClick={toggleButtons}
        $colors={isSignUpFirst ? "clear" : "black"}
      >
        Sign up
      </SlideButton>
      <SlideButton
        $position={isSignUpFirst ? "right" : "left"}
        onClick={toggleButtons}
        $colors={isSignUpFirst ? "black" : "clear"}
      >
        Sign in
      </SlideButton>
    </BtnWrapper>
  );
};

export default AuthBar;
