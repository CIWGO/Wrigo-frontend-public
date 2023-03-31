import { FeedbackTitle } from "../component/title";
import styled from "styled-components";
import CollapseSection from "./collapse";

const FeedbackWrap = styled.div`
  display:flex;
  flex-direction:column;
  text-align:left;
`;
const FeedbackSection = () => {
	const text = "The essay is well-structured and the ideas are clearly expressed. The essay is well-structured and the ideas are clearly expressed. The essay is well-structured and the ideas are clearly expressed.  The essay is well-structured and the ideas are clearly expressed.  The essay is well-structured and the ideas are clearly expressed. ";
	const feedback = [7, 6.5, 7, 7, 7.5, text, text, text, text];
	const [score, tr, cc, lr, gra, text1, text2, text3, text4] = feedback;
	return (
		<FeedbackWrap>
			<FeedbackTitle title="Feedback" score={ score} />
			<CollapseSection tr={tr} cc={cc} lr={lr} gra={gra} text1={ text1} text2={ text2} text3={ text3} text4={ text4} />
		</FeedbackWrap>
	);
};

export default FeedbackSection;
