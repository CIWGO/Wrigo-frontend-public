import styled from "styled-components";
import { Layout, Button } from "antd";

export const EditProfileLayout = styled(Layout)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: auto;
  width: 100%;
`;
export const HeaderSection = styled.div`
  font-weight: 800;
  color: #1890ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProfileContainer = styled.div`
  min-width: 500px;
  width: 100%;
`;
export const Item = styled.div`
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const CancelButton = styled(Button)`
  margin-left: 10px;
`;
export const PrimaryColorHelper = styled.div`
  color: #1890ff;
`;
