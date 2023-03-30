import { viewHistory } from "../../utils/index";
import { useState, useEffect } from "react";
import HeadingComponent from "../../components/Heading/index.jsx";
import WritingCard from "../../components/WritingCard/index";
import UtilityCard from "../../components/UtilityCard/index";
import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const StyledWritingHistoryPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  align-items: flex-start;
`;

const UtilityCardsWrapper = styled(Link)`
  margin: 8px 15px;
  display: flex;
  justify-content: flex-start;
  height: 250px;
  color: ${(props) => props.theme.primaryColor};
`;

const StyledCardContainer = styled.div`
  && {
    text-align: left;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const StyledButton = styled(Button)`
	height: 25px;
	width: 100px;
	margin-top: 5px;
	margin-bottom: 20px;
	color: #2f71da;
	border-color: #2f71da;
	background: none;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 225px;
	&:hover {
		color: white;
		border-color: none;
	}
`;

const WritingHistoryPage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [displayCount, setDisplayCount] = useState(8);

	useEffect(() => {
		setLoading(true);
		const fromDate = "1970-01-01";
		const toDate = new Date().toISOString().slice(0, 10);
		viewHistory({ type: "writingHistory", from: fromDate, to: toDate, uid: "333" }).then((response) => {
			if (response.status === 200) {
				setData(response.data);
				console.log(response.data);
			} else if (response.status === 500) {
				alert("Something is wrong with network, please retry.");
			}
			setLoading(false);
		});
	}, []);

	const handleLoadMore = () => {
		setDisplayCount(displayCount + 8);
	};

	return (
		<StyledWritingHistoryPage>
			<HeadingComponent displayValue={"Writings Main"} />

			<StyledCardContainer>
				<UtilityCardsWrapper to="evaluation">
					<UtilityCard>
						<PlusOutlined
							style={{ fontSize: "60px" }}
						/>
					</UtilityCard>
				</UtilityCardsWrapper>
				{data.slice(0, displayCount).map((item, index) => (

					<Link to={item.writing_id}key={index}>
						<WritingCard
							loading={loading}
							id= {item.writing_id}
							taskTopic={item.task_topic}
							writingContent={item.writing_content}
						/>
					</Link>
				))}
			</StyledCardContainer>
			{data.length > displayCount && (
				<StyledButton type="primary" onClick={handleLoadMore}>
					Load More
				</StyledButton>
			)}
		</StyledWritingHistoryPage>
	);
};

export default WritingHistoryPage;
