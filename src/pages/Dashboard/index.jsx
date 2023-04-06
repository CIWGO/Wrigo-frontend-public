import RecentWriting from "./recentWritings";
import PopularTopicsCard from "./popularTopics";
import { Background, RecentWritingBox, BottomRow, LineChartDiv } from "./style";
import React, { useEffect, useState } from "react";
import LineChart from "../../components/Charts/LineChart/index";
import { writingStatistics, viewAllWritingHistory } from "../../utils/index";

const DashBoardPage = () => {
	const uid = localStorage.getItem("uid");
	const token = localStorage.getItem("token");

	const [data, setData] = useState([]);
	const [writings, setWritings] = useState([]);

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

	useEffect(() => {
		viewAllWritingHistory({ uid })
			.then(response => {
				setWritings(response.data);
			})
			.catch(function (error) {
				console.error("Error in fetching all writing history:", error);
			});
	});
	console.log(writings);

	return (
		<>
			<Background>

				<RecentWritingBox>
					<RecentWriting />
				</RecentWritingBox>

				<BottomRow>
					<PopularTopicsCard />

					<LineChartDiv>
						{data && <LineChart marks={lineChartData} />}
					</LineChartDiv>
				</BottomRow>
			</Background>

			{/* <Layout>
				<div>
					<RecentWriting />
				</div>
				<div>
					<PopularTopicsCard />
				</div>
			</Layout>

		// <Layout>
		// 	<RecentWriting />
		// 	<PopularTopicsCard />
		// </Layout> */}
		</>
	);
};
export default DashBoardPage;
