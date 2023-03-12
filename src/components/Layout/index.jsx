import { Col, Row } from "antd";
import styled from "styled-components";
import SideBar from "../SideBar/index";

const StyledRow = styled(Row)`
  background: ${(props) => props.theme.background};
  height: 100vh
`;

const Layout = () => {
	return (
		<StyledRow>
			<Col span={5}><SideBar /></Col>
			<Col span={19}>{}</Col>
		</StyledRow>
	);
};
export default Layout;
