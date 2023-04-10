import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const theme = {
	headingSize: "20px",
	defaultColor: "#2F71DA",
	headingFontWeight: "700",
	fontFamily: "Poppins",
	background: "#F5F5F5"
};
// npm run lint -- --fix

function App () {
	const element = useRoutes(routes);
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<ThemeProvider theme={theme}>
					{element}
				</ThemeProvider>
			</div>
		</QueryClientProvider>
	);
}

export default App;
