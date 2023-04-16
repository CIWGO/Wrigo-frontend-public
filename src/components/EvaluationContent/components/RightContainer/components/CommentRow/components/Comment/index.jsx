import styled from "styled-components";

const StyledDiv = styled.div`
	font-size: 16px;
  font-weight: 400;
  text-align: left;
  line-height: 22px;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  font-family: "Roboto", sans-serif;
  margin-bottom: 70px;
  white-space: pre-wrap;
`;

const Comment = (props) => {
	return (
		<StyledDiv>
			{props.content}
		</StyledDiv>
	);
};

export default Comment;
