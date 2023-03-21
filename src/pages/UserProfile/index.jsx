import LineChart from "../../components/Charts/LineChart/index";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import FeedbackComponent from "../../components/Feedback/index";
import { useSelector } from "react-redux";
import StatisticCard4 from "../../components/StatisticsCard4";

const UserProfile = () => {
	const [data, setData] = useState([]);
	const { userId, token } = useSelector((state) => state.user);
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

	const lineChartData = Object.values(data).slice(0, 5);

	return (
		<div>
			<StatisticCard4 />
			{data && <LineChart marks={lineChartData} />}
			{/* <FeedbackComponent/> */}
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
