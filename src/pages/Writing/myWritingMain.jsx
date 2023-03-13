import HeadingComponent from "../../components/Heading/index.jsx";
import UtilityCard from "../../components/UtilityCard/index.jsx";
import styled, { withTheme } from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./myWritingMain.module.css";
import { Link } from "react-router-dom";

const UtilityCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1200px;
  margin: 16px auto;
`;

const SortByDate = styled.span`
  margin-left: 16px;
  font-size: 16px;
  color: ${props => props.theme.defaultColor};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`;

const CardTop = styled.div`
  ${styles.cardTop};
`;

const CardMiddle = styled.div`
  ${styles.cardMiddle};
  font-size: 40px;
  font-weight: ${props => props.theme.headingFontWeight};
  color: ${props => props.theme.defaultColor};
  margin-bottom: 4px;
  display: flex;
  align-items: center;
`;

const CardBottom = styled.div`
  ${styles.cardBottom};
  color: #CCCCCC;
`;

const CARDS_PER_PAGE = 10;

const WritingMain = (props) => {
	const [cards, setCards] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	// nav to next page
	// const navigate = useNavigate();
	// const onClickIcon = () => {
	// 	navigate("/writings/evaluation");
	// };

	// sort card by date
	const sortCardsByDate = () => {
		setCards((cards) =>
			[...cards].sort((a, b) => new Date(b.submit_time) - new Date(a.submit_time))
		);
	};

	useEffect(() => {
		async function fetchData () {
			try {
				const data = {
					type: "writingHistory",
					uid: "333",
					from: "2023-02-24",
					to: "2023-03-08"
				};
				const res = await axios.post("http://localhost:3005/users/viewHistory", data);
				setCards(res.data);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);

	const cardsToDisplay = cards.slice((currentPage - 1) * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE);

	const nextPage = () => {
		setCurrentPage((currentPage) => currentPage + 1);
	};

	const prevPage = () => {
		setCurrentPage((currentPage) => currentPage - 1);
	};

	return (
		<div>
			<div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
				<HeadingComponent displayValue={"My Writings"} />
				<SortByDate onClick={sortCardsByDate}>Sort by date</SortByDate>
			</div>
			<UtilityCardsWrapper>
				<Link to="evaluation">
					<UtilityCard key="new-card" className={styles.utilityCard} style={{ marginBottom: "8px" }}>
						<PlusOutlined
							style={{ fontSize: "60px", color: props.theme.defaultColor }}
						// onClick={onClickIcon}
						/>
					</UtilityCard>
				</Link>

				{cardsToDisplay.map((card) => (
					<UtilityCard key={card.writing_id} style={{ marginBottom: "8px" }} cardSize={236}>
						<CardTop className={styles.cardTop}>{`${card.task_topic.split(" ").slice(0, 5).join(" ")}...`}</CardTop>
						<CardMiddle className={styles.cardMiddle}>7</CardMiddle>
						<CardBottom className={styles.cardBottom}>
							{`${new Date(card.submit_time).toLocaleString("en-US", {
								hour: "numeric",
								minute: "numeric",
								hour12: true
							})}, ${new Date(card.submit_time).toLocaleString("en-US", {
								day: "numeric",
								month: "short",
								year: "numeric"
							})}`}
						</CardBottom>
					</UtilityCard>
				))}
			</UtilityCardsWrapper>
			<div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
				<button onClick={prevPage} disabled={currentPage === 1}>
					Previous Page
				</button>
				<button onClick={nextPage} disabled={cardsToDisplay.length < CARDS_PER_PAGE}>
					Next Page
				</button>
			</div>
		</div>
	);
};

export default withTheme(WritingMain);
