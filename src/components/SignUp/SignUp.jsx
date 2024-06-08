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
} from "./SignUp.styled";

const schema = object({
  name: string().required().min(2),
  email: string().email("email must be a valid").required(),
  password: string()
    .required("no password provided")
    .min(8, "password is too short - should be minimum 8 characters")
    .matches(/[a-zA-Z]/, "password can only contain Latin letters"),
}).required();

const SignUp = () => {
  const [eyeState, setEyeState] = useState(true);
  const [state, setState] = useState({});
  const [login, setLogin] = useState(false);
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

  const onSubmit = data => {
    setState(data);
    reset();
  };

  return (
    <FormWripper>
      <TitleStyled>Sign up</TitleStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          $border={errors.name ? "red" : ""}
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
        <InputStyled
          $border={errors.email ? "red" : ""}
          name="email"
          type="text"
          placeholder="Email*"
          {...register("email", { required: "Email is required" })}
        />
        <ErrorTextStyled>{errors.email?.message}</ErrorTextStyled>
        <InputContainerStyled>
          <InputStyled
            $border={errors.password ? "red" : ""}
            name="password"
            type={eyeState ? "password" : "text"}
            autoComplete="on"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          <IconStyled
            stroke={eyeState ? "black" : "transparent"}
            onClick={() => setEyeState(!eyeState)}
          >
            <use href={sprite + "#icon-password"}></use>
          </IconStyled>
        </InputContainerStyled>
        <ErrorTextStyled>{errors.password?.message}</ErrorTextStyled>
        <ButtonStyled type="submit">Create</ButtonStyled>
      </FormStyled>
      <TextContainerStyled>
        <TextStyled>I already have an account?</TextStyled>
        <LinkTextStyled onClick={() => setLogin(true)}>Sign in</LinkTextStyled>
      </TextContainerStyled>
    </FormWripper>
  );
};

export default SignUp;
