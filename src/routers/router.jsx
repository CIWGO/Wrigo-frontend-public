import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/Dashboard/index";
import EmailVerification from "../pages/Email-verification/emailVerification";
import WrithingPage from "../pages/Writing/index";
import EmailVerificationChange from "../pages/Email-verification/emailVerificationChange";
function Router () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<DashBoardPage />} />
				<Route path="/writings" element={<WrithingPage />} />
				<Route path="/emailVerification" element={<EmailVerification />} />
				<Route path="/emailVerificationChange" element={<EmailVerificationChange />} />

			</Routes>
		</BrowserRouter>
	);
}

export default Router;
