import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { setupStore } from "./Store/store";
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

export const store = setupStore();


root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
