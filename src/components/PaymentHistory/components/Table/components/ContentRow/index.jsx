import styled from "styled-components";

const StyledTable = styled.table`
	color: #2F71DA;
	td {
		width: 135px;
	}
`;

const ContentRow = () => {
	return (
		<StyledTable>
			<tr>
				<td>#123456</td>
				<td>01/01/2023</td>
				<td>Paid</td>
				<td>$9.99</td>
				<td>$10.50</td>
			</tr>
			<tr>
				<td>#123456</td>
				<td>01/01/2023</td>
				<td>Paid</td>
				<td>$9.99</td>
				<td>$10.50</td>
			</tr>
		</StyledTable>
	);
};

export default ContentRow;
