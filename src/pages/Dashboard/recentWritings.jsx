import HeadingComponent from "../../components/Heading/index.jsx";
import UtilityCard from "../../components/UtilityCard/index.jsx";
import styled, { withTheme } from "styled-components";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const UtilityCardsWrapper = styled(Link)`
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  height: 250px;
`;

const RecentWritings = (props) => {
	return (
		<div style={{ height: "100svh" }}>
			<HeadingComponent displayValue={"Recent Writings"} />
			<UtilityCardsWrapper to="/user/writings">
				<UtilityCard>
					<EllipsisOutlined
						style={{ fontSize: "60px", color: props.theme.defaultColor }}
					/>
				</UtilityCard>
			</UtilityCardsWrapper>
		</div>
	);
};
export default withTheme(RecentWritings);
