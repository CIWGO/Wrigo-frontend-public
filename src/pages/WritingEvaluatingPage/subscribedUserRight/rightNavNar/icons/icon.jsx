
import styled from "styled-components";

const IconWrap = styled.div`
width:30%;
`;
const Icon = ({ svg }) => {
	return (
		<IconWrap>
			{ svg }
		</IconWrap>
	);
};

export default Icon;
