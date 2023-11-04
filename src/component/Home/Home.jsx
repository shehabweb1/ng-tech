import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Blog from "./Blog";
import Brand from "./Brand";
import Feature from "./Feature";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { AuthProviderContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
	const { loading } = useContext(AuthProviderContext);
	const [brands, setBrands] = useState([]);

	
	useLayoutEffect(() => {
		axios({
			method: "GET",
			url: "https://ng-tech-server.vercel.app/brands",
		}).then(function (response) {
			setBrands(response.data);
		});
	}, []);

	return (
		<div>
			<Banner />
			<div className="container mx-auto py-10">
				<h2 className="text-4xl font-bold text-center uppercase mb-5">
					Our Brands
				</h2>
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
					{loading ? (
						<span className="loading loading-spinner loading-lg"></span>
					) : (
						brands.map((brand) => <Brand key={brand._id} brand={brand} />)
					)}
				</div>
			</div>
			<Feature />
			<Blog />
		</div>
	);
};

export default Home;
