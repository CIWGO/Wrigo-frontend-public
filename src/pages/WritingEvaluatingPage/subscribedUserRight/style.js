import styled from "styled-components";

const PaidRight = styled.div`
  position: relative;
  margin: 2rem 20px 5vh 20px;
    border-radius: 10px;
    background-color: white;
    width: 45%;
    min-width: 340px;
    min-height: 81vh;
    flex: 1;
    box-sizing: border-box;
`;

const WritingPageDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200,300;500;700;900&family=Rubik:wght@400;500;600&display=swap');
  font-family: 'Poppins', sans-serif;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  min-height: 100%;
  position: relative;
`;

const GrammarContainer = styled.div`

  margin:100px 7% 5vh 7%;
  text-align:left;
`;

const Button = styled.button`
  font-weight: 500;
  bottom: 10px;
  right: 20px;
  position: absolute;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px;
  width: 10rem;
  height: 33px;
  background-color:#1677ff;
  &:hover {
    cursor: pointer;
    background-color:#4096ff;
  }`;
export { PaidRight, WritingPageDiv, GrammarContainer, Button };
