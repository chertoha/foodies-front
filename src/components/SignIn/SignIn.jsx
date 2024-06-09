import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import sprite from "assets/images/icons/sprite.svg";
import {
  FormWripper,
  TitleStyled,
  FormStyled,
  InputStyled,
  InputContainerStyled,
  IconStyled,
  ButtonStyled,
  TextContainerStyled,
  TextStyled,
  LinkTextStyled,
  ErrorTextStyled,
} from "./SignIn.styled";
import { useNavigate } from "react-router-dom";

const schema = object({
  email: string().email("email must be a valid").required(),
  password: string()
    .required("no password provided")
    .min(8, "password should be minimum 8 characters"),
}).required();

const SignIn = () => {
  const navigate = useNavigate();
  const [eyeState, setEyeState] = useState(true);
  const [_signUp, setSignUp] = useState(false);
  const [_state, setState] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = data => {
    setState(data);
    reset();
    navigate("/closeModal");
  };

  return (
    <FormWripper>
      <TitleStyled>Sign in</TitleStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputContainerStyled>
          <InputStyled
            $border={errors.email ? "#f42424" : ""}
            name="email"
            type="text"
            placeholder="Email*"
            {...register("email", { required: "Email is required" })}
          />
          <ErrorTextStyled>{errors.email?.message}</ErrorTextStyled>
        </InputContainerStyled>
        <InputContainerStyled>
          <InputStyled
            $border={errors.password ? "#f42424" : ""}
            name="password"
            type={eyeState ? "password" : "text"}
            autoComplete="on"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          <IconStyled onClick={() => setEyeState(!eyeState)}>
            <use href={sprite + (eyeState ? "#icon-eye" : "#icon-eye-off")}></use>
          </IconStyled>
          <ErrorTextStyled>{errors.password?.message}</ErrorTextStyled>
        </InputContainerStyled>
        <ButtonStyled type="submit">Sign in</ButtonStyled>
      </FormStyled>
      <TextContainerStyled>
        <TextStyled>Don't have an account?</TextStyled>
        <LinkTextStyled onClick={() => setSignUp(true)}>Create an account</LinkTextStyled>
      </TextContainerStyled>
    </FormWripper>
  );
};

export default SignIn;
