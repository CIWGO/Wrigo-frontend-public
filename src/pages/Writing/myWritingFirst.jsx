import HeadingComponent from "../../components/Heading/index.jsx";
import UtilityCard from "../../components/UtilityCard/index.jsx";
import styled, { withTheme } from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const UtilityCardsWrapper = styled.div`
  margin: 8px 15px;
  display: flex;
  justify-content: flex-start;
`;

const MyWriting = (props) => {
	const navigate = useNavigate();

	const onClickIcon = () => {
		navigate("/writings/second");
	};

	return (
		<div>
			<HeadingComponent displayValue={"My Writings"} />
			<UtilityCardsWrapper>
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

export default withTheme(MyWriting);
