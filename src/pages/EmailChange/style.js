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

const Logo = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  font-family: 'Poppins', sans-serif;
  font-weight:800;
  font-size:48px;
  color: #2F71DA;
  text-align:center;
`;

const CheckMessage = styled.h3`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  font-family: 'Poppins', sans-serif;
  color: #2F71DA;
  font-size:20px;
  font-weight:600;`;

const VerifyMessage = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  font-family: 'Poppins', sans-serif;
  font-weight:700;
  font-size:36px;
  color: #2F71DA;
  text-align:center;
`;

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

export { VerifyButton, SendButton, CheckMessage, MyForm, PageLayout, ResendLayout, SignUpLayout, VerifyMessage, Logo, CancelTag };
