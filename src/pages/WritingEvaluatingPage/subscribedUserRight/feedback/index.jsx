import { FeedbackTitle } from "../component/title";
import styled from "styled-components";

const FeedbackWrap = styled.div`
  display:flex;
  flex-direction:row;
`;
const Feedback = () => {
	return (
		<FeedbackWrap>
			<FeedbackTitle title="Feedback" score ="7.5" />
		</FeedbackWrap>
	);
};

export default Feedback;
