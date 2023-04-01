import { Card } from "antd";
import styled from "styled-components";

const StyledCard = styled(Card)`
  && {
    border-radius: 20px;
    width: 148px;
    height: 148px;
    margin-top:9px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &&:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const UtilityCard = (props) => {
	const { children } = props;

	return <StyledCard>{children}</StyledCard>;
};

export default UtilityCard;
