import styled from "styled-components";

export const TopicFeedback = styled.div`
  display: flex;
  margin: 15vh 20px 5vh 10px;
  position: relative;
  border-radius: 10px;
  background-color: yellow;
  width: 45%;
  min-width: 200px;
  height: 81vh;
  flex: 1;
`;
export const Feedback = styled.div`
flex-direction: column;
  justify-content: space-around;
  display: flex;
  margin:15% 10% 10%;
  text-align: left;
  height: 66vh;
  
  p {
    color: rgb(55, 109, 196);
    font-size: 1.4rem;
    position: absolute;
    top: 8px;
    right: 10%;
  }
  span{
    color:rgb(55, 109, 196) ;
    font-size: 4rem;
    font-weight: bold;
`;
export const Scores = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  color: rgb(55, 109, 196);
`;
export const Comment = styled.h3`
  font-weight: 400;
`;
export const Group = styled.div`
  height: min-content;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
