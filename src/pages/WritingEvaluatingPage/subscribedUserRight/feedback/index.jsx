import { FeedbackTitle } from "../component/title";
import styled from "styled-components";
import CollapseSection from "./collapse";

const FeedbackWrap = styled.div`
  display:flex;
  flex-direction:column;
  text-align:left;
`;
const FeedbackSection = ({ text }) => {
	const { commentTR, commentCC, commentLR, commentGRA, TR, CC, LR, GRA } = text;
	const score = (Number(TR) + Number(CC) + Number(LR) + Number(GRA)) / 4;
	return (
		<FeedbackWrap>
			<FeedbackTitle title="Feedback" score={ score} />
			<CollapseSection tr={TR} cc={CC} lr={LR} gra={GRA} text1={ commentTR} text2={ commentCC} text3={ commentLR} text4={ commentGRA} />
		</FeedbackWrap>
	);
};

export default FeedbackSection;
