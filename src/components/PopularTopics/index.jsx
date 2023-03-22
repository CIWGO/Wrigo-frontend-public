import React from "react";
import {
	PopularTopicContainer,
	Topic,
	TopicName,
	IconContainer,
	PopularityIcon,
	WritingDetailIcon
} from "./style";

const PopularTopics = (props) => {
	return (
		<PopularTopicContainer>
			{props.map((topic, index) => (
				<Topic key={index}>
					<TopicName>{topic.name}</TopicName>
					<IconContainer>
						<PopularityIcon className="material-icons">thumb_up</PopularityIcon>
						<span>{topic.popularity}</span>
						<WritingDetailIcon className="material-icons">
              description
						</WritingDetailIcon>
						<span>{topic.writings}</span>
					</IconContainer>
				</Topic>
			))}
		</PopularTopicContainer>
	);
};

export default PopularTopics;
