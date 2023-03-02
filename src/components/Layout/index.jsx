import { Col, Row } from "antd";
import styled from "styled-components";

const StyledRow = styled(Row)`
  background: ${(props) => props.theme.background};
  height: 100vh
`;

const Layout = ({ children }) => {
	return (
		<StyledRow>
			<Col span={5}>side bar goes here</Col>
			<Col span={19}>{children}</Col>
		</StyledRow>
	);
};
export default Layout;
