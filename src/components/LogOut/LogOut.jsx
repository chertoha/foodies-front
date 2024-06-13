import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authLogOutThunk } from "../../redux/auth/thunks";

import { toast } from "react-toastify";
import {
  Wripper,
  TitleStyled,
  ButtonStyled,
  ButtonCancelStyled,
  TextStyled,
} from "./LogOut.styled";

const LogOut = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const width = window.innerWidth;

  const handleLogOut = async () => {
    dispatch(authLogOutThunk())
      .unwrap()
      .then(() => {
        onClose();
        navigate("/");
      })
      .catch(error => {
        toast.error(`${error}`, {
          theme: "light",
        });
      });
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

export default LogOut;
