import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { barChartOptions } from "./barChartOptions";
import { Card } from "antd";
import styled from "styled-components";
import YearSelector from "./YearSelector";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledCard = styled(Card)`
  width: 40vw;
`;

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function StatisticsCard4 () {
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
	const [chartData, setChartData] = useState();
	const uid = localStorage.getItem("uid");
	const token = localStorage.getItem("token");

	useEffect(() => {
		axios({
			method: "post",
			url: "http://localhost:3005/api/writingSubmissions",
			data: {
				year: selectedYear,
				uid,
				token
			}
		})
			.then(function (response) {
				const rawJsonData = response.data;
				const valuesArray = Object.values(rawJsonData);
				const data = {
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets: [
						{
							label: "Submission times",
							data: valuesArray,
							backgroundColor: "rgba(53, 162, 235, 0.5)"
						}
					]
				};
				setChartData(data);
			})
			.catch(function (error) {
				console.error("Error:", error);
			});
	}, [uid, token, selectedYear]);

	return (
		<StyledCard>
			<YearSelector
				selectedYear={selectedYear}
				onYearChange={setSelectedYear}
			/>
			{chartData && <Bar options={barChartOptions} data={chartData} />}
		</StyledCard>
	);
}

export default StatisticsCard4;
