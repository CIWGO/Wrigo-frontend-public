import { getTopic } from "../../../../../../utils";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
margin: 50px auto 87px;
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
font-family: "Roboto", sans-serif;
//   margin-top: 67px;
//   margin-right: 30px;
//   margin-bottom: 0px;
//   margin-left: 31px;
  font-size: 16px;
//   font-weight: 400;
  line-height: 23px;
  text-align: left;
  color: #000000;
  padding-left: 10px;
`;

const SampleWriting = (props) => {
	const [sampleWriting, setSampleWriting] = useState(["Not available"]);
	useEffect(() => {
		const token = localStorage.getItem("token");
		const uid = localStorage.getItem("uid");
		getTopic({ token, uid, type: "oneTopic", topic_id: props.topicId }).then((response) => {
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
