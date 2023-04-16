import { FeedbackTitle } from "../component/title";
import styled from "styled-components";
import CollapseSection from "./collapse";
import { Button } from "../style";

const FeedbackWrap = styled.div`
  display:flex;
  flex-direction:column;
  text-align:left;
`;
const FeedbackSection = ({ text, setPrevious }) => {
	const { commentTR, commentCC, commentLR, commentGRA, TR, CC, LR, GRA } = text;
	function calOverall (numbers) {
		let sum = 0;
		for (let i = 0; i < numbers.length; i++) {
			sum += numbers[i];
		}
		const avg = sum / numbers.length;
		return Math.round(avg * 2) / 2;
	}
	const score = [Number(TR), Number(CC), Number(LR), Number(GRA)];
	return (
		<FeedbackWrap>
			<FeedbackTitle title="Feedback" score={calOverall(score)} />
			<CollapseSection tr={TR} cc={CC} lr={LR} gra={GRA} text1={ commentTR} text2={ commentCC} text3={ commentLR} text4={ commentGRA} />
			<Button onClick={() => setPrevious(true)}>Previous feedback</Button>
		</FeedbackWrap>
	);
};

export default FeedbackSection;
