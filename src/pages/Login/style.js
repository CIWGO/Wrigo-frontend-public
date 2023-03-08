import styled from "styled-components";
import { Form, Layout } from "antd";

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
  text-align:center;
  text-decoration:underline;
  color: #2F71DA;
`;

const WelcomeBack = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');

  font-family: 'Noto Sans', sans-serif;
  font-weight:700;
  font-size:36px;
  color: #2F71DA;
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

const ButtonLayout = styled.div`
  background-color:"red";
  display:"flex";
  flex-direction:"row";
  justify-content:"space-between"
`;

export { MyForm, Logo, WelcomeBack, LoginLayout, ForgotTag, ButtonLayout };
