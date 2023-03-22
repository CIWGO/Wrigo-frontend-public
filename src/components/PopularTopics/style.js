import styled from "styled-components";

export const ContentBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  position: absolute;
  background: #ffffff;
  border-radius: 5px;
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
`;

export const Index = styled.span`
  color: blue;
  font-weight: bold;
  padding-right: 10px;
`;

export const TopicContent = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap");
  font-family: "Noto Sans", sans-serif;
  display: inline;
  margin: 0;
  text-align: left;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: blue;
  margin-top: 5px;
  justify-content: flex-end;
  width: 90%;
`;

export const MoreInfo = styled.a`
  font-weight: bold;
  font-weight:200;
  font-weight: bold;
  text-align: left;
  width: 100%;
`;
