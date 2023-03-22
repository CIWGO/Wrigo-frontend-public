import { getTopic } from "../../../../../../utils";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 67px;
  margin-right: 30px;
  margin-bottom: 0px;
  margin-left: 31px;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  color: #000000;
`;

const SampleWriting = (props) => {
	const [sampleWriting, setSampleWriting] = useState(["Not available"]);
	useEffect(() => {
		// topic_id: "29dae72e-f633-432c-a105-b0e40f562710" (props.topicId)
		getTopic({ type: "oneTopic", topic_id: "29dae72e-f633-432c-a105-b0e40f562710" }).then((response) => {
			if (response.status === 200 && response.data.oneSampleWithFeedback.sampleWriting_content) {
				setSampleWriting(response.data.oneSampleWithFeedback.sampleWriting_content);
			} else if (response.status === 500) {
				alert("Something is wrong network, please retry.");
			}
		});
	}, []);

	return (
		<StyledDiv>
			{sampleWriting}
		</StyledDiv>
	);
};

export default SampleWriting;
