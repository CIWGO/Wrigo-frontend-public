import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/Dashboard/index";
import EmailVerification from "../pages/Email-verification/emailVerification";
// import WritingPage from "../pages/Writing/index";
import EmailVerificationChange from "../pages/Email-verification/emailVerificationChange";
import WritingPage from "../pages/Writing/index-old";
import WritingFirstPage from "../pages/Writing/index";
import SignUpPage from "../pages/SignUp/index";

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<DashBoardPage />} />
				<Route path="/writings" element={<WritingPage />} />
				<Route path="/emailVerification" element={<EmailVerification />} />
				<Route path="/emailVerificationChange" element={<EmailVerificationChange />} />

				<Route path="/writings/first" element={<WritingFirstPage />} />
				<Route path="/writings/second" element={<WritingPage />} />
				<Route path="/signup" element={<SignUpPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
