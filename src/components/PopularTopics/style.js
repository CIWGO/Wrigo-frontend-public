import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentBox = styled.div`
  margin-top: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 40px;
  background: #ffffff;
  border-radius: 20px;
  height: 70vh;
  overflow: scroll;

  @media (max-width: 768px) {
    padding: 25px 20px;
  }
`;

export const Property = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 20px 0;
`;

export const IndexAndTopic = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  cursor: pointer;
`;

export const Index = styled.div`
  color: #2F71DA;
  font-weight: bold;
  padding-right: 5px;
  padding-top: 1px
`;

export const TopicContent = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'); 
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  display: inline;
  line-height: 20px;
  margin: 0;
  text-align: left;
`;

export const IconContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  justify-content: flex-start;
  color: #2F71DA;
  margin-top: 5px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

export const MoreInfo = styled(Link)`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  font-family: 'Roboto', sans-serif;
  color: #2F71DA;
  font-weight: 700;
  text-align: left;
  width: 100%;
  margin-bottom: 5px;
`;
