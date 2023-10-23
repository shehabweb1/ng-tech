import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Carousel from "nuka-carousel";

const Products = () => {
	const { brand } = useParams();
	const data = useLoaderData();

	const products = data.filter((product) => product.brand === brand);

	return (
		<div>
			<Carousel autoplay={true}>
				<img
					className="w-full"
					src="https://www.startech.com.bd/image/cache/catalog/home/IMG-20231022-WA0004-982x500.jpg"
				/>
				<img
					className="w-full"
					src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-girl-receiving-parcel-home-banner-982x500.webp"
				/>
				<img
					className="w-full"
					src="https://www.startech.com.bd/image/cache/catalog/home/banner/bkash-durga-puja-home-banner-982x500.webp"
				/>
			</Carousel>
			<div className="container mx-auto">
				{products.length > 0 ? (
					<div className="py-10 grid grid-cols-1 lg:grid-cols-4 gap-5">
						{products.map((product) => (
							<ProductCard key={product.product_id} product={product} />
						))}
					</div>
				) : (
					<div className="py-10">
						<h2 className="text-2xl font-semibold text-center">
							Sorry! There are no products in this brand
						</h2>
						<Link to="/">
							<button className="btn btn-primary block my-5 mx-auto">
								Go Home
							</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Products;
