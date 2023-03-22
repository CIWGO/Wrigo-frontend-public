import HeadingComponent from "../../components/Heading/index.jsx";
import PopularTopics from "../../components/PopularTopics/index.jsx";
import { withTheme } from "styled-components";
import React, { useState, useEffect } from "react";
import newRequest from "../../utils/newRequest";

const popularTopicsCard = () => {
	const [topics, setTopics] = useState("");
	console.log("call function successfully");

	const fetchPopularTopics = async () => {
		try {
			console.log("before fetching topics");
			const result = await newRequest.post("/users/getTopic", {
				type: "getPopularTopics"
			});
			console.log("call api successfully");
			const topics = result.data;
			console.log(topics);
			return topics;
		} catch (error) {
			console.error("Error fetching popular topics:", error);
			return [];
		}
	};

	useEffect(() => {
		console.log("call useEffect");
		const fetchTopics = async () => {
			const fetchedTopics = await fetchPopularTopics();
			setTopics(fetchedTopics);
		};
		console.log("after fetch");
		fetchTopics();
	}, []);

	return (
		<div>
			<HeadingComponent displayValue={"Popular Topics"} />
			<PopularTopics topics={topics} />
		</div>
	);
};
export default withTheme(popularTopicsCard);
