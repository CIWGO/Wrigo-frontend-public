import PopularTopics from "../../components/PopularTopics/index.jsx";
import React, { useState, useEffect } from "react";
import newRequest from "../../utils/newRequest";
import { PopularTopicContainer, Title } from "./style";

const PopularTopicsCard = () => {
	const [topics, setTopics] = useState([]);
	const token = localStorage.getItem("token");

	const fetchPopularTopics = async () => {
		try {
			const result = await newRequest.post("/users/getTopic", {
				type: "getPopularTopics", token
			});
			const extractedTopics = result.data.popularTopics;
			const topics = extractedTopics.map((topic, index) => {
				return {
					index,
					topic_content: topic.topic_content,
					popularity: topic.popularity
				};
			});

			console.log("Extracted topics:", topics);
			return topics;
		} catch (error) {
			console.error("Error fetching popular topics:", error);
			return [];
		}
	};

	useEffect(() => {
		const fetchTopics = async () => {
			const fetchedTopics = await fetchPopularTopics(token);
			setTopics(fetchedTopics);
		};
		fetchTopics();
	}, []);

	return (
		<PopularTopicContainer>
			<Title>Popular Topics</Title>
			<PopularTopics topics={topics} />
		</PopularTopicContainer>
	);
};
export default PopularTopicsCard;
