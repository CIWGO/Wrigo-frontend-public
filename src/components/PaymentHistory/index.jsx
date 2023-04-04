import Title from "./components/Title";
import HistoryTable from "./components/Table";
import styled from "styled-components";

const StyledDiv = styled.div`
	margin-left: 150px;
`;

const PaymentHistory = () => {
	return (
		<StyledDiv>
			<Title />
			<HistoryTable />
		</StyledDiv>
	);
};

export default PaymentHistory;
