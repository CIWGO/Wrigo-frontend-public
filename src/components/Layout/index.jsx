// import { useState } from "react";
import { Col, Row } from "antd";

const Layout = ({ children }) => {
	return (
		<Row>
			<Col span={5}>side bar</Col>
			<Col span={19}>{children}</Col>
		</Row>
	);
};
export default Layout;
