import styled from "styled-components";

const PaidRight = styled.div`
  position: relative;
  margin: 8vh 20px 5vh 10px;
  padding:0 3rem;
  border-radius: 10px;
  background-color: white;
  width: 45%;
  min-width: 200px;
  // height:100%;
  min-height: 81vh;
  // flex: 1;
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
export { PaidRight, WritingPageDiv };
