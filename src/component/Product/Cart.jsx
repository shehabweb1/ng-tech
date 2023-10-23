import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import Swal from "sweetalert2";

const Cart = () => {
	const handleDeleteCart = () => {
		Swal.fire(
			"Successfully!",
			"This product has been added to the cart!",
			"success"
		);
	};

	return (
		<div className="container mx-auto py-10">
			<h2 className="text-4xl font-bold text-center uppercase mb-5">My Cart</h2>
			<div className="grid md:grid-cols-5 gap-4 items-center shadow-lg p-3 my-5">
				<img
					src="https://www.startech.com.bd/image/cache/catalog/processor/Intel/core-i5-14600k/core-i5-14600k-01-500x500.webp"
					alt=""
					className="w-full"
				/>
				<div className="col-span-3">
					<h3 className="text-lg lg:text-xl font-semibold">
						Intel 14th Gen Core i5 14600K Raptor Lake Processor
					</h3>
					<div className="flex justify-between items-center my-3">
						<p>
							Brand: <span className="capitalize">Intel</span>
						</p>
						<p>Type: Processor</p>
					</div>
					<div className="flex justify-between items-center mb-3">
						<p className="flex gap-1 ">
							<BsFillStarFill className="text-xl text-yellow-500" /> 4.0
						</p>
						<p>Price: 40000 TK</p>
					</div>
				</div>
				<div className="flex justify-end">
					<button className="btn btn-error" onClick={() => handleDeleteCart()}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
