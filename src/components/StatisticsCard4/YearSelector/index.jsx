import { Select } from "antd";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  z-index: 2;
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
		<DropdownWrapper 	>
			<Select
				defaultValue={selectedYear}
				onChange={onYearChange}
				style={{ width: "100%", height: "100%" }}
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
