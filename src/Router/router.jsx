import { createBrowserRouter } from "react-router-dom";
import Root from "./../Root/Root";
import ErrorPage from "../ErrorPage";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Login/Register";
import About from "../component/About";
import Contact from "../component/Contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

export default router;
