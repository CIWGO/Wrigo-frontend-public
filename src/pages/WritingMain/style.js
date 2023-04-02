import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const StyledWritingHistoryPage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 0 5px;
  
  flex-wrap: wrap;
  
`;

export const UtilityCardsWrapper = styled(Link)`
  margin: 8px 5px;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.primaryColor};
`;

export const StyledButton = styled(Button)`
	height: 25px;
  border:none;
	width: 100px;
`;
