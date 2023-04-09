import styled from "styled-components";

const HeadingWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.headingSize};
  font-weight: ${(props) => props.theme.headingFontWeight};
  color: ${(props) => props.theme.defaultColor || "blue"};
  height: 30px;
  margin: 0 25px;
  text-align: start;
`;

const HeadingComponent = (props) => {
	const { displayValue } = props;

	return <HeadingWrapper>{displayValue}</HeadingWrapper>;
};
export default HeadingComponent;
