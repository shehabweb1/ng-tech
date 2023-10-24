import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	const { _id, name, image, brand, price, rating, type } = product;

	return (
		<div className="rounded-xl shadow-xl">
			<img src={image} alt={name} className="rounded-t-xl" />
			<div className="py-3 px-2">
				<h3 className="text-xl font-semibold">{name}</h3>
				<div className="flex justify-between items-center my-3">
					<p>
						Brand: <span className="capitalize">{brand}</span>
					</p>
					<p>Type: {type}</p>
				</div>
				<div className="flex justify-between items-center mb-3">
					<p className="flex gap-1">
						<BsFillStarFill className="text-lg text-yellow-500" /> {rating}
					</p>
					<p>Price: {price} TK</p>
				</div>
				<div className="flex justify-between items-center">
					<Link to={`/product/update/${_id}`}>
						<button className="btn btn-info">Update</button>
					</Link>
					<Link to={`/product/${_id}`}>
						<button className="btn btn-primary">Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
