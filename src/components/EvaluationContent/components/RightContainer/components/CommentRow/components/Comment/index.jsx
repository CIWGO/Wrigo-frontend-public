import styled from "styled-components";

const StyledDiv = styled.div`
	font-size: 16px;
  font-weight: 400;
  text-align: left;
  line-height: 22px;
`;

const Comment = (props) => {
	return (
		<StyledDiv>
			{props.content}
		</StyledDiv>
	);
};

export default Comment;
