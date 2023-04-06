import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const StyledWritingHistoryPage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 10px 0 20px;
  flex-wrap: wrap;
`;

export const UtilityCardsWrapper = styled(Link)`
  margin: 6px 7px;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.primaryColor};
`;

export const StyledButton = styled(Button)`
	height: 25px;
  border:none;
	width: 100px;
`;
