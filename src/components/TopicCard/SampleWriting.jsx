import { getTopic } from "../../utils/index";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSampleWriting = styled.div`
	color: #999999;
	height: 145px;
	overflow: hidden;
	font-size: 11px;
	line-height: 1.35;
	position: relative;
	&:after {
		content: "";
		background: linear-gradient(
			to top,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 0) 40%
		);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;

const SampleWriting = (props) => {
	const [sampleWriting, setSampleWriting] = useState(["Not available"]);
	const token = localStorage.getItem("token");
	const uid = localStorage.getItem("uid");
	useEffect(() => {
		getTopic({ token, uid, type: "oneTopic", topic_id: props.topicId }).then((response) => {
			if (response.status === 200 && response.data.oneSampleWithFeedback.sampleWriting_content) {
				setSampleWriting(response.data.oneSampleWithFeedback.sampleWriting_content);
				props.onTopicDataChange(response.data.oneSampleWithFeedback);
			} else if (response.status === 500) {
				alert("Something is wrong network, please retry.");
			}
		});
	}, []);

	return (
		<StyledSampleWriting>
			<p>{sampleWriting}</p>
		</StyledSampleWriting>
	);
};

export default SampleWriting;
