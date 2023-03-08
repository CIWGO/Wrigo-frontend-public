import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/Dashboard/index";
import Writing from "../pages/Writing/index";
import SignUpPage from "../pages/SignUp/index";
import UserProfile from "../pages/UserProfile/index";
import Login from "../pages/Login/index";
function Router () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<DashBoardPage />} />
				<Route path="/writings/*" element={<Writing />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/userprofile" element={<UserProfile />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
