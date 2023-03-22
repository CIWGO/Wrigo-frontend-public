import CriteriaMark from "./components/CriteriaMark";
import Comment from "./components/Comment";
import { getTopic } from "../../../../../../utils";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Card } from "antd";

const StyledCard = styled(Card)`
	background: white;
	border: none;
`;

const StyledDiv = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  font-weight: 500;
  color: #2f71da;
  line-height: 54px;
`;

const CommentRow = (props) => {
	const [data, setData] = useState(["Not available"]);
	useEffect(() => {
		// topic_id: "29dae72e-f633-432c-a105-b0e40f562710" (props.topicID)
		getTopic({ type: "oneTopic", topic_id: "29dae72e-f633-432c-a105-b0e40f562710" }).then((response) => {
			if (response.status === 200 && response.data.oneSampleWithFeedback) {
				setData(response.data.oneSampleWithFeedback);
			} else if (response.status === 500) {
				alert("Something is wrong network, please retry.");
			}
		});
	}, []);
	return (
		<StyledCard>
			<CriteriaMark criteria="TR" scores={data.sampleScore_TR} />
			<Comment content={data.sampleFeedback_TR} />
			<CriteriaMark criteria = "CC" scores={data.sampleScore_CC} />
			<Comment content={data.sampleFeedback_CC} />
			<CriteriaMark criteria = "LR" scores={data.sampleScore_LR}/>
			<Comment content={data.sampleFeedback_LR} />
			<CriteriaMark criteria = "GRA" scores={data.sampleScore_GRA} />
			<Comment content={data.sampleFeedback_GRA} />
			<StyledDiv>
				Overall
			</StyledDiv>
			<Comment content={data.sampleFeedback_overall} />
		</StyledCard>
	);
};

export default CommentRow;
