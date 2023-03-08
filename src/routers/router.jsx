import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/Dashboard/index";
import Writing from "../pages/Writing/index";
import SignUpPage from "../pages/SignUp/index";
import LandingPage from "../pages/Landing";
import SubIntroCard from "../components/subIntroCard";
import UserProfile from "../pages/UserProfile/index";
import ReduxExample from "../pages/ReduxExample/index";

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<DashBoardPage />} />
				<Route path="/writings/*" element={<Writing />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/landing" element={<LandingPage />} />
				<Route path="/subintrocard" element={<SubIntroCard />} />
				<Route path="/userprofile" element={<UserProfile />} />
				<Route path="/reduxExample" element={<ReduxExample />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
