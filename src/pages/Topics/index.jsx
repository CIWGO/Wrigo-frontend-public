import { getTopic } from "../../utils/index";
import { useState, useEffect } from "react";
import TopicCard from "../../components/TopicCard/index";
import styled from "styled-components";

const StyledCardContainer = styled.div`
	&& {
		text-align: left;
		padding: 40px;
		background-color: #f2f2f2;
	}
`;

const TopicMainPage = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		getTopic({ type: "allTopics" }).then((response) => {
			if (response.status === 200) {
				setData(response.data);
			} else if (response.status === 500) {
				alert("Something is wrong network, please retry.");
			}
		});
	}, []);

	return (
		<StyledCardContainer>
			{data.map((item, index) => (
				<TopicCard
					key={index}
					topic={item.topic_content}
					topicId={item.topic_id}
					score={item.topic_id}
				/>
			))}
		</StyledCardContainer>
	);
};

export default TopicMainPage;
