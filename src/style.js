import styled from "styled-components";
import { ReactComponent as User } from "./icons/user.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a393e;
  width: 100%;
  height: 100vh;
  color: white;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 360px;
  height: 380px;
  border: 2px solid #445859;
  margin: 10px;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Description = styled.div`
  color: white;
  font-weight: 400;
  font-size: 18px;
  margin-top: 20px;
`;

export const LoginHere = styled.div`
  color: #e7c961;
  font-weight: 800;
  font-size: 30px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #394a4a;
  border-radius: 4px;
  background-color: rgba(104, 105, 102, 0.2);
  margin-top: 20px;
  outline: none;
  padding-left: 15px;
  color: #fff;
  font-size: 22px;
`;

export const UserIcon = styled(User)`
  position: absolute;
  top: 50%;
  left: 10px;
  width: 20px;
  transform: translate(-50%, -50%);
  fill: white;
`;
