import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignUpThunk } from "../../redux/auth/thunks";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import { toast } from "react-toastify";
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
} from "./SignUp.styled";

const schema = object({
  name: string().required().min(2),
  email: string().email("email must be a valid").required(),
  password: string()
    .required("no password provided")
    .min(8, "password should be minimum 8 characters"),
}).required();

const SignUp = ({ switchForm, onClose }) => {
  const dispatch = useDispatch();
  const [eyeState, setEyeState] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async data => {
    dispatch(authSignUpThunk(data))
      .unwrap()
      .then(() => {
        reset();
        onClose();
      })
      .catch(error => {
        toast.error(`${error}`, {
          theme: "light",
        });
      });
  };

  // const onSubmit = async data => {
  //   try {
  //     const res = await dispatch(authSignUpThunk(data));
  //     if (res.type === "authSignUp/fulfilled") {
  //       reset();
  //       onClose();
  //     }
  //     if (res.type === "authSignUp/rejected") {
  //       toast.error(`${res.payload}`, {
  //         theme: "light",
  //       });
  //     }
  //   } catch (error) {
  //     toast.error(error.message, {
  //       theme: "light",
  //     });
  //   }
  // };

  return (
    <FormWripper>
      <TitleStyled>Sign up</TitleStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputContainerStyled>
          <InputStyled
            $border={errors.name ? "#f42424" : ""}
            name="name"
            type="text"
            placeholder="Name*"
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 2,
                message: "Min length of Name is 2 characters",
              },
            })}
          />
          <ErrorTextStyled>{errors.name?.message}</ErrorTextStyled>
        </InputContainerStyled>
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
        <ButtonStyled type="submit">Create</ButtonStyled>
      </FormStyled>
      <TextContainerStyled>
        <TextStyled>I already have an account?</TextStyled>
        <LinkTextStyled onClick={switchForm}>Sign in</LinkTextStyled>
      </TextContainerStyled>
    </FormWripper>
  );
};

export default SignUp;
