import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import styled from "styled-components";

const SubMark = styled.div`
  color: rgb(55, 109, 196);
  font-size:16px;
  font-weight:700;
`;

const SubFeedbackContainer = styled.p`
  margin-top:0;
  padding-left:10px;
`;

const { Panel } = Collapse;

const CollapseSection = ({ tr, cc, lr, gra, text1, text2, text3, text4 }) => {
	const { token } = theme.useToken();
	const panelStyle = {
		marginBottom: 20,
		background: token.colorFillAlter,
		backgroundColor: "#EBF5FF",
		borderRadius: token.borderRadiusLG,
		border: "none"
	};

	return (
		<Collapse
			bordered={false}
			defaultActiveKey={["1"]}
			expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
			style={{ background: token.colorBgContainer }}
		>
			<Panel header={<SubMark>Task Response: {tr}</SubMark>} key="1" style={panelStyle }>
				<SubFeedbackContainer>{text1}</SubFeedbackContainer>
			</Panel>

			<Panel header={<SubMark>Coherence and Cohesion: {cc}</SubMark>} key="2" style={panelStyle }>
				<SubFeedbackContainer>{text2}</SubFeedbackContainer>
			</Panel>
			<Panel header={<SubMark>Lexical Resource: {lr}</SubMark>} key="3" style={panelStyle}>
				<SubFeedbackContainer>{text3}</SubFeedbackContainer>
			</Panel>
			<Panel header={<SubMark>Grammar Range and Accuracy: {gra}</SubMark>} key="4" style={panelStyle}>
				<SubFeedbackContainer>{text4}</SubFeedbackContainer>
			</Panel>
		</Collapse>
	);
};

export default CollapseSection;
