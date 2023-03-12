import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/Dashboard/index";
import EmailVerificationPage from "../pages/EmailVerification/index";
// import WritingPage from "../pages/Writing/index";
import EmailChange from "../pages/EmailChange/index";
// import WritingPage from "../pages/Writing/index-old";
import Writing from "../pages/Writing/index";
import SignUpPage from "../pages/SignUp/index";
import LandingPage from "../pages/Landing";
import SubIntroCard from "../components/subIntroCard";
import UserProfile from "../pages/UserProfile/index";
import EditUserProfile from "../pages/EditUserProfile/index";
import Login from "../pages/Login/index";

import ReduxExample from "../pages/ReduxExample/index";

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<DashBoardPage />} />
				{/* <Route path="/writings" element={<WritingPage />} /> */}
				<Route path="/emailVerification" element={<EmailVerificationPage />} />
				<Route path="/emailChange" element={<EmailChange />} />
				<Route path="/writings/*" element={<Writing />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/" element={<LandingPage />} />
				<Route path="/subintrocard" element={<SubIntroCard />} />
				<Route path="/userprofile" element={<UserProfile />} />
				<Route path="/edituserprofile" element={<EditUserProfile />} />

				<Route path="/login" element={<Login />} />

				<Route path="/reduxExample" element={<ReduxExample />} />
				<Route path="/topics" element={<DashBoardPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
