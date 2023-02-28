import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "./routers/router";

function App () {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<Router />
			</div>
		</QueryClientProvider>
	);
}

export default App;
