import { Navigate } from "react-router-dom";
import RecentWriting from "../pages/Dashboard/recentWritings";
import WritingMain from "../pages/Writing/myWritingMain";
import Profile from "../pages/UserProfile";
import WritingPage from "../pages/Writing/myWritingEvaluation";
import Topics from "../pages/Topics";
import LandingPage from "../pages/Landing";
import SignUpPage from "../pages/SignUp";
import Login from "../pages/Login";
import Layout from "../components/Layout";
import EditUserProfile from "../pages/EditUserProfile";
import EmailChangePage from "../pages/EmailChange";
import EmailVerificationPage from "../pages/EmailVerification";
import ResetPasswordPage from "../pages/ResetPassword";

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
		path: "/edit",
		element: <EditUserProfile />
	},
	{
		path: "/email",
		element: <EmailVerificationPage />
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
			}
		]
	}
];
