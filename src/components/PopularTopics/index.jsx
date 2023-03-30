import React from "react";
import {
	ContentBox,
	Property,
	Index,
	TopicContent,
	IconContainer,
	IndexAndTopic,
	MoreInfo
} from "./style";
import { defaultFrontEndPrefix } from "../../constants/index";

const PopularTopics = (props) => {
	return (
		<ContentBox>
			{props.topics.map((topic, index) => (
				<Property key={index}>
					<IndexAndTopic>
						<Index>#{index + 1}</Index>
						<TopicContent>{topic.topic_content}</TopicContent>
					</IndexAndTopic>
					<IconContainer>
						<span>👍 {topic.popularity}</span>
						<span>📝 {topic.writings}</span>
					</IconContainer>
				</Property>
			))}
			<MoreInfo href={`http://${defaultFrontEndPrefix}/users/topics`}>{"More in topics > "}</MoreInfo>
		</ContentBox>
	);
};

export default PopularTopics;