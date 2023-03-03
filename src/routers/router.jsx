import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/Dashboard/index";
import WrithingPage from "../pages/Writing/index";
import SignUpPage from "../pages/SignUp/index";
import LineChart from "../components/Charts/LineChart/LineChart";

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<DashBoardPage />} />
				<Route path="/writings" element={<WrithingPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/chart" element={<LineChart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
