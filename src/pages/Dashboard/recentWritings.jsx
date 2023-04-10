import { withTheme } from "styled-components";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { viewHistory } from "../../utils/index";
import WritingContentCard from "../WritingMain/WritingContentCard";
import UtilityCard from "../../components/UtilityCard/index";
import { Title, UtilityCardWrap, UtilityCardsWrapper, RecentDiv } from "./style";
import { deleteWriting } from "../../utils/API";

const RecentWritings = (props) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const cardWidth = 215;
	const [divWidth, setDivWidth] = useState(null);
	const recentDivRef = useRef(null);
	const [deletedCardId, setDeletedCardId] = useState(null);

	useEffect(() => {
		if (recentDivRef.current) {
			const width = recentDivRef.current.offsetWidth;
			setDivWidth(width);
		}
	}, [screenWidth]);

	useEffect(() => {
		function handleResize () {
			setScreenWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [screenWidth]);

	const cardCount = Math.floor(divWidth / cardWidth) - 1;

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
		console.log(1);
		event.preventDefault();
		event.stopPropagation();
		setDeletedCardId(writingId); deleteWriting({ token, uid, writing_id: writingId });
	};
	const renderCards = () => {
		return data.map((card, index) => {
			if (index < cardCount) {
				return (
					card.writing_id !== deletedCardId && (
						<Link key={card.id} to={`/user/writings/${card.writing_id}`}>
							<UtilityCardWrap key={card.id}>
								<UtilityCard >
									<WritingContentCard

										loading={card.loading}
										id={card.writing_id}
										taskTopic={card.task_topic}
										writingContent={card.writingContent}
										submitTime={card.submit_time}
										handleDelete={handleDelete}
									/>
								</UtilityCard>
							</UtilityCardWrap>
						</Link>)
				);
			} else if (index === cardCount) {
				return (
					<Link key={card.id} to={"/user/writings"} >
						<UtilityCardWrap
							key={card.id}
						>
							<UtilityCard>
								<EllipsisOutlined
									style={{ fontSize: "60px", color: props.theme.defaultColor }}
								/>
							</UtilityCard>
						</UtilityCardWrap>
					</Link>
				);
			} else {
				return null;
			}
		});
	};

	return (
		<RecentDiv ref={recentDivRef}>
			<Title>Recent Writings</Title>
			<UtilityCardsWrapper>

				{loading
					? (
						<div>Loading...</div> // or a loading indicator component
					)
					: data.length === 0
						? (
							<Link to={"/user/writings"}>
								<UtilityCard>
									<EllipsisOutlined
										style={{ fontSize: "60px", color: props.theme.defaultColor }}
									/>
								</UtilityCard>
							</Link>
						)
						: (
							renderCards()
						)}
			</UtilityCardsWrapper>

		</RecentDiv>
	);
};
export default withTheme(RecentWritings);
