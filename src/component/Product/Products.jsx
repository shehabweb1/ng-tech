import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
	const { brand } = useParams();
	const data = useLoaderData();

	const products = data.filter((product) => brand === product.brand);

	//https://www.startech.com.bd/image/cache/catalog/home/IMG-20231022-WA0004-982x500.jpg
	// https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-girl-receiving-parcel-home-banner-982x500.webp
	// https://www.startech.com.bd/image/cache/catalog/home/banner/bkash-durga-puja-home-banner-982x500.webp

	return (
		<div>
			<div className="py-10">
				{products.map((product) => (
					<ProductCard key={product.product_id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Products;
