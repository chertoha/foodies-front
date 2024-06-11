import React, { useState } from "react";
import { ROUTES } from "../../config/router";
import { useNavigate } from "react-router-dom";
import { useModalWindow } from "hooks/useModalWindow";
import { Modal } from "components/Modal/Modal";
import SignUp from "components/SignUp";
import SignIn from "components/SignIn";
import { NavMenuWrapper, NavMenuLink } from "./NavBar.styled";

const NavBar = ({ inverse }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const { isOpen, open, close } = useModalWindow();
  const signIn = () => setIsLogin(true);
  const signUp = () => setIsLogin(false);

  const token = "";

  const onClose = () => {
    close();
  };

  const addRecipe = e => {
    e.preventDefault();
    if (token) {
      navigate("/recipe/add");
    } else {
      open();
    }
  };

  return (
    <>
      <NavMenuWrapper>
        <NavMenuLink
          to={ROUTES.HOME}
          $inverse={inverse}
        >
          Home
        </NavMenuLink>
        <NavMenuLink
          to={ROUTES.ADD_RECIPE}
          onClick={addRecipe}
          $inverse={inverse}
        >
          Add recipe
        </NavMenuLink>
      </NavMenuWrapper>
      {isOpen && (
        <Modal onClose={onClose}>
          {isLogin ? <SignIn switchForm={signUp} /> : <SignUp switchForm={signIn} />}
        </Modal>
      )}
    </>
  );
};

export default NavBar;
