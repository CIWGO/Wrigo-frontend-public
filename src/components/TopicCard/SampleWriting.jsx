import { getTopic } from "../../utils/index";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSampleWriting = styled.div`
	color: #999999;
    height: 135px;
    overflow: hidden;
    font-size: 11px;
    position: relative;
    &:after {
        content: "";
        background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 30%);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;

const SampleWriting = (props) => {
	const [sampleWriting, setSampleWriting] = useState({});
	console.log(sampleWriting);
	useEffect(() => {
		getTopic({ type: "oneTopic", topic_id: props.topicId })
			.then((response) => {
				if (response.status === 200) {
					setSampleWriting(response.data);
				} else if (response.status === 500) {
					alert("Something is wrong network, please retry.");
				}
			});
	}, []);

	const content = sampleWriting.sampleWriting_content !== undefined ? sampleWriting.sampleWriting_content : "not available not available not available not available not available not available not available not available not available not available not available not available  not available not available not available not available not available not available";

	return (
		<StyledSampleWriting>
			<p>{content}</p>
		</StyledSampleWriting>
	);
};

export default SampleWriting;
