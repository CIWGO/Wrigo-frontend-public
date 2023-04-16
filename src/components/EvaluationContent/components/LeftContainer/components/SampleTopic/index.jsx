import { getTopic } from "../../../../../../utils";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Skeleton } from "antd";

const StyledDiv = styled.div`
margin: 30px auto 55px;
//   margin-top: 30px;
//   margin-right: 31px;
//   margin-left: 31px;
//   margin-bottom: 87px;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-align: left;
  padding-left: 10px;
//   padding-right: 20px;
`;

const SampleTopic = (props) => {
	const [sampleTopic, setSampleTopic] = useState(["Not available"]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		const token = localStorage.getItem("token");
		const uid = localStorage.getItem("uid");
		getTopic({ token, uid, type: "oneTopic", topic_id: props.topicId }).then((response) => {
			if (response.status === 200 && response.data.singleTopic) {
				setSampleTopic(response.data.singleTopic.topic_content);
				setLoading(false);
			} else if (response.status === 500) {
				alert("Something is wrong network, please retry.");
			}
		});
	}, []);
	return (
		<StyledDiv>
			{ loading && <><Skeleton active/></> }
			{ !loading && <>
				{sampleTopic}
			</>}
		</StyledDiv>
	);
};

export default SampleTopic;
