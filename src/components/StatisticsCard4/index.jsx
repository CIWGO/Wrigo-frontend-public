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
import styled from "styled-components";
import YearSelector from "./YearSelector";
import { useEffect, useState } from "react";
import { writingSubmissions } from "../../utils/API";

const StyledCard = styled.div`
display:flex;
height:100%;
width:100%;
align-items: center;
justify-content: center;
position: relative;
padding:5px;
`;

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function StatisticsCard4 ({ uid, token }) {
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
	const [chartData, setChartData] = useState();

	useEffect(() => {
		writingSubmissions({
			year: selectedYear,
			uid,
			token
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
		<StyledCard style={{ height: "100%", width: "100%" }}>
			<YearSelector style={{ height: "100%", width: "100%" }}
				selectedYear={selectedYear}
				onYearChange={setSelectedYear}
			/>
			{chartData && <Bar style={{ height: "100%", width: "100%" }} options={barChartOptions} data={chartData} />}
		</StyledCard>
	);
}

export default StatisticsCard4;
