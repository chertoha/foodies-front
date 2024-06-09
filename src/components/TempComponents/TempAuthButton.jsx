import { Modal } from "components/Modal/Modal";
import SignIn from "components/SignIn";
import SignUp from "components/SignUp";
import { useModalWindow } from "hooks/useModalWindow";
import TempAuthSwitcher from "./TempAuthSwitcher";
import { useState } from "react";

const TempAuthButton = () => {
  const { isOpen, open, close } = useModalWindow();
  const [isLogin, setIslogin] = useState(false);

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
          {/* <SignUp /> */}
          {/* <SignIn /> */}

          {/* <TempAuthSwitcher
            isLogin={isLogin}
            setIslogin={setIslogin}
          /> */}

          {isLogin ? <SignIn /> : <SignUp />}
        </Modal>
      )}
    </>
  );
};

export default TempAuthButton;
