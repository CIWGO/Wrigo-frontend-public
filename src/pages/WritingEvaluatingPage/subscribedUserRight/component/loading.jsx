import styled, { keyframes } from "styled-components";

const Loading = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
	display: flex;
	background-color: transparent;
	flex-direction: column;
	align-items: center;
	.loader {
		border: 5px solid #f3f3f3;
		border-top: 5px solid rgb(47, 113, 218);
		border-radius: 50%;
		width: 60px;
		height: 60px;
		animation: ${spin} 1s linear infinite;
		margin: 20px;
	}
`;

const LoadingText = styled.div`
	font-size: 20px;
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700;900&family=Rubik:wght@400;500;600&display=swap");
	font-family: "Poppins", sans-serif;
	font-weight: 500;
	text-align: center;
`;

const GrammarContainer = styled.div`
  /* margin:100px 7% 5vh 7%; */
  padding: 20px;
  text-align:left;
  white-space: pre-wrap;
  line-height: 20px;
`;

const LoadingSection = ({ text }) => {
	return (
		<GrammarContainer>
			<Loading>
				<LoadingContainer>
					<div className="loader"></div>
					<LoadingText>{text}</LoadingText>
					<p>This process may take about a minute.</p>

				</LoadingContainer>
			</Loading>
		</GrammarContainer>
	);
};

export { LoadingSection };
