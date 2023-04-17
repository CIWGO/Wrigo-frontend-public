import styled from "styled-components";
import { Form, Layout, Button } from "antd";
import { Link } from "react-router-dom";

const PageLayout = styled.div`
margin-top:20px;
display:flex-row;
justify-content:center;
align-items:center;
color: #2F71DA;
background-color:white;
`;

const MyForm = styled(Form)`
  width: 300px;
  text-align: center;
`;

const SendButton = styled(Button)`
background-color:#2F71DA;
`;

const VerifyButton = styled(Button)`
background-color:#2F71DA;
width:150px;
`;

const SignUpLayout = styled(Layout)`
  background-color:white;
  display:flex;
  flex-direction:colum;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Logo = styled.img`
  margin: 0;
  padding: 0;
  border: 0;
  width: 12rem;
`;

const Message = styled.h3`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
font-family: 'Roboto', sans-serif;
color: #2F71DA;
font-size:20px;
font-weight:600;`;

const ResendLayout = styled.div`
display:flex;
width:300px;
justify-content:space-between;
`;

const CancelTag = styled(Link)`
text-align:center;
text-decoration:underline;
color: #2F71DA;
`;

export { VerifyButton, SendButton, MyForm, PageLayout, ResendLayout, SignUpLayout, Message, Logo, CancelTag };
