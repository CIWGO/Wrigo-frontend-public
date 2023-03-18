import { getTopic } from "../../utils/index";
import { useState, useEffect } from "react";
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

export default TopicMainPage;
