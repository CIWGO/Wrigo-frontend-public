import styled, { keyframes } from "styled-components";
export const WritingPageDiv = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200,300;500;700;900&family=Rubik:wght@400;500;600&display=swap');
font-family: 'Poppins', sans-serif;
background-color: #F5F5F5;
display: flex;
flex-wrap: wrap;
padding: 20px;
justify-content: space-between;
width: 100%;
height: max-content;
position: relative;

  button.back {
    background-color: transparent;
    color: rgb(47, 113, 218);
    width: max-content;
    border: none;
    position: absolute;
    top: 0;
    left: 15px;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    :hover {
      cursor: pointer;
    }
  }

  .left {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    border-radius: 20px;
    background-color: white;
    width: 45%;
    min-width: 340px;
    height: 80svh;
    flex: 1;
    .topic {
      // styles for the textarea
      // disable the textarea if resubmit is true
      &[disabled] {
        background-color: rgba(230, 244, 255);
        width: 80%;
        border-radius: 20px;
        padding: 20px;
        color: #000000;
        font-size: 14px;
        font-weight: 700;
        cursor: not-allowed;
      }
    }
    textarea {
    resize: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 30px;
    border: none;
    padding: 20px;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #F2F2F2;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(162, 162, 181, 0.828);
      border-radius: 20px;
    }
    &::placeholder {
      line-height: 30px;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #CCCCCC;
      padding-bottom: 10px;
      text-decoration: none;
    }

    &:focus {
      outline: none;
      border: 1 px solid rgb(18, 13, 13);
    }

    width: 80%;
  }

  &:disabled {
    background-color: #CCCCCC;
    /* change the background color */
    color: #666;
    /* change the text color */
    // cursor: not-allowed; /* change the cursor */
    /* add any other styles you want */
    }
  }

    .topic {
      width: 80%;
      margin: 30px auto;
      height: 15vh;
    }

    .flex-col {
      display: flex;
      flex-direction: column;
    }

  .content {
    margin: 25px auto 10px;
    width: 80%;
    height: 45vh;
    // overflow-y: hidden;

  }

    hr {
      border: 1px solid rgb(47, 113, 218);
      height: 0;
      width: 90%;
      margin: auto;
    }

    textarea {
      border: none;

      &::placeholder {
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&family=Rubik:wght@400;500;600&display=swap");
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        color: #CCCCCC;
        padding-bottom: 10px;
        text-decoration: none;
      }

      &:focus {
        outline: none;
        border: 1 px solid rgb(18, 13, 13);
      }

      font-size: large;

    width: 80%;
  }`;

export const BackButton = styled.button` 
  position: absolute;
  top: 30px;
`;

export const RightCard = styled.div`
    position: relative;
    margin-top: 40px;
    margin-left: 20px;
    border-radius: 20px;
    background-color: white;
    width: 45%;
    min-width: 340px;
    min-height: 80svh;
    flex: 1;
    padding: 20px;
`;

export const PreFeedbacks = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 0;
  min-height:60vh;

  .preFeed {
    text-align: start;
    font-size: 16px;
    color: rgb(40, 86, 161);
  }
`;

export const TopBackButton = styled.div`
color:rgb(47, 113, 218);
font-size: 20px;
position: absolute;
top: 30px;
left: 30px;

`;
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 40%;
  align-content: center;
  background-color: transparent;
  position: relative;
  .loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid rgb(47, 113, 218);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: ${spin} 1s linear infinite;
    margin: 0 auto;
  }
  .loading-text {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    margin-top: 10px;
  }
`;

export const NoFeed = styled.div`
  margin-left: 5%;
  text-align: start;
  font-weight: 700;
  margin-top: 32px;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: #CCCCCC;
  text-decoration: none;
`;

export const FeedbackContainer = styled.div`
flex-direction: column;
justify-content: space-around;
gap: 30px;
display: flex;
margin: 100px 10% 10%;
text-align: left;
line-height: 20px;
height: 66vh;
height: min-content;

#moment {
  position:absolute;
  left: 50px; 
  top: 43px;
  font-size: 12px;
  color: #969494c9;
}
button {
  font-weight: 500;
  bottom: 20px;
  right: 30px;
  position: absolute;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 5px;
  width: 10em;
  height: 33px;
  background-color:#1677ff;
  &:hover {
    cursor: pointer;
    background-color:#4096ff;
  }
}
&::-webkit-scrollbar {
  display: hidden;
}
p {
  color: rgb(55, 109, 196);
  font-size: 1.4rem;
  position: absolute;
  top: 13px;
  right: 10%;
}
span {
  color: #2F71DA;
  font-size: 60px;
  font-weight: bold;
  margin-left: 5px;
}
`;

export const Group = styled.div`
height: min-content;
font-size: .7rem;
h3 {
  margin: 0;
}
span{
  font-size:.7rem;
  color:#777;
  font-weight: 400;
}
.thin {
  font-weight: 400;
}
.sliced{
  &:hover{
    cursor: pointer;
  }
}
.scores {
  font-size: 1rem;
  font-weight: 400;
  color: rgb(55, 109, 196);
}
`;

export const Draft = styled.div`
font-family: "Poppins";
font-weight: 500;
bottom: "10px";
right: "20px";
position: "absolute";
border: "none";
border-radius: "10px";
color: "rgb(47, 113, 218)";
padding: "5px";
width: "6rem";
height: "min-content";
background-color: "white";
`;

export const NoPre = styled.p`
font-size: 20px;
font-weight: 600;
color: #ccccccc9;`;

export const InputCardBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position:absolute;
  left: 30px;
  bottom: 20px;
  right: 30px;
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 700;
`;
