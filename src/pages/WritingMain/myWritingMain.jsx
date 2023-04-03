import { viewHistory } from "../../utils/index";
import { useState, useEffect } from "react";
import HeadingComponent from "../../components/Heading/index.jsx";
import UtilityCard from "../../components/UtilityCard/index";
import { useTheme } from "styled-components";
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import { StyledButton, StyledWritingHistoryPage, UtilityCardsWrapper } from "./style";
import WritingContentCard from "./WritingContentCard";
import { Skeleton } from "antd";

const WritingHistoryPage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [displayCount, setDisplayCount] = useState(17);

	useEffect(() => {
		setLoading(true);
		const fromDate = "1970-01-01";
		const toDate = new Date().toISOString().slice(0, 10);
		const token = localStorage.getItem("token");
		const uid = localStorage.getItem("uid");
		viewHistory({ token, uid, type: "writingHistory", from: fromDate, to: toDate }).then((response) => {
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
		setDisplayCount(displayCount + 12);
	};

	const {
		defaultColor
	} = useTheme();

	return (
		<>
			<HeadingComponent displayValue={"Writings Main"} />
			{loading
				? (
			// loading skeletons...need to add animation//
					<StyledWritingHistoryPage>
						<UtilityCardsWrapper to="/user/writings/evaluation">
							<UtilityCard>
								<PlusOutlined
									style={{ fontSize: "60px", color: defaultColor }}
								/>
							</UtilityCard>
						</UtilityCardsWrapper>
						{Array(17)
							.fill()
							.map((_, index) => (
								<UtilityCardsWrapper key={index} >
									<UtilityCard>
										<Skeleton active />
									</UtilityCard>
								</UtilityCardsWrapper>
							))}
					</StyledWritingHistoryPage>
				)
				: (
					// 1 single new writing card + main writing cards(mapped) + 1 load more card//
					<StyledWritingHistoryPage>
						<UtilityCardsWrapper to="/user/writings/evaluation">
							<UtilityCard>
								<PlusOutlined
									style={{ fontSize: "60px", color: defaultColor }}
								/>
							</UtilityCard>
						</UtilityCardsWrapper>
						{data.slice(0, displayCount - 1).map((item, index) => (

							<UtilityCardsWrapper to={`/user/writings/${item.writing_id}`} key={index}>
								<UtilityCard>
									<WritingContentCard loading={loading}
										id= {item.writing_id}
										taskTopic={item.task_topic}
										writingContent={item.writing_content}
										submitTime={item.submit_time}/>
								</UtilityCard>
							</UtilityCardsWrapper>
						))}

						{data.length > displayCount && (
							<UtilityCardsWrapper>
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
				)}
		</>
	);
};

export default WritingHistoryPage;
