import { Modal } from "components/Modal/Modal";
import SignIn from "components/SignIn";
import SignUp from "components/SignUp";
import { useModalWindow } from "hooks/useModalWindow";
import { useState } from "react";

const TempAuthButton = () => {
  const { isOpen, open, close } = useModalWindow();
  const [isLogin, setIslogin] = useState(false);

  const switchToSignIn = () => setIslogin(true);
  const switchToSignUp = () => setIslogin(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIslogin(false);
          open();
        }}
      >
        Register
      </button>
      <button
        type="button"
        onClick={() => {
          setIslogin(true);
          open();
        }}
      >
        Login
      </button>

      {isOpen && (
        <Modal onClose={close}>
          {isLogin ? (
            <SignIn switchForm={switchToSignUp} />
          ) : (
            <SignUp switchForm={switchToSignIn} />
          )}
        </Modal>
      )}
    </>
  );
};

export default TempAuthButton;
