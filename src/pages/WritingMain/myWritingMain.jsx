import { viewHistory } from "../../utils/index";
import { useState, useEffect } from "react";
import HeadingComponent from "../../components/Heading/index.jsx";
// import WritingCard from "../../components/WritingCard/index";
import UtilityCard from "../../components/UtilityCard/index";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import { StyledButton, StyledWritingHistoryPage, UtilityCardsWrapper } from "./style";
import WritingContentCard from "./WritingContentCard";

const WritingHistoryPage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [displayCount, setDisplayCount] = useState(14);

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
		setDisplayCount(displayCount + 10);
	};

	const {
		defaultColor
	} = useTheme();

	return (
		<>

			<HeadingComponent displayValue={"Writings Main"} />
			{loading ? <p>loadiing</p> : ""}
			<StyledWritingHistoryPage>
				<UtilityCardsWrapper to="/user/writings/evaluation">
					<UtilityCard>
						<PlusOutlined
							style={{ fontSize: "60px", color: defaultColor }}
						/>
					</UtilityCard>
				</UtilityCardsWrapper>

				{data.slice(0, displayCount - 1).map((item, index) => (

					<Link to={item.writing_id}key={index}>
						<UtilityCardsWrapper to="/user/writings">
							<UtilityCard>
								<WritingContentCard loading={loading}
									id= {item.writing_id}
									taskTopic={item.task_topic}
									writingContent={item.writing_content}/>
							</UtilityCard>
						</UtilityCardsWrapper>
					</Link>
				))}

				{data.length > displayCount && (
					<UtilityCardsWrapper to="/user/writings">
						<UtilityCard>
							<StyledButton onClick={handleLoadMore}>
								<EllipsisOutlined
									style={{ fontSize: "60px", color: "rgb(47, 113, 218)" }}
								/>
							</StyledButton>
						</UtilityCard>
					</UtilityCardsWrapper>
				)}
			</StyledWritingHistoryPage>
		</>
	);
};

export default WritingHistoryPage;
