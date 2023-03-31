import { Navigate } from "react-router-dom";
import RecentWritings from "../pages/Dashboard/recentWritings";
import Statistics from "../pages/Statistics";
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
import ResetPasswordPage from "../pages/ResetPassword";
import WritingsPopulate from "../pages/WritingsPopulate";
// import PopularTopicsCard from "../pages/Dashboard/popularTopics";
// import DashBoardPage from "../pages/Dashboard/dashboard";
import SubIntroCard from "../pages/WrigoInfinite/index";
import Payment from "../pages/Payment/index";
import MyWritingMain from "../pages/WritingMain/myWritingMain";
import PaymentSuccess from "../pages/Payment/paymentSuccess";

// tmp testing
import SubscribedUserRight from "../pages/WritingEvaluatingPage/subscribedUserRight/index";

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
				element: <RecentWritings />
			},
			{
				path: "writings",
				element: <MyWritingMain />
			},
			{
				path: "writings/:writingId", // new route with dynamic parameter
				element: <WritingsPopulate/>
			},
			{
				path: "writings/evaluation",
				element: <WritingPage />
			},
			{ // should be deleted soon
				path: "writings/evaluationRight",
				element: <SubscribedUserRight />
			},
			{
				path: "topics",
				element: <Topics />
			},
			{
				path: "topics/content",
				element: <TopicContent />
			},
			{
				path: "analytics",
				element: <Statistics />
			},
			{
				path: "profile",
				element: <EditUserProfile />,
				children: [

				]
			},
			{
				path: "checkout",
				element: <Payment />
			},
			{
				path: "paymentSuccess",
				element: <PaymentSuccess />
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
				path: "profile/wrigoinfinite",
				element: <SubIntroCard />
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
