import React from "react";
import Score from "./Score";
import SubmitTime from "./SubmitTime";
import Topic from "./Topic";
import { DeleteOutlined } from "@ant-design/icons";

const WritingContentCard = ({
	loading,
	id,
	taskTopic,
	writingContent
}) => {
	return (
		<>
			<Topic taskTopic={taskTopic}/>
			<Score />
			<SubmitTime/>
			<DeleteOutlined/>

		</>
	);
};

export default WritingContentCard;
