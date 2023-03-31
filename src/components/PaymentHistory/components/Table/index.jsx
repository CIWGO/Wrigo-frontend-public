import ColumnName from "./components/ColumnName";
import DividerLine from "./components/Divider";
import ContentRow from "./components/ContentRow";
import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
	top: 10px;
	width: 65%;
	border-radius: 0;
`;

const HistoryTable = () => {
	return (
		<StyledCard>
			<ColumnName />
			<DividerLine />
			<ContentRow />
		</StyledCard>
	);
};

export default HistoryTable;
