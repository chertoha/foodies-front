import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authLogOutThunk } from "../../redux/auth/thunks";
import {
  Wripper,
  TitleStyled,
  ButtonStyled,
  ButtonCancelStyled,
  TextStyled,
} from "./LogOut.styled";

const logOut = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const width = window.innerWidth;

  const handleLogOut = async () => {
    const token = "";
    try {
      await dispatch(authLogOutThunk(token));
      reset();
      onClose();
      navigate("/");
    } catch (error) {
      console.log(error);
      // "notification error"
    }
  };

  return (
    <Wripper>
      <TitleStyled>{width < 767 ? "Log out" : "Are you logging out?"}</TitleStyled>
      <TextStyled>You can always log back in at my time.</TextStyled>

      <ButtonStyled
        type="button"
        onClick={handleLogOut}
      >
        Log out
      </ButtonStyled>

      <ButtonCancelStyled
        type="button"
        onClick={() => onClose()}
      >
        Cancel
      </ButtonCancelStyled>
    </Wripper>
  );
};

export default logOut;
