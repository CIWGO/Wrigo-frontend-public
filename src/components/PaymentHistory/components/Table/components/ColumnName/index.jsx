import styled from "styled-components";
// import { Card } from "antd";

const StyledTable = styled.table`
	color: #2F71DA;
	th {
		width:135px;
	}
`;

const ColumnName = () => {
	return (
		<StyledTable>
			<tr>
				<th>Invoice id</th>
				<th>Payment date</th>
				<th>Payment status</th>
				<th>Payment amount</th>
				<th>Total amount</th>
			</tr>
		</StyledTable>
	);
};

export default ColumnName;
