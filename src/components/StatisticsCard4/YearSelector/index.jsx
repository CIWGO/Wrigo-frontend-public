import { Select } from "antd";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

function YearSelector ({ selectedYear, onYearChange }) {
	return (
		<DropdownWrapper>
			<Select
				defaultValue={selectedYear}
				style={{ width: 80 }}
				onChange={onYearChange}
			>
				<Select.Option value={2023}>2023</Select.Option>
				<Select.Option value={2022}>2022</Select.Option>
				<Select.Option value={2021}>2021</Select.Option>
			</Select>
		</DropdownWrapper>
	);
}
export default YearSelector;
