import { Menu } from "antd";
import React, { useState, useEffect } from "react";
import { items } from "./items";

const NavBar = () => {
	const [current, setCurrent] = useState("feedback");
	const [content, setContent] = useState(items[0].component);

	useEffect(() => {
		if (items && items.length > 0) {
			setCurrent(items[0].key);
			setContent(items[0].component);
		}
	}, [items]);

	const handleOnClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);

		const item = items.find((i) => i.key === e.key);
		if (item && item.component) {
			setContent(item.component);
		}
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
