import styled from "styled-components";

const StyledDiv = styled.div`
	&& {
		margin-top: 30px;
		margin-right: 31px;
		margin-left: 31px;
		margin-bottom: 87px;
		width: 664px;
		font-size: 20px;
		font-weight: 500;
		line-height: 27.24px;
		text-align: left;
	}
`;

const SampleTopic = () => {
	return (
		<StyledDiv>
      Plastic bags, plastic bottles and plastic packaging are bad for the
      environment. What damage does plastic do to the environment? What can be
      done by governments and individuals to solve this problem?
		</StyledDiv>
	);
};

export default SampleTopic;
