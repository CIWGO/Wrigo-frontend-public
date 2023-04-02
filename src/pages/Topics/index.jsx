import { getTopic } from "../../utils/index";
import { useState, useEffect } from "react";
import TopicCard from "../../components/TopicCard/index";
import { Button } from "antd";
import styled from "styled-components";
import HeadingComponent from "../../components/Heading";

const StyledTopicPage = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #f5f5f5;
	align-items: center;
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

const TopicMainPage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [displayCount, setDisplayCount] = useState(8);
	useEffect(() => {
		setLoading(true);
		const token = localStorage.getItem("token");
		const uid = localStorage.getItem("uid");
		getTopic({ token, uid, type: "allTopics" }).then((response) => {
			if (response.status === 200) {
				setData(response.data);
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
					{data.slice(0, displayCount).map((item, index) => (
						<TopicCard
							loading={loading}
							key={index}
							topic={item.topic_content}
							topicId={item.topic_id}
						/>
					))}
				</StyledCardContainer>
				{data.length > displayCount && (
					<StyledButton type="primary" onClick={handleLoadMore}>
					Load More
					</StyledButton>
				)}
			</StyledTopicPage>
		</div>
	);
};

export default TopicMainPage;
