import { getTopic } from "../../utils/index";
import { useState, useEffect } from "react";
import axios from "axios";
import TopicCard from "../../components/TopicCard/index";
import styled from "styled-components";

const StyledCardContainer = styled.div`
	&& {
		text-align: left;
		margin: 40px;
	}
`;

const TopicMainPage = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		getTopic({ type: "allTopics" })
			.then((response) => {
				if (response.status === 200) {
					setData(response.data);
				} else if (response.status === 500) {
					alert("Something is wrong network, please retry.");
				}
			});
	}, []);

<<<<<<< HEAD:src/pages/Topic/index.jsx
=======
const Topics = () => {
>>>>>>> main:src/pages/Topics/index.jsx
	return (
		<StyledCardContainer>
			{data.map((item, index) => (
				<TopicCard
					key={index}
					topic={item.topic_content}
					sampleWriting={item.sampleWriting_content}
					score={item.score}
				/>
			))}
		</StyledCardContainer>
	);
};

<<<<<<< HEAD:src/pages/Topic/index.jsx
export default TopicMainPage;
=======
export default Topics;
>>>>>>> main:src/pages/Topics/index.jsx
