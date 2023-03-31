import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
  color: #2F71DA;
  font-weight: 900;
  font-size: 24px;
  display: flex;
  width: 65%;
  border-radius: 0;
`;

const Title = () => {
	return (
		<StyledCard>Payment History</StyledCard>
	);
};

export default Title;
