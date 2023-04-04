import History from "../../components/PaymentHistory";
import styled from "styled-components";

const StyledDiv = styled.div`
	height: 100vh;
`;

const PaymentHistory = () => {
	return (
		<StyledDiv>
			<History />
		</StyledDiv>
	);
};

export default PaymentHistory;
