import { createBrowserRouter } from "react-router-dom";
import Root from "./../Root/Root";
import ErrorPage from "../ErrorPage";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Login/Register";
import About from "../component/About";
import Contact from "../component/Contact";
import AddProduct from "../component/Product/AddProduct";
import PrivateRoute from "./../PrivateRoute/PrivateRoute";
import Cart from "../component/Product/Cart";
import Products from "../component/Product/Products";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("./band.json"),
			},
			{
				path: "/:brand",
				element: <Products />,
				loader: () => fetch("./products.json"),
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
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
				path: "/addProduct",
				element: (
					<PrivateRoute>
						<AddProduct />
					</PrivateRoute>
				),
			},
			{
				path: "/cart",
				element: (
					<PrivateRoute>
						<Cart />
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;
