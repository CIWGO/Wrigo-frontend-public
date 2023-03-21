import LineChart from "../../components/Charts/LineChart/index";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import FeedbackComponent from "../../components/Feedback/index";
import { useSelector } from "react-redux";
import StatisticCard4 from "../../components/StatisticsCard4";
// import { Grid } from "antd";
import RadarChart from "../../components/RadarChart";
const UserProfile = () => {
	// const { useBreakpoint } = Grid;
	const [data, setData] = useState([]);
	const { userId, token } = useSelector((state) => state.user);
	// const screens = useBreakpoint();
	// const uid = localStorage.getItem("uid");
	// const token = localStorage.getItem("token");
	console.log(data);
	useEffect(() => {
		console.log(data);
		axios({
			method: "post",
			url: "http://localhost:3005/api/writingStatistics",
			data: {
				uid: userId,
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
	}, [userId, token]);
	// const gutter = 16; const col1 = 6; const col2 = 6; const col3 = 6; const col4 = 6;
	const lineChartData = Object.values(data).slice(0, 5);

	return (
		<div>
			<StatisticCard4 />
			{data && <LineChart marks={lineChartData} />}
			{/* <FeedbackComponent/> */}
			<RadarChart />
			{/* <div style={{ width: 2000, height: 2000 }}>
				<Grid gutter={gutter}>
					<Grid.Row>
						<Grid.Col xs={col4} sm={col4} md={col2} lg={col1} xl={col1} xxl={col1}>
							<div style={{ background: "#f0f2f5", height: 120 }}>Content 1</div>
						</Grid.Col>
						<Grid.Col xs={col4} sm={col4} md={col2} lg={col2} xl={col2} xxl={col2}>
							<div style={{ background: "#f0f2f5", height: 120 }}>Content 2</div>
						</Grid.Col>
						<Grid.Col xs={col4} sm={col4} md={col2} lg={col3} xl={col3} xxl={col3}>
							<div style={{ background: "#f0f2f5", height: 120 }}>Content 3</div>
						</Grid.Col>
						<Grid.Col xs={col4} sm={col4} md={col4} lg={col4} xl={col4} xxl={col4}>
							<div style={{ background: "#f0f2f5", height: 120 }}>Content 4</div>
						</Grid.Col>
					</Grid.Row>
				</Grid>
			</div> */}
		</div>
	);
};
export default UserProfile;

// import { Col, Row, Slider } from 'antd';

// const gutters: Record<PropertyKey, number> = {};
// const vgutters: Record<PropertyKey, number> = {};
// const colCounts: Record<PropertyKey, number> = {};

// [8, 16, 24, 32, 40, 48].forEach((value, i) => {
//   gutters[i] = value;
// });
// [8, 16, 24, 32, 40, 48].forEach((value, i) => {
//   vgutters[i] = value;
// });
// [2, 3, 4, 6, 8, 12].forEach((value, i) => {
//   colCounts[i] = value;
// });

// const App: React.FC = () => {
//   const [gutterKey, setGutterKey] = useState(1);
//   const [vgutterKey, setVgutterKey] = useState(1);
//   const [colCountKey, setColCountKey] = useState(2);

//   const cols = [];
//   const colCount = colCounts[colCountKey];
//   let colCode = '';
//   for (let i = 0; i < colCount; i++) {
//     cols.push(
//       <Col key={i.toString()} span={24 / colCount}>
//         <div>Column</div>
//       </Col>,
//     );
//     colCode += `  <Col span={${24 / colCount}} />\n`;
//   }

//   return (
//     <>
//       <span>Horizontal Gutter (px): </span>
//       <div style={{ width: '50%' }}>
//         <Slider
//           min={0}
//           max={Object.keys(gutters).length - 1}
//           value={gutterKey}
//           onChange={setGutterKey}
//           marks={gutters}
//           step={null}
//           tooltip={{ formatter: (value: number) => gutters[value] }}
//         />
//       </div>
//       <span>Vertical Gutter (px): </span>
//       <div style={{ width: '50%' }}>
//         <Slider
//           min={0}
//           max={Object.keys(vgutters).length - 1}
//           value={vgutterKey}
//           onChange={setVgutterKey}
//           marks={vgutters}
//           step={null}
//           tooltip={{ formatter: (value: number) => vgutters[value] }}
//         />
//       </div>
//       <span>Column Count:</span>
//       <div style={{ width: '50%', marginBottom: 48 }}>
//         <Slider
//           min={0}
//           max={Object.keys(colCounts).length - 1}
//           value={colCountKey}
//           onChange={setColCountKey}
//           marks={colCounts}
//           step={null}
//           tooltip={{ formatter: (value: number) => colCounts[value] }}
//         />
//       </div>
//       <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
//         {cols}
//         {cols}
//       </Row>
//       Another Row:
//       <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
//       <pre className="demo-code">{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}\n${colCode}</Row>`}</pre>
//       <pre className="demo-code">{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
//     </>
//   );
// };

// export default App;
