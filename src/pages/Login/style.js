import styled from "styled-components";
import { Form, Layout, Button } from "antd";

const MyForm = styled(Form)`
  width: 300px;
  text-align: center;
`;

const LoginLayout = styled(Layout)`
  background-color:white;
  display:flex;
  flex-direction:colum;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ForgotTag = styled.a`
  margin-top:1.5rem;
  text-align:center;
  text-decoration:underline;
  color: #2F71DA;
`;

const WelcomeBack = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');

  font-family: 'Noto Sans', sans-serif;
  font-weight:700;
  font-size:30px;
  color: #2F71DA;
  margin-bottom: 1.5rem;
  text-align:center;
`;

const Logo = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');
  font-family: 'Noto Sans', sans-serif;
  font-weight:800;
  font-size:48px;
  color: #2F71DA;
  text-align:center;
  margin-bottom:30px;
`;

const LoginButton = styled(Button)`
  width: 8rem;
`;

export { MyForm, Logo, WelcomeBack, LoginLayout, ForgotTag, LoginButton };
