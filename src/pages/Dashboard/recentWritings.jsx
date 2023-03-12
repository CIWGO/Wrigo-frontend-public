import HeadingComponent from "../../components/Heading/index.jsx";
import UtilityCard from "../../components/UtilityCard/index.jsx";
import styled, { withTheme } from "styled-components";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const UtilityCardsWrapper = styled.div`
  margin: 8px 15px;
  display: flex;
  justify-content: flex-start;
  height: 250px;
`;

const RecentWritings = (props) => {
	return (
		<div>
			<HeadingComponent displayValue={"Recent Writings"} />
			<UtilityCardsWrapper>
				<Link to="/user/writings">
					<UtilityCard>
						<EllipsisOutlined
							style={{ fontSize: "60px", color: props.theme.defaultColor }}
						/>
					</UtilityCard>
				</Link>
			</UtilityCardsWrapper>
		</div>
	);
};
export default withTheme(RecentWritings);
