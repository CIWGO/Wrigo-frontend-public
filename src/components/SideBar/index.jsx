import styled from "styled-components";

const StyledSideBar = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

`;

const SideBar = (props) => {
	const { children } = props;

	return <StyledSideBar>{children}</StyledSideBar>;
};

export default SideBar;
