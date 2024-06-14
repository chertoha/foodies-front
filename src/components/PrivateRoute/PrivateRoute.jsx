import React, { useState } from "react";
import SignIn from "components/SignIn";
import SignUp from "components/SignUp";
import { Modal } from "components/Modal/Modal";
import { ROUTES } from "config/router";
import { useAuth } from "hooks/useAuth";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const { user } = useAuth();
  const [isLogin, setIslogin] = useState(true);
  const navigate = useNavigate();

  const switchToSignIn = () => setIslogin(true);
  const switchToSignUp = () => setIslogin(false);

  const onCloseModal = () => {
    navigate(ROUTES.HOME);
  };

  return user ? (
    <Component />
  ) : (
    <>
      <Modal onClose={onCloseModal}>
        {isLogin ? (
          <SignIn
            switchForm={switchToSignUp}
            onClose={() => {}}
          />
        ) : (
          <SignUp
            switchForm={switchToSignIn}
            onClose={() => {}}
          />
        )}
      </Modal>
    </>
  );
};

export default PrivateRoute;
