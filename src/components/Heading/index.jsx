import styled from "styled-components";

const HeadingWrapper = styled.div`
  font-size: ${(props) => props.theme.headingSize};
  font-weight: ${(props) => props.theme.headingFontWeight};
  color: ${(props) => props.theme.defaultColor || "blue"};
  front_family: ${(props) => props.theme.fontFamily};
  width: 100%;
  height: 30px;
  margin: 15px;
  text-align: start;
`;

const HeadingComponent = (props) => {
	const { displayValue } = props;

	return <HeadingWrapper>{displayValue}</HeadingWrapper>;
};
export default HeadingComponent;
