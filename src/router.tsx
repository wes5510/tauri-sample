import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import One from "./pages/One";
import Two from "./pages/Two";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "one",
				element: <One />,
			},
			{
				path: "two",
				element: <Two />,
			},
		],
	},
]);
