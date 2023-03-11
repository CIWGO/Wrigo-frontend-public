import styled from "styled-components";
import { Form, Layout } from "antd";

const MyForm = styled(Form)`
  width: 300px;
  text-align: center;
`;

const ResetLayout = styled(Layout)`
  background-color:white;
  display:flex;
  flex-direction:colum;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CancelTag = styled.a`
  text-align:center;
  text-decoration:underline;
  color: #2F71DA;
`;

const Notification = styled.h3`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');

  font-family: 'Noto Sans', sans-serif;
  font-weight:560;
  font-size:20px;
  color: #2F71DA;
  text-align:center;
`;

const ResetPassword = styled.h2`
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
  margin-bottom:40px;
`;

export { MyForm, ResetLayout, CancelTag, Notification, ResetPassword, Logo };
