import HeadingComponent from "../../components/Heading/index.jsx";
import PopularTopics from "../../components/PopularTopics/index.jsx";
import React, { useState, useEffect } from "react";
import newRequest from "../../utils/newRequest";
import { PopularTopicContainer } from "./style";

const PopularTopicsCard = () => {
	const [topics, setTopics] = useState([]);

	const fetchPopularTopics = async () => {
		try {
			const result = await newRequest.post("/users/getTopic", {
				type: "getPopularTopics"
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
			const fetchedTopics = await fetchPopularTopics();
			setTopics(fetchedTopics);
		};
		fetchTopics();
	}, []);

	return (
		<PopularTopicContainer>
			<HeadingComponent displayValue={"Popular Topics"} />
			<PopularTopics topics={topics} />
		</PopularTopicContainer>
	);
};
export default PopularTopicsCard;
