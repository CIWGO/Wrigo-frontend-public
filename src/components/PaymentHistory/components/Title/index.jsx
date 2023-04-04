import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
  color: #2F71DA;
  font-weight: 900;
  font-size: 24px;
  display: flex;
  width: 50rem; 

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

const Title = () => {
	return (
		<StyledCard>Payment History</StyledCard>
	);
};

export default Title;
