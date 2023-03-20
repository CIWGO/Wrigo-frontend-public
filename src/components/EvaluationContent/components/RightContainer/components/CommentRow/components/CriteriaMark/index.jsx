import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  font-weight: 500;
  color: #2f71da;
  line-height: 54px;
  gap: 10px;
`;

const CriteriaMark = (props) => {
	return (
		<StyledDiv>
			<span> {props.criteria} </span>
			<div>7.5</div>
		</StyledDiv>
	);
};

export default CriteriaMark;
