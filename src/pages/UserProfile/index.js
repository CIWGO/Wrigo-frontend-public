import LineChart from "../../components/Charts/LineChart/index";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
	const [data, setData] = useState([]);
	const uid = localStorage.getItem("uid");
	const token = localStorage.getItem("token");

	useEffect(() => {
		axios({
			method: "post",
			url: "http://localhost:3005/api/writingStatistics",
			data: {
				uid,
				token
			}
		})
			.then(function (response) {
				const data = response.data;
				setData(data);
			})
			.catch(function (error) {
				console.error("Error:", error);
			});
	}, [uid, token]);

	const lineChartData = Object.values(data).slice(0, 5);

	return (
		<div>
			{data && <LineChart marks={lineChartData} />}

		</div>
	);
};
export default UserProfile;
