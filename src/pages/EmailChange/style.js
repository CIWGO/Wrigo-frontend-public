import styled from "styled-components";
import { Form, Layout, Button } from "antd";

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
const PageLayout = styled.div`
margin-top:20px;
display:flex-row;
justify-content:center;
align-items:center;
color: #2F71DA;
background-color:white;
`;
const SignUpLayout = styled(Layout)`
  background-color:white;
  display:flex;
  flex-direction:colum;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const CreateAccount = styled.h2`
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
`;
const Message = styled.h3`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');
font-family: 'Noto Sans', sans-serif;
color: #2F71DA;
font-size:20px;
font-weight:600;`;
const ResendLayout = styled.div`
display:flex;
width:300px;
justify-content:space-between;
space-between:20px;
`;
export { MyButton, VerifyButton, MyForm, PageLayout, SignUpLayout, CreateAccount, Logo, Message, ResendLayout };