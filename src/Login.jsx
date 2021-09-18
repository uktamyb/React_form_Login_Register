import React from "react";
import {
  Wrapper,
  Description,
  LoginHere,
  InputWrapper,
  Input,
  UserIcon,
} from "./style";

function Login() {
  return (
    <Wrapper>
      <Description>Already have an account?</Description>
      <LoginHere>Login Here</LoginHere>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="username" />
      </InputWrapper>
      <InputWrapper>
        {/* <UserIcon /> */}
        <Input placeholder="password" />
      </InputWrapper>
    </Wrapper>
  );
}

export default Login;
