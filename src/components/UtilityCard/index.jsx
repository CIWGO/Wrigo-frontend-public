import styled from "styled-components";

const StyledUtilityCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 236px;
  height: 236px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UtilityCard = (props) => {
	const { children } = props;

	return <StyledUtilityCard>{children}</StyledUtilityCard>;
};
export default UtilityCard;
