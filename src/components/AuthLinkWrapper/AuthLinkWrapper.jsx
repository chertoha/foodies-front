import { Modal } from "../Modal/Modal";
import SignIn from "../SignIn/SignIn";
import { useModalWindow } from "../../hooks/useModalWindow";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignUp from "components/SignUp";

const AuthLinkWrapper = ({ to, avatar }) => {
  const { user } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const { close, isOpen, open } = useModalWindow();

  const switchToSignIn = () => setIsLogin(true);
  const switchToSignUp = () => setIsLogin(false);

  return (
    <>
      {user ? <Link to={to}>{avatar}</Link> : <button onClick={open}>{avatar}</button>}

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

export default AuthLinkWrapper;
