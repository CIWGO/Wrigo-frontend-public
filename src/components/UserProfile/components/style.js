import styled from "styled-components";
import { Space, Card, Button, Input, Form } from "antd";

export const UserProfileLayout = styled(Space)`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  width: 100%;
`;

export const InformationCard = styled(Card)`
  width: 50rem;
  font-weight: 700;
  color: #1890ff;

  @media (max-width: 1100px) {
    width: 35rem;
  }

  @media (max-width: 768px) {
    width: 25rem;
  }

  @media (max-width: 468px) {
    width: 15rem;
  }
`;

export const FormDefault = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: end;
  //   [title="Email"] {
  //     color: #1890ff !important;
  //   }
  //   [title="Country"] {
  //     color: #1890ff !important;
  //   }

  @media (max-width: 468px) {
    width: 15rem;
    flex-direction: column;
    align-items: start;
  }
`;

export const InputDefault = styled(Input)`
  width: 30rem;

  @media (max-width: 1100px) {
    width: 25rem;
  }

  @media (max-width: 768px) {
    width: 15rem;
  }

  @media (max-width: 468px) {
    width: 12rem;
  }
`;

export const InputDisabled = styled(Input)`
  width: 30rem;
  background-color:#F1F9FF;
  [type="text"][disabled] {
    color: #2F71DA;
  }

  @media (min-width: 1100px) {
    width: 38rem;
  }

  @media (max-width: 1100px) {
    width: 30rem;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }

  @media (max-width: 468px) {
    width: 17rem;
  }
`;

export const ButtonDefault = styled(Button)`
  margin-left: 1.8rem;
`;
export const ButtonVerify = styled(Button)`
  margin-bottom: 1.8rem;
`;
