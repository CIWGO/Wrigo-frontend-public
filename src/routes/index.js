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
// import TopicContent from "../pages/topicContent/index";
import ResetPasswordPage from "../pages/ResetPassword";
import Payment from "../pages/Payment/index";
import PaymentSuccess from "../pages/Payment/paymentSuccess";

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
				path: "checkout",
				element: <Payment />
			},
			{
				path: "paymentSuccess",
				element: <PaymentSuccess />
			}
			// ,
			// {
			// 	path: "topics/content",
			// 	element: <TopicContent />
			// }
		]
	}
];
