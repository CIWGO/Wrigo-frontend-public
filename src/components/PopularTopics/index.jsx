import React from "react";
import {
	ContentBox,
	Property,
	Index,
	TopicContent,
	IconContainer,
	IconsWrapper,
	Icon,
	IndexAndTopic,
	MoreInfo
} from "./style";
import { useNavigate } from "react-router-dom";
import { WarningOutlined, FireOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const PopularTopics = (props) => {
	const navigate = useNavigate();
	const handleNavigate = (url) => {
		navigate(url);
	};

	return (
		<ContentBox>
			{props.topics.map((topic, index) => (
				<Property key={index}>
					<IndexAndTopic
						onClick={() =>
							handleNavigate(`/user/topics/content/${topic.topicId}`)
						}
					>
						<Index>#{index + 1}</Index>
						<TopicContent>{topic.topic_content}</TopicContent>
					</IndexAndTopic>
					<IconContainer>
						<div></div>
						<IconsWrapper>
							<Tooltip
								title={`${topic.popularity} writings uploaded by all users`}
							>
								<Icon>
									<FireOutlined style={{ marginRight: "5px" }} />
									{topic.popularity}
								</Icon>
							</Tooltip>
							<Tooltip title={`Difficulty is ${topic.difficulty}`}>
								<Icon>
									<WarningOutlined style={{ marginRight: "5px" }} />
									{topic.difficulty}
								</Icon>
							</Tooltip>
						</IconsWrapper>
					</IconContainer>
				</Property>
			))}
			<MoreInfo to="/users/topics">{"More topics > "}</MoreInfo>
		</ContentBox>
	);
};

export default PopularTopics;
