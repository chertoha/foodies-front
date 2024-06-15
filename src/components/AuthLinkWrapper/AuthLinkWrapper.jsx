import { Modal } from "../Modal/Modal";
import SignIn from "../SignIn/SignIn";
import { useModalWindow } from "../../hooks/useModalWindow";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import SignUp from "components/SignUp";
import { useState } from "react";

const AuthLinkWrapper = ({ to, avatar }) => {
  const { user } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const { close, isOpen, open } = useModalWindow();

  const switchToSignIn = () => setIsLogin(true);
  const switchToSignUp = () => setIsLogin(false);

  return (
    <>
      {user ? <Link to={to}>{avatar}</Link> : <div onClick={open}>{avatar}</div>}

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

export default AuthLinkWrapper;
