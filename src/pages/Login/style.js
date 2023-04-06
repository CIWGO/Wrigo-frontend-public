import styled from "styled-components";
import { Form, Layout, Button } from "antd";
import { Link } from "react-router-dom";

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

const ForgotTag = styled(Link)`
  margin-top: 25px;
  text-align: center;
  text-decoration:underline;
  color: #2F71DA;
`;

const WelcomeBack = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200,300;500;700;900&family=Rubik:wght@400;500;600&display=swap');

  font-family: 'Poppins', sans-serif;
  font-weight:700;
  font-size:25px;
  color: #2F71DA;
  margin-bottom: 15px;
  text-align:center;
`;

const Logo = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200,300;500;700;900&family=Rubik:wght@400;500;600&display=swap');
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 54px;
  color: #2F71DA;
  text-align: center;
  margin-bottom: 30px;
`;

const LoginButton = styled(Button)`
  width: 140px;
`;

export { MyForm, Logo, WelcomeBack, LoginLayout, ForgotTag, LoginButton };
