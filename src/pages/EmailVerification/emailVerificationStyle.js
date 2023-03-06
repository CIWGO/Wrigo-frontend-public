import styled from "styled-components";
import { Form, Layout } from "antd";
// import {ResendLayout} from "./emailVerification"
// imort ResendLayout form EmailVerification
const MyForm = styled(Form)`
width:300px;
`;

const PageLayout = styled(Layout)`
  display:flex-row;
  justify-content:center;
  align-items:center;
  color: #2F71DA;
  background-color:white;
`;
const ResendLayout = styled(Form)`
display:flex;
width:300px;
justify-content:space-between;
`;

export { MyForm, PageLayout, ResendLayout };
