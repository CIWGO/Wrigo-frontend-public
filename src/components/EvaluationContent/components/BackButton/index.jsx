import { LeftOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledButton = styled.button`
	&& {
		background-color: transparent;
    color: rgb(47, 113, 218);
    width: max-content;
    border: none;
    position: absolute;
    top: 5rem;
    left: 228px;
    font-size: 1.4rem;
    font-weight: 560;
    font-family: 'Poppins', sans-serif;
    ;
		:hover {
      cursor: pointer;
    }
	}
`;
const BackButton = () => {
	return (
		<StyledButton>
			<LeftOutlined />
			Go Back
		</StyledButton>
	);
};

export default BackButton;
