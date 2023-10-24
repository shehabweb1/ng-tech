import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
	const loadedCartId = useLoaderData();
	const [cartProduct, setCartProduct] = useState(loadedCartId);

	const handleDeleteCart = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://ng-tech-server.vercel.app/cart/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
						}

						const remainingCart = cartProduct.filter((cart) => cart._id !== id);

						setCartProduct(remainingCart);
					});
			}
		});
	};

	return (
		<div className="container mx-auto py-10">
			<h2 className="text-4xl font-bold text-center uppercase mb-5">My Cart</h2>
			{cartProduct.map((pro) => (
				<div
					key={pro._id}
					className="grid md:grid-cols-5 gap-4 items-center shadow-lg p-3 my-5"
				>
					<img src={pro.image} alt={pro.name} className="w-full" />
					<div className="col-span-3">
						<h3 className="text-lg lg:text-xl font-semibold">{pro.name}</h3>
						<div className="flex justify-between items-center my-3">
							<p>
								Brand: <span className="capitalize">{pro.brand}</span>
							</p>
							<p>Type: {pro.type}</p>
						</div>
						<div className="flex justify-between items-center mb-3">
							<p className="flex gap-1 ">
								<BsFillStarFill className="text-xl text-yellow-500" />{" "}
								{pro.rating}
							</p>
							<p>Price: {pro.price} TK</p>
						</div>
					</div>
					<div className="flex justify-end">
						<button
							className="btn btn-error"
							onClick={() => handleDeleteCart(pro._id)}
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cart;
