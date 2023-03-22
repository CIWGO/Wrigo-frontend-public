import styled from "styled-components";

export const PopularTopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  width: 100%;
`;

export const Topic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const TopicName = styled.span`
  font-size: 18px;
  color: #666;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PopularityIcon = styled.span`
  font-family: 'Material Icons';
`;

export const WritingDetailIcon = styled.span`
  font-family: 'Material Icons';
`;
