import { Navigate } from "react-router-dom";
import RecentWriting from "../pages/Dashboard/recentWritings";
import WritingMain from "../pages/Writing/myWritingMain";
import Profile from "../pages/UserProfile";
import WritingPage from "../pages/Writing/EvaluatingPage";
import Topics from "../pages/Topics";
import LandingPage from "../pages/Landing";
import SignUpPage from "../pages/SignUp";
import Login from "../pages/Login";
import Layout from "../components/Layout";
import EditUserProfile from "../pages/EditUserProfile";
import EmailChangePage from "../pages/EmailChange";
import EmailVerificationPage from "../pages/EmailVerification";
import TopicContent from "../pages/TopicContent";
import ResetPasswordPage from "../pages/ResetPassword";
import PaymentSuccess from "../pages/PaymentSuccess/SuccessPage";
import WritingsPopulate from "../pages/WritingsPopulate";

export default [
	{
		path: "/",
		element: <Navigate to="/landing" />
	},
	{
		path: "/landing",
		element: <LandingPage />
	},
	{
		path: "/signup",
		element: <SignUpPage />
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/emailChange",
		element: <EmailChangePage />
	},
	{
		path: "/emailVerification",
		element: <EmailVerificationPage />
	},
	{
		path: "/edit",
		element: <EditUserProfile />
	},
	{
		path: "/email",
		element: <EmailVerificationPage />
	},
	{
		path: "/resetpassword",
		element: <ResetPasswordPage />
	},

	{
		path: "/user",
		element: <Layout />,
		children: [
			{
				path: "dashboard",
				element: <RecentWriting />
			},
			{
				path: "writings",
				element: <WritingMain />
			},
			{
				path: "writing/:writingId", // new route with dynamic parameter
				element: <WritingsPopulate/>
			},
			{
				path: "writings/evaluation",
				element: <WritingPage />
			},
			{
				path: "topics",
				element: <Topics />
			},
			{
				path: "profile",
				element: <Profile />
			},
			{
				path: "topics/content",
				element: <TopicContent />
			},
			{
				path: "payment-success",
				element: <PaymentSuccess/>
			}
		]
	}
];
