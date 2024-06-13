import { Modal } from "components/Modal/Modal";
import { Button, Label, Wrapper } from "./AuthToggler.styled";
import SignIn from "components/SignIn";
import SignUp from "components/SignUp";
import { useModalWindow } from "hooks/useModalWindow";
import { useState } from "react";

const AuthToggler = () => {
  const { isOpen, open, close } = useModalWindow();
  const [isLogin, setIslogin] = useState(false);

  const openSignUpForm = () => {
    setIslogin(false);
    open();
  };

  const openSignInForm = () => {
    setIslogin(true);
    open();
  };

  const switchToSignIn = () => setIslogin(true);
  const switchToSignUp = () => setIslogin(false);

  return (
    <>
      <Wrapper>
        <Button
          type="button"
          onClick={openSignInForm}
        >
          <Label>Sign in</Label>
        </Button>

        <Button
          type="button"
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
