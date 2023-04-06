import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const StyledWritingHistoryPage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const UtilityCardsWrapper = styled(Link)`
  display: inline-block;
  justify-content: left;
  color: ${(props) => props.theme.primaryColor};
  
`;

export const StyledButton = styled(Button)`
	height: 25px;
  border: none;
	width: 100px;
`;
