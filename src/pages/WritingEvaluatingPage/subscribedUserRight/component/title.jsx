import styled from "styled-components";

const TitleText = styled.h3`
	margin-top:30px;
	color:rgb(55, 109, 196);
`;

const FeedbackTitleDiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
	color:rgb(55, 109, 196);
	margin-top:30px;
`;

const Mark = styled.span`
	font-size:45px;
	front-weight:900;
  color: rgb(55, 109, 196);
	display: inline-block;
`;

const Band = styled.span`
	font-size:"24px";
	margin-right: 5px;
	color:rgb(55, 109, 196);
	display: inline-block;
`;

const Title = ({ title }) => {
	return (
		<TitleText>
			{ title }
		</TitleText>
	);
};

const Score = ({ score }) => {
	return (
		<span>
			<Band>BAND </Band>
			<Mark>{ score }</Mark>
		</span>
	);
};

const FeedbackTitle = ({ title, score }) => {
	return (
		<FeedbackTitleDiv>
			<Title title={title} />
			<Score score={score} />
		</FeedbackTitleDiv>
	);
};

export { Title, FeedbackTitle };
