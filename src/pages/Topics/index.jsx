import { useDispatch } from "react-redux";
import { topicActions } from "../../slice/topicSlice";
import { getTopic } from "../../utils/index";
import { useState, useEffect } from "react";
import TopicCard from "../../components/TopicCard/index";
// import { Button } from "antd";
import styled from "styled-components";
import HeadingComponent from "../../components/Heading";
import { Card } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
// import { Card, Skeleton } from "antd";

const StyledTopicPage = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #f5f5f5;
	align-items: center;
`;

const StyledCardContainer = styled.div`
	&& {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		padding-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
	}
`;

const StyledCard = styled(Card)`
	&&{
		border-radius: 20px;
		width: 250px;
		height: 350px;
		margin-right: 16px;
		margin-bottom: 16px;
		display: inline-flex;
    	justify-content: center;
    	align-items: center;
	
	}
	&&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}
`;

const LoadCard = styled.div`
	&& {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

	}
`;

const TopicMainPage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [displayCount, setDisplayCount] = useState(8);
	const dispatch = useDispatch();

	useEffect(() => {
		setLoading(true);
		const token = localStorage.getItem("token");
		const uid = localStorage.getItem("uid");
		getTopic({ token, uid, type: "allTopics" }).then((response) => {
			if (response.status === 200) {
				setData(response.data);
				dispatch(topicActions.saveTopicData(response.data));
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
		<div style={{ height: "100svh" }}>
			<HeadingComponent displayValue={"Topics & Writing Samples"} />
			<StyledTopicPage>
				<StyledCardContainer>
					{data.slice(0, displayCount - 1).map((item, index) => (
						<TopicCard
							loading={loading}
							key={index}
							topic={item.topic_content}
							topicId={item.topic_id}
						/>
					))}
					{data.length > displayCount && (
						<StyledCard onClick={handleLoadMore}>
							<LoadCard>
								<EllipsisOutlined
									style={{ fontSize: "60px", color: "#2f71da" }}
								/>
							</LoadCard>
						</StyledCard>
					)}
				</StyledCardContainer>
			</StyledTopicPage>
		</div>
	);
};

export default TopicMainPage;
