import styled from "styled-components";

const StyledDiv = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
font-family: "Roboto", sans-serif;
  display: flex;
  font-size: 21px;
  font-weight: 700;
  // line-height: 32px;
  text-align: left;
  color: #2f71da;
  // line-height: 54px;
  gap: 10px;
  margin-bottom: 15px;
`;

const CriteriaMark = (props) => {
	return (
		<StyledDiv>
			<span> {props.criteria}&nbsp;{props.scores} </span>
			{/* <div>{props.scores}</div> */}
		</StyledDiv>
	);
};

export default CriteriaMark;
