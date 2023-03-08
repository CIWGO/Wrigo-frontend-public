import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/Dashboard/index";
import EmailVerificationPage from "../pages/EmailVerification/index";
// import WritingPage from "../pages/Writing/index";
import EmailChange from "../pages/EmailChange/index";
import WritingPage from "../pages/Writing/index-old";
import Writing from "../pages/Writing/index";
import SignUpPage from "../pages/SignUp/index";
import UserProfile from "../pages/UserProfile/index";
import ReduxExample from "../pages/ReduxExample/index";

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<DashBoardPage />} />
				<Route path="/writings" element={<WritingPage />} />
				<Route path="/emailVerification" element={<EmailVerificationPage />} />
				<Route path="/emailChange" element={<EmailChange />} />
				<Route path="/writings/*" element={<Writing />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/userprofile" element={<UserProfile />} />
				<Route path="/reduxExample" element={<ReduxExample />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
