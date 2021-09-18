import React from "react";
import {
  Wrapper,
  Description,
  LoginHere,
  InputWrapper,
  Input,
  UserIcon,
} from "./style";

function Register() {
  return (
    <Wrapper>
      <Description>Don't have an account yet?</Description>
      <LoginHere>Register Now</LoginHere>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="Desired Username" />
      </InputWrapper>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="Password" />
      </InputWrapper>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="Confirm Password" />
      </InputWrapper>
    </Wrapper>
  );
}

export default Register;
