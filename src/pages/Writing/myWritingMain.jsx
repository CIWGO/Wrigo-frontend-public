import HeadingComponent from "../../components/Heading/index.jsx";
import UtilityCard from "../../components/UtilityCard/index.jsx";
import styled, { withTheme } from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UtilityCardsWrapper = styled.div`
  margin: 8px 15px;
  display: flex;
  justify-content: flex-start;
`;

const WritingMain = (props) => {
	const navigate = useNavigate();

	const [cards, setCards] = useState([
		{
			id: 1,
			title: "Card 1",
			date: "2022-03-01"
		},
		{
			id: 2,
			title: "Card 2",
			date: "2022-03-03"
		},
		{
			id: 3,
			title: "Card 3",
			date: "2022-03-02"
		}
	]);

	const onClickIcon = () => {
		navigate("/writings/evaluation");
	};

	const sortCardsByDate = () => {
		setCards((cards) =>
			[...cards].sort((a, b) => new Date(b.date) - new Date(a.date))
		);
	};

	return (
		<div>
			<HeadingComponent displayValue={"My Writings"} />
			<button onClick={sortCardsByDate}>Sort by date</button>
			<UtilityCardsWrapper>
				{cards.map((card) => (
					<UtilityCard key={card.id}>
						{card.title} - {card.date}
					</UtilityCard>
				))}
				<UtilityCard>
					<PlusOutlined
						style={{ fontSize: "60px", color: props.theme.defaultColor }}
						onClick={onClickIcon}
					/>
				</UtilityCard>
			</UtilityCardsWrapper>
		</div>
	);
};

export default withTheme(WritingMain);
