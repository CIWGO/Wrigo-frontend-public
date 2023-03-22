import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	justify-content: end;
  margin-right: 20px;
  margin-top: 25px;
`;

const Band = styled.div`
	font-size: 24px;
	color: #2F71DA;
	align-self: end; 
  font-weight: 700;
`;

const Mark = styled.div`
	font-size: 62px;
	color: #2F71DA;
	line-height: 1;
	font-weight: 700;
`;

const ScoreIcon = () => {
	return (
		<StyledDiv>
			<Band>BAND</Band>
			<Mark>7.5</Mark>
		</StyledDiv>
	);
};

export default ScoreIcon;
