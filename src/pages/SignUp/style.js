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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  font-family: 'Roboto', sans-serif;
  font-weight:700;
  font-size: 25px;
  color: #2F71DA;
  margin-bottom: 15px;
  text-align:center;
`;

const Logo = styled.img`
  margin: 0;
  padding: 0;
  border: 0;
  width: 12rem;
`;

export { MyForm, SignUpLayout, LoginTag, CreateAccount, Logo };
