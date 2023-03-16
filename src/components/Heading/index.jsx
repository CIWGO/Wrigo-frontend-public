import styled from "styled-components";

const HeadingWrapper = styled.div`
  font-size: ${(props) => props.theme.headingSize};
  font-weight: ${(props) => props.theme.headingFontWeight};
  color: ${(props) => props.theme.defaultColor || "blue"};
  height: 30px;
  margin: 0 15px;
  text-align: start;
`;

const HeadingComponent = (props) => {
	const { displayValue } = props;

	return <HeadingWrapper>{displayValue}</HeadingWrapper>;
};
export default HeadingComponent;
