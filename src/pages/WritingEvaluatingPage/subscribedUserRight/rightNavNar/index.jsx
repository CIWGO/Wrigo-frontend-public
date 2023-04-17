import { Menu } from "antd";
import React, { useState, useEffect } from "react";
import { CommentOutlined, FileExclamationOutlined, BulbOutlined } from "@ant-design/icons";
import FeedbackSection from "../feedback/index";
import GrammarSection from "../grammar/index";
import WritingSampleSection from "../writingSample/index";

const NavBar = ({ text: writing, topic, premiumFeedback, setPrevious }) => {
	const defaultCurrent = "feedback";
	const defaultContent = <FeedbackSection text={premiumFeedback} />;

	const items = [
		{
			label: "Feedback",
			key: "feedback",
			icon: <CommentOutlined />,
			component: <FeedbackSection text={premiumFeedback} setPrevious = {setPrevious} />

		},
		{
			label: "Grammar",
			key: "grammar",
			icon: <FileExclamationOutlined />,
			component: <GrammarSection text={writing} />
		},
		{
			label: "Writing sample",
			key: "writing sample",
			icon: <BulbOutlined />,
			component: <WritingSampleSection text={topic} />
		}
	];

	const [current, setCurrent] = useState(defaultCurrent);
	const [content, setContent] = useState(defaultContent);

	useEffect(() => {
		const item = items.find((i) => i.key === current);
		setContent(item.component);
	}, [current]);

	const handleOnClick = (e) => {
		setCurrent(e.key);
	};

	return (
		<>
			<Menu
				onClick={handleOnClick}
				selectedKeys={current}
				mode="horizontal"
				items={items}
				style={{ margin: "5px 10px 0" }}

			/>
			<div style={{ margin: "10px 3% 40px" }}>{content}</div>
		</>
	);
};

export default NavBar;
