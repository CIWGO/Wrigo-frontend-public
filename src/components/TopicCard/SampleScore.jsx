import styled from "styled-components";

const StyledScore = styled.div`
	color: #2f71da;
	padding-left: 70px;
	font-size: 30px;
`;

const SampleScore = (props) => {
	const score = props.score;

	return (
		<StyledScore>
			<p>{score !== undefined ? score : 0.0}</p>
		</StyledScore>
	);
};

export default SampleScore;
