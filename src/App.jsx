import "./App.css";
import Router from "./routers/router";
import { ThemeProvider } from "styled-components";

const theme = {
	headingSize: "20px",
	defaultColor: "#2F71DA",
	headingFontWeight: "700",

	fontFamily: "Noto Sans",
	background: "#F5F5F5"
};

function App () {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Router />
			</ThemeProvider>
		</div>
	);
}

export default App;
