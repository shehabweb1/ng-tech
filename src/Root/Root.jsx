import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { AuthProviderContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const Root = () => {
	const { loading } = useContext(AuthProviderContext);

	if (loading) {
		return <span className="loading loading-spinner loading-lg"></span>;
	}
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
