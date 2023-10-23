import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
	const { id } = useParams();
	const idNum = parseInt(id);
	const Products = useLoaderData();
	const product = Products.filter((product) => product.product_id === idNum);

	const {
		product_id,
		name,
		image,
		brand,
		price,
		rating,
		type,
		short_description,
	} = product[0];

	const handleAddCart = (id) => {
		Swal.fire(
			"Successfully!",
			"This product has been added to the cart!",
			"success"
		);
	};

	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
				<img src={image} alt={name} className="w-full" />
				<div className="flex flex-col">
					<h3 className="text-3xl font-semibold">{name}</h3>
					<div className="flex justify-between items-center my-3">
						<p className="text-lg">
							Brand: <span className="capitalize">{brand}</span>
						</p>
						<p className="text-lg">Type: {type}</p>
					</div>
					<div className="flex justify-between items-center mb-3">
						<p className="flex gap-1 text-lg">
							<BsFillStarFill className="text-xl text-yellow-500" /> {rating}
						</p>
						<p className="text-lg">Price: {price} TK</p>
					</div>
					<p className="my-5 text-lg">{short_description}</p>
					<div className="flex justify-end">
						<button
							className="btn btn-success"
							onClick={() => handleAddCart(product_id)}
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
