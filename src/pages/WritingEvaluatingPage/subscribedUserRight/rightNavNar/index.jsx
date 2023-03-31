import { Menu } from "antd";
import React, { useState, useEffect } from "react";
import items from "./items";

const NavBar = ({ feedback, writings, sample }) => {
	const [current, setCurrent] = useState("feedback");
	const [content, setContent] = useState(items[0].component);

	useEffect(() => {
		setCurrent(items[0].key);
		setContent(items[0].component);
	}, [items]);

	const handleOnClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);

		const item = items.find((i) => i.key === e.key);
		setContent(item.component);
		console.log("comp:", content.component);
	};

	return (
		<>
			<Menu
				onClick={handleOnClick}
				selectedKeys={current}
				mode="horizontal"
				items={items}
			/>
			<div style={{ marginTop: 20 }} key={current}>
				{content}
			</div>
		</>
	);
};

export default NavBar;
