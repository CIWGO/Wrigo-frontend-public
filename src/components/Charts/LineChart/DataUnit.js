import React from "react";
import { Line } from "react-chartjs-2";

const ChartData = ({ labels, data, label, borderColor, backgroundColor }) => {
	const chartData = {
		labels,
		datasets: [
			{
				label,
				data,
				borderColor,
				backgroundColor,
				borderWidth: 1
			}
		]
	};

	return (
		<div>
			<Line data={chartData} />
		</div>
	);
};

export default ChartData;
