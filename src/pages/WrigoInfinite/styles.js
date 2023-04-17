import styled from "styled-components";
import { Button, Space } from "antd";

export const Section = styled(Space)`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 30px;
  width: 100%;
  height: 100%;
  background: rgb(47, 113, 218);
  background: linear-gradient(
    355deg,
    rgba(99, 154, 241, 1) 0%,
    rgba(245, 245, 245, 1) 85%
  );

  @media (max-width: 577px) {
    margin-top: 0px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 76rem; //TODO:
  height: 75vh; //TODO:
  background-color: rgba(255, 255, 255, 0.61);
  border-radius: 30px;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  font-family: "Roboto", sans-serif;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-height: 922px) {
    height: 85vh;
  }
  @media (max-height: 823px) {
    height: 100vh;
  }
  @media (max-width: 1500px) {
    width: 56rem;
  }

  @media (max-width: 1100px) {
    width: 47rem;
  }

  @media (max-width: 818px) {
    width: 30rem;
  }

  @media (max-width: 577px) {
    width: 18rem;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
  margin-top: 30px; //TODO:
  margin-bottom: 4.8rem;

  @media (max-width: 1100px) {
    margin-bottom: 2.8rem;
  }
`;
export const Header = styled.div`
  font-size: 2.4rem;
  //   color: #1581e5;
  background: linear-gradient(to right, #65a0ff, #7574e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 1.8rem;

  @media (max-width: 577px) {
    font-size: 2.2rem;
  }
`;

export const Description = styled.div`
  text-align: center;
  font-size: 1.2rem;
  //   color: #5db1ff;
  background: linear-gradient(to right, #65a0ff, #7574e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;

  @media (max-width: 577px) {
    font-size: 0.8rem;
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem; //TODO:
  margin-bottom: 1.8rem;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 1100px) {
    gap: 1rem;
  }
`;
export const CardFree = styled.div`
  width: 330px; //TODO:
  height: 430px; //TODO:
  border-radius: 30px;
  background: #e9edf2;
  box-shadow: 1px 1px 10px #bebebe, -1px -1px 10px #fcfcfc;

  @media (max-width: 577px) {
    width: 270px;
    height: 370px;
  }
`;
export const CardFreeBody = styled.div`
  padding: 25px 10px 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const CardBodyHeader = styled.div`
  font-size: 2.4rem;
  //   color: #5db1ff;
  background: linear-gradient(to right, #65a0ff, #7574e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  margin-bottom: 1.2rem;

  @media (max-width: 577px) {
    font-size: 1.8rem;
    margin-bottom: 1.4rem;
  }
`;
export const CardBodyPrice = styled.div`
  font-size: 1rem;
  //   color: #cccccc;
  background: linear-gradient(to right, #65a0ff, #7574e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  margin-bottom: 1rem;

  @media (max-width: 577px) {
    font-size: 0.8rem;
    margin-bottom: 1.4rem;
  }
`;

export const CardDescriptionHeader = styled.div`
  font-size: 1.2rem;
  //   color: #96a0b0;
  background: linear-gradient(to right, #65a0ff, #7574e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 577px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;
export const CardDescriptionText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #96a0b0;
  font-weight: 400;
  margin-bottom: 4px;

  @media (max-width: 577px) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
`;

export const CardPremium = styled.div`
  width: 330px; //TODO:
  height: 430px; //TODO:
  border-radius: 30px;
  background: #326ac6;
  box-shadow: 1px 1px 10px #bebebe, -2px -2px 10px #fcfcfc;
  position: relative;
  overflow: hidden;

  :before {
    content: "Premium";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -55px;
    top: 20px;
    width: 200px;
    height: 40px;
    color: #326ac6;
    font-weight: 800;
    font-size: 1rem;
    background-color: #9dd0ff;
    transform: rotate(45deg);
  }

  @media (max-width: 577px) {
    width: 270px;
    height: 370px;
  }
`;
// export const PremiumTag = styled.div`

// `;

export const CardPreBody = styled.div`
  padding: 25px 10px 10px 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const PreCardBodyHeader = styled.div`
  font-size: 2.4rem;
  color: #e1ebfc;
  font-weight: 500;
  margin-bottom: 1.2rem;

  @media (max-width: 577px) {
    font-size: 1.8rem;
    margin-bottom: 1.4rem;
  }
`;
export const PreCardBodyPrice = styled.div`
  font-size: 1rem;
  color: #cccccc;
  font-weight: 500;
  margin-bottom: 1.2rem;

  @media (max-width: 577px) {
    font-size: 0.8rem;
    margin-bottom: 1.4rem;
  }
`;

export const PreCardDescriptionHeader = styled.div`
  font-size: 1.2rem;
  color: #d7ecff;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 577px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;
export const PreCardDescriptionText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #d7ecff;
  font-weight: 400;
  margin-bottom: 4px;
  &:last-child {
    margin-bottom: 4px;
  }

  @media (max-width: 577px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;
export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex !important;
  justify-content: center;
  align-items: center;
`;
export const DefaultButton = styled(Button)`
  background-color: #9dd0ff;
  color: #0046b8;
`;
