import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Blog from "./Blog";
import Brand from "./Brand";
import Feature from "./Feature";

const Home = () => {
	const brands = useLoaderData();
	return (
		<div>
			<Banner />
			<div className="container mx-auto py-10">
				<h2 className="text-4xl font-bold text-center uppercase mb-5">
					Our Brands
				</h2>
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
					{brands.map((brand) => (
						<Brand key={brand._id} brand={brand} />
					))}
				</div>
			</div>
			<Feature />
			<Blog />
		</div>
	);
};

export default Home;
