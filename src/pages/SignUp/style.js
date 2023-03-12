import styled from "styled-components";
import { Form, Layout } from "antd";
import { Link } from "react-router-dom";

const MyForm = styled(Form)`
  width: 300px;
  text-align: center;
`;

const SignUpLayout = styled(Layout)`
  background-color:white;
  display:flex;
  flex-direction:colum;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginTag = styled(Link)`
  text-align:center;
  text-decoration:underline;
  color: #2F71DA;
`;

const CreateAccount = styled.h2`
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

export { MyForm, SignUpLayout, LoginTag, CreateAccount, Logo };
