import React, { useState } from "react";
import sprite from "assets/images/icons/sprite.svg";
import { useDispatch } from "react-redux";
import { authSignInThunk } from "../../redux/auth/thunks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { toast } from "react-toastify";
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

const schema = object({
  email: string().email("email must be a valid").required(),
  password: string()
    .required("no password provided")
    .min(3, "password should be minimum 8 characters"),
}).required();

const SignIn = ({ switchForm, onClose }) => {
  const dispatch = useDispatch();
  const [eyeState, setEyeState] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const watchCredentials = watch();

  const onSubmit = async data => {
    dispatch(authSignInThunk(data))
      .unwrap()
      .then(() => {
        reset();
        onClose();
      })
      .catch(error => {
        toast.error(`${error.response.data.message}`, {
          theme: "light",
        });
      });
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
        <ButtonStyled
          type="submit"
          disabled={!watchCredentials.email || !watchCredentials.password}
        >
          Sign in
        </ButtonStyled>
      </FormStyled>
      <TextContainerStyled>
        <TextStyled>Don't have an account?</TextStyled>
        <LinkTextStyled onClick={switchForm}>Create an account</LinkTextStyled>
      </TextContainerStyled>
    </FormWripper>
  );
};

export default SignIn;
