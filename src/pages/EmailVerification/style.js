import styled from "styled-components";
import { Form, Layout, Button } from "antd";

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
const MyButton = styled(Button)`
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

const EmailChangeTag = styled.button`
background-color: transparent;
border: none;
color: #2F71DA;
text-decoration: underline;
cursor: pointer;
`;

const CreateAccount = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  font-family: 'Roboto', sans-serif;
  font-weight:700;
  font-size:36px;
  color: #2F71DA;
  text-align:center;
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
  /* space-between:20px; */
`;

export { VerifyButton, MyButton, Message, MyForm, PageLayout, ResendLayout, SignUpLayout, EmailChangeTag, CreateAccount, Logo };
// export { MyForm };
