// import styled from "styled-components";

// const StyledUtilityCard = styled.div`
//   background: #ffffff;
//   border-radius: 20px;
//   width: 236px;
//   height: 236px;
//   padding: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const UtilityCard = (props) => {
// 	const { children } = props;

// 	return <StyledUtilityCard>{children}</StyledUtilityCard>;
// };
// export default UtilityCard;

import { Card } from "antd";
import styled from "styled-components";

const StyledCard = styled(Card)`
  && {
    border-radius: 20px;
    width: 200px;
    height: 200px;
    margin-right: 16px;
    margin-bottom: 16px;
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
