import { Navigate } from "react-router-dom";
import Statistics from "../pages/Statistics";
import Profile from "../pages/Profile";
import WritingPage from "../pages/WritingEvaluatingPage";
import Topics from "../pages/Topics";
import LandingPage from "../pages/Landing";
import SignUpPage from "../pages/SignUp";
import Login from "../pages/Login";
import Layout from "../components/Layout";
import EditUserProfile from "../pages/EditUserProfile";
import EmailChangePage from "../pages/EmailChange";
import EmailVerificationPage from "../pages/EmailVerification";
import TopicContent from "../pages/TopicContent/index";
import WritingsPopulate from "../pages/WritingsPopulate";
import DashBoardPage from "../pages/Dashboard/index";
import Payment from "../pages/Payment/index";
import MyWritingMain from "../pages/WritingMain/myWritingMain";
import PaymentSuccess from "../pages/Payment/paymentSuccess";
import PaymentHistory from "../pages/PaymentHistory";
import ResetPasswordEmailVerificationPage from "../pages/ResetPassword/ResetPasswordEmailVerification";
import ResetPasswordPage from "../pages/ResetPassword/ResetPasswordPage";
import Infinite from "../pages/WrigoInfinite/index";

export default [
	{
		path: "/*",
		element: <h1>Page not found</h1>
	},
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
		path: "/email",
		element: <EmailVerificationPage />
	},
	{
		path: "/resetPasswordEmailVerification",
		element: <ResetPasswordEmailVerificationPage />
	},
	{
		path: "/resetPassword",
		element: <ResetPasswordPage />
	},
	{
		path: "/paymentSuccess",
		element: <PaymentSuccess />
	},

	{
		path: "/user",
		element: <Layout />,
		children: [
			{
				path: "dashboard",
				element: <DashBoardPage />
			},
			{
				path: "writings",
				element: <MyWritingMain />
			},
			{
				path: "writings/:writingId", // new route with dynamic parameter
				element: <WritingsPopulate />
			},
			{
				path: "writings/evaluation/:writingId",
				element: <WritingPage />
			},
			{
				path: "topics",
				element: <Topics />
			},
			{
				path: "topics/content/:topicId", // new route with dynamic parameter
				element: <TopicContent />
			},
			{
				path: "analytics",
				element: <Statistics />
			},
			{
				path: "profile",
				element: <Profile />,
				children: []
			},
			{
				path: "checkout",
				element: <Payment />
			},
			{
				path: "topics/content",
				element: <TopicContent />
			},
			{
				path: "profile/edit",
				element: <EditUserProfile />
			},
			{
				path: "infinite",
				element: <Infinite />
			},
			{
				path: "topics/content",
				element: <TopicContent />
			},
			{
				path: "payment-success",
				element: <PaymentSuccess/>
			},
			{
				path: "payment-history",
				element: <PaymentHistory/>
			}
		]
	}
];
