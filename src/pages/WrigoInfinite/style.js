import styled from "styled-components";
import { Space } from "antd";

export const Section = styled(Space)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 95vh;
  background: rgb(47, 113, 218);
  background: linear-gradient(
    355deg,
    rgba(99, 154, 241, 1) 0%,
    rgba(245, 245, 245, 1) 85%
  );
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 76rem;
  height: 75vh;
  background-color: rgba(255, 255, 255, 0.61);
  border-radius: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200,300;500;700;900&family=Rubik:wght@100;400;500;600&display=swap");
  font-family: "Poppins", sans-serif;
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
`;
export const Header = styled.div`
  font-size: 2.4rem;
  color: #1581e5;
  font-weight: 700;
  margin-bottom: 1.8rem;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #5db1ff;
  font-weight: 400;
  margin-bottom: 4.8rem;
`;
export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-bottom: 1.8rem;
`;
export const CardFree = styled.div`
  width: 330px;
  height: 430px;
  border-radius: 30px;
  background: #e9edf2;
  box-shadow: 10px 10px 15px #bebebe, -5px -5px 15px #fcfcfc;
`;
export const CardPremium = styled.div`
  width: 330px;
  height: 430px;
  border-radius: 30px;
  background: #e9edf2;
  box-shadow: 10px 10px 15px #bebebe, -5px -5px 15px #fcfcfc;
`;
