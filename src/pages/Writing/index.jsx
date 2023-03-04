import { Route, Routes } from "react-router-dom";
import MyWriting from "./myWritingFirst";
import WritingPage from "./myWritingSecond";

function Writing () {
	return (
		<Routes>
			<Route path="/first" element={<MyWriting />} />
			<Route path="/second" element={<WritingPage />} />
		</Routes>
	);
}

export default Writing;
