import { Select } from "antd";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

function YearSelector ({ selectedYear, onYearChange }) {
	const currentYear = new Date().getFullYear();
	const startingYear = 2021; // Set the starting year here

	// Generate an array of year options from the starting year to the current year
	const yearOptions = Array.from(
		{ length: currentYear - startingYear + 1 },
		(_, i) => currentYear - i
	);

	return (
		<DropdownWrapper>
			<Select
				defaultValue={selectedYear}
				style={{ width: 80 }}
				onChange={onYearChange}
			>
				{yearOptions.map((year) => (
					<Select.Option key={year} value={year}>
						{year}
					</Select.Option>
				))}
			</Select>
		</DropdownWrapper>
	);
}
export default YearSelector;
