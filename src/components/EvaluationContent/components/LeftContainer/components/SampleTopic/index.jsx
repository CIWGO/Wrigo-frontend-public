import { getTopic } from "../../../../../../utils";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledDiv = styled.div`
  margin-top: 30px;
  margin-right: 31px;
  margin-left: 31px;
  margin-bottom: 87px;
  font-size: 20px;
  font-weight: 500;
  line-height: 27.24px;
  text-align: left;
`;

const SampleTopic = (props) => {
	const [sampleTopic, setSampleTopic] = useState(["Not available"]);
	useEffect(() => {
		// topic_id: "29dae72e-f633-432c-a105-b0e40f562710"  (props.topicId)
		getTopic({ type: "oneTopic", topic_id: "29dae72e-f633-432c-a105-b0e40f562710" }).then((response) => {
			if (response.status === 200 && response.data.singleTopic) {
				setSampleTopic(response.data.singleTopic.topic_content);
			} else if (response.status === 500) {
				alert("Something is wrong network, please retry.");
			}
		});
	}, []);
	return (
		<StyledDiv>
			{sampleTopic}
		</StyledDiv>
	);
};

export default SampleTopic;
