import { Route, Routes } from "react-router-dom";
import WritingMain from "./myWritingMain";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import WritingPage from "../WritingEvaluatingPage";

const Writing = () => {
	return (
		<Layout>
			<SearchBar style={{ marginTop: "40px" }} />
			<div style={{ paddingTop: "60px" }}>
				<Routes>
					<Route path="/" element={<WritingMain />} />
					<Route path="/evaluation" element={<WritingPage />} />
				</Routes>
			</div>
		</Layout>
	);
};

export default Writing;
