import { viewHistory } from "../../utils/index";
import { useState, useEffect } from "react";
import HeadingComponent from "../../components/Heading/index.jsx";
import UtilityCard from "../../components/UtilityCard/index";
import { useTheme } from "styled-components";
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import { StyledButton, StyledWritingHistoryPage, UtilityCardsWrapper } from "./style";
import WritingContentCard from "./WritingContentCard";
import { Skeleton } from "antd";
import { v4 as uuidv4 } from "uuid";
import { deleteWriting } from "../../utils/API";

const WritingHistoryPage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [displayCount, setDisplayCount] = useState(17);
	const [deletedCardId, setDeletedCardId] = useState([]);
	const newWritingId = uuidv4();

	useEffect(() => {
		setLoading(true);
		const fromDate = "1970-01-01";
		const toDate = "2050-01-01";
		const token = localStorage.getItem("token");
		const uid = localStorage.getItem("uid");
		viewHistory({ token, uid, type: "writingHistory", from: fromDate, to: toDate }).then((response) => {
			if (response.status === 200) {
				setData(response.data);
			} else if (response.status === 500) {
				alert("Something is wrong with network, please retry.");
			}
			setLoading(false);
		});
	}, []);
	const handleDelete = async (token, uid, writingId, event) => {
		event.preventDefault();
		event.stopPropagation();
		setDeletedCardId([...deletedCardId, writingId]); deleteWriting({ token, uid, writing_id: writingId });
	};
	const handleLoadMore = () => {
		setDisplayCount(displayCount + 12);
	};

	const {
		defaultColor
	} = useTheme();

	return (
		<>
			<HeadingComponent displayValue={"My Writings"} />
			{loading
				? (
			// loading skeletons...need to add animation//
					<StyledWritingHistoryPage>
						<UtilityCardsWrapper>
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
						<UtilityCardsWrapper to={`/user/writings/evaluation/${newWritingId}`}>
							<UtilityCard>
								<PlusOutlined
									style={{ fontSize: "60px", color: defaultColor }}
								/>
							</UtilityCard>
						</UtilityCardsWrapper>
						{data.slice(0, displayCount - 1).map((item, index) => (
							!deletedCardId.includes(item.writing_id) && (
								<UtilityCardsWrapper to={`/user/writings/${item.writing_id}`} key={index}>
									<UtilityCard>
										<WritingContentCard loading={loading}
											id={item.writing_id}
											taskTopic={item.task_topic}
											writingContent={item.writing_content}
											submitTime={item.submit_time}
											handleDelete={handleDelete}
										/>
									</UtilityCard>
								</UtilityCardsWrapper>
							)
						))}

						{data.length > displayCount && (
							<UtilityCardsWrapper>
								<UtilityCard>
									<StyledButton onClick={handleLoadMore}>
										<EllipsisOutlined
											style={{ fontSize: "60px", color: "#2f71da" }}
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
