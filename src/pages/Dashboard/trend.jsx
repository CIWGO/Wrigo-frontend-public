import LineChart from "../../components/Charts/LineChart/index";
import React, { useEffect, useState } from "react";
import { writingStatistics } from "../../utils/index";
import { LineChartDiv, LineChartBackground, Title } from "./style";

const Trend = () => {
	const uid = localStorage.getItem("uid");
	const token = localStorage.getItem("token");

	const [data, setData] = useState([]);

	useEffect(() => {
		writingStatistics({ uid, token })
			.then(response => {
				const data = response.data;
				setData(data);
			}).catch(function (error) {
				console.error("Error in fetching writing statistics :", error);
			});
	}, [uid, token]);
	const lineChartData = Object.values(data).slice(0, 5);

	return (
		<LineChartDiv>
			<Title>Trend</Title>
			<LineChartBackground>
				{data && <LineChart marks={lineChartData} />}
			</LineChartBackground>
		</LineChartDiv>

	);
};

export default Trend;
