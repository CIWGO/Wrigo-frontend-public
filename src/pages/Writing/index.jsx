import { Route, Routes } from "react-router-dom";
import MyWriting from "./myWritingFirst";
import WritingPage from "./myWritingSecond";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";

const Writing = () => {
	return (
		<Layout>
			<SearchBar style={{ marginTop: "40px" }} />
			<div style={{ paddingTop: "60px" }}>
				<Routes>
					<Route path="/" element={<MyWriting />} />
					<Route path="/second" element={<WritingPage />} />
				</Routes>
			</div>
		</Layout>
	);
};

export default Writing;
