import { FeedbackTitle } from "../component/title";
import styled from "styled-components";
import CollapseSection from "./collapse";

const FeedbackWrap = styled.div`
  display:flex;
  flex-direction:column;
  text-align:left;
`;
const Feedback = () => {
	const text = " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.";
	console.log("text1:", text);
	return (
		<FeedbackWrap>
			<FeedbackTitle title="Feedback" score="7.5" />
			<CollapseSection tr={6.5} cc={7} lr={6.5} gra={7.5} text1={ text} text2={ text} text3={ text} text4={ text} />
		</FeedbackWrap>
	);
};

export default Feedback;
