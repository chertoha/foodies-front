import { Modal } from "components/Modal/Modal";
import { Button, Label, Wrapper } from "./AuthToggler.styled";
import SignIn from "components/SignIn";
import SignUp from "components/SignUp";
import { useModalWindow } from "hooks/useModalWindow";
import { useState } from "react";

const AuthToggler = () => {
  const { isOpen, open, close } = useModalWindow();
  const [isLogin, setIslogin] = useState(false);

  const [isSignInBtnActive, setIsSignInBtnActive] = useState(false);
  const [isSignUpBtnActive, setIsSignUpBtnActive] = useState(true);

  const openSignUpForm = () => {
    setIslogin(false);
    if (!isSignUpBtnActive) {
      setIsSignUpBtnActive(!isSignUpBtnActive);
    }
    if (isSignInBtnActive) {
      setIsSignInBtnActive(!isSignInBtnActive);
    }
    open();
  };

  const openSignInForm = () => {
    setIslogin(true);
    if (!isSignInBtnActive) {
      setIsSignInBtnActive(!isSignInBtnActive);
    }
    if (isSignUpBtnActive) {
      setIsSignUpBtnActive(!isSignUpBtnActive);
    }
    open();
  };

  const switchToSignIn = () => {
    setIslogin(true);
    setIsSignInBtnActive(true);
    setIsSignUpBtnActive(false);
  };
  const switchToSignUp = () => {
    setIslogin(false);
    setIsSignInBtnActive(false);
    setIsSignUpBtnActive(true);
  };

  return (
    <>
      <Wrapper>
        <Button
          type="button"
          $color={isSignInBtnActive ? "#ffffff" : "#050505"}
          $backgroundColor={isSignInBtnActive ? "#050505" : "#FFFFFF"}
          onClick={openSignInForm}
        >
          <Label>Sign in</Label>
        </Button>

        <Button
          type="button"
          $color={isSignUpBtnActive ? "#ffffff" : "rgba(5, 5, 5, 1)"}
          $backgroundColor={isSignUpBtnActive ? "rgba(5, 5, 5, 1)" : "#FFFFFF"}
          onClick={openSignUpForm}
        >
          <Label>Sign up</Label>
        </Button>
      </Wrapper>
      {isOpen && (
        <Modal onClose={close}>
          {isLogin ? (
            <SignIn
              switchForm={switchToSignUp}
              onClose={close}
            />
          ) : (
            <SignUp
              switchForm={switchToSignIn}
              onClose={close}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default AuthToggler;
