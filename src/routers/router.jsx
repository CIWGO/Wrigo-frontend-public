import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/Dashboard/index";
import WrithingPage from "../pages/Writing/index-old";
import WritingFirstPage from "../pages/Writing/index";
import SignUpPage from "../pages/SignUp/index";

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<DashBoardPage />} />
				<Route path="/writings/first" element={<WritingFirstPage />} />
				<Route path="/writings/second" element={<WrithingPage />} />
				<Route path="/signup" element={<SignUpPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
