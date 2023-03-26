import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import HeadingComponent from "../../components/Heading/index.jsx";
import { viewHistory } from "../../utils/index";
import UtilityCard from "../../components/UtilityCard/index.jsx";
import WritingCard from "../../components/WritingCard/index.jsx";

const StyledWritingPage = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #f2f2f2;
	align-items: center;
`;

const UtilityCardsWrapper = styled(Link)`
  margin: 8px 15px;
  display: flex;
  justify-content: flex-start;
  height: 250px;
`;

const WritingCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const WritingMain = (props) => {
	const [writings, setWritings] = useState([]);

	useEffect(() => {
		async function fetchWritings () {
			const requestBody = {
				type: "writingHistory",
				uid: "333",
				from: new Date("1970-01-01"),
				to: new Date()
			};
			const response = await viewHistory(requestBody);
			setWritings(response);
		}

		fetchWritings();
	}, []);

	return (
		<StyledWritingPage>
			<HeadingComponent displayValue={"Writing History"} />
			<UtilityCardsWrapper to="evaluation">
				<UtilityCard>
					<PlusOutlined
						style={{ fontSize: "60px", color: props.theme.defaultColor }}
					/>
				</UtilityCard>
			</UtilityCardsWrapper>
			<WritingCardWrapper>
				{writings.map((writing) => (
					<WritingCard
						key={writing.writing_id}
						taskTopic={writing.task_topic}
						writingContent={writing.writing_content}
					/>
				))}
			</WritingCardWrapper>
		</StyledWritingPage>
	);
};

export default withTheme(WritingMain);
