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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
font-family: "Roboto", sans-serif;
  font-size: 21px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: #2f71da;
  line-height: 54px;
`;

const CommentRow = (props) => {
	const [data, setData] = useState(["Not available"]);
	useEffect(() => {
		const token = localStorage.getItem("token");
		const uid = localStorage.getItem("uid");
		getTopic({ token, uid, type: "oneTopic", topic_id: props.topicId }).then((response) => {
			if (response.status === 200 && response.data.oneSampleWithFeedback) {
				setData(response.data.oneSampleWithFeedback);
			} else if (response.status === 500) {
				alert("Something is wrong network, please retry.");
			}
		});
	}, []);
	return (
		<StyledCard>
			<CriteriaMark criteria="Task Response:" scores={data.sampleScore_TR} />
			<Comment content={data.sampleFeedback_TR} />
			<CriteriaMark criteria = "Coherence and Cohesion:" scores={data.sampleScore_CC} />
			<Comment content={data.sampleFeedback_CC} />
			<CriteriaMark criteria = "Lexical Resource:" scores={data.sampleScore_LR}/>
			<Comment content={data.sampleFeedback_LR} />
			<CriteriaMark criteria = "Grammar Rance and Accuracy:" scores={data.sampleScore_GRA} />
			<Comment content={data.sampleFeedback_GRA} />
			<StyledDiv>
				Overall:
			</StyledDiv>
			<Comment content={data.sampleFeedback_overall} />
		</StyledCard>
	);
};

export default CommentRow;
