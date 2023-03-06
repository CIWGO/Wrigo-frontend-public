import styled from "styled-components";
import { Form, Layout } from "antd";

const MyForm = styled(Form)`
width:300px;
`
  ;

const PageLayout = styled(Layout)`
  display:flex-row;
  justify-content:center;
  align-items:center;
  color: #2F71DA;
  background-color:white;
`;

export { MyForm, PageLayout };
