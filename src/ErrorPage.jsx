import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div>
			<h1 className="text-4xl text-center font-semibold">404 Not Found</h1>
			<p className="text-center my-5">This page is not found</p>
			<Link to="/">
				<button className="btn btn-primary mx-auto block">Go Back</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
