import HeadingComponent from "../../components/Heading/index.jsx";
import UtilityCard from "../../components/UtilityCard/index.jsx";
import styled, { withTheme } from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { defaultFrontEndPrefix } from "../../constants";

const UtilityCardsWrapper = styled.div`
  margin: 8px 15px;
  display: flex;
  justify-content: flex-start;
`;

const onClickIcon = () => {
	// Fix this href, once the link page done.
	// window.location.href = defaultFrontEndPrefix + '<  the rest router path>'
	window.location.href = `${defaultFrontEndPrefix}/second`;
};

const MyWriting = (props) => {
	return (
		<div>
			<HeadingComponent displayValue={"My Writings"} />
			<UtilityCardsWrapper>
				<UtilityCard>
					<PlusOutlined style={{ fontSize: "60px", color: props.theme.defaultColor }}
						onClick={onClickIcon}
					/>
				</UtilityCard>
			</UtilityCardsWrapper>
		</div>
	);
};
export default withTheme(MyWriting);
