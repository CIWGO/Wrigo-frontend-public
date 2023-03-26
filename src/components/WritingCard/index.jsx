import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const WritingCard = ({ taskTopic, writingContent, onClick, selected }) => {
	return (
		<Card
			hoverable
			onClick={onClick}
			className={selected ? "selected" : ""}
			style={{ width: "100%" }}
			cover={
				<div
					style={{
						height: "150px",
						backgroundColor: "#f5f5f5",
						borderRadius: "8px 8px 0 0"
					}}
				/>
			}
		>
			<Meta title={taskTopic} description={writingContent} />
		</Card>
	);
};

export default WritingCard;
