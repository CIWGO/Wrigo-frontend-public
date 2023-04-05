import ColumnName from "./components/ColumnName";
import DividerLine from "./components/Divider";
import ContentRow from "./components/ContentRow";
import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
	top: 10px;
	width: 50rem;
	// border-radius: 0;

	@media (max-width: 1100px) {
		width: 35rem;
	  }
	
	  @media (max-width: 768px) {
		width: 25rem;
	  }
	
	  @media (max-width: 468px) {
		width: 17rem;
	  }
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
