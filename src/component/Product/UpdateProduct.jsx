import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateProduct = () => {
	const { id } = useParams();
	const idNum = parseInt(id);
	const products = useLoaderData();
	const product = products.filter((product) => product.product_id === idNum);

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

	const handleUpdateProduct = (e) => {
		e.preventDefault();
		// const form = new FormData(e.currentTarget);
		// const email = form.get("email");
		// const password = form.get("password");
		console.log(product_id);
	};

	return (
		<div className="container mx-auto">
			<h1 className="text-3xl text-center font-semibold my-10">
				Create a new Product
			</h1>
			<div className="mb-10 sm:mx-auto sm:w-full sm:max-w-md lg:max-w-xl">
				<form
					className="grid grid-cols-1 lg:grid-cols-2 gap-4"
					onSubmit={handleUpdateProduct}
				>
					<div className="lg:col-span-2">
						<label
							htmlFor="image"
							className="block text-sm font-medium leading-6 "
						>
							Product Image
						</label>
						<div className="mt-2">
							<input
								id="image"
								name="image"
								type="text"
								autoComplete="image"
								defaultValue={image}
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Product Image url"
							/>
						</div>
					</div>
					<div className="lg:col-span-2">
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 "
						>
							Product Name
						</label>
						<div className="mt-2">
							<input
								id="name"
								name="name"
								type="text"
								autoComplete="name"
								defaultValue={name}
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Product Name"
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="brand"
							className="block text-sm font-medium leading-6 "
						>
							Brand Name
						</label>
						<div className="mt-2">
							<input
								id="brand"
								name="brand"
								type="text"
								autoComplete="brand"
								defaultValue={brand}
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Brand Name"
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="type"
							className="block text-sm font-medium leading-6 "
						>
							Product Type
						</label>
						<div className="mt-2">
							<input
								id="type"
								name="type"
								type="text"
								autoComplete="type"
								defaultValue={type}
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Product Type"
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="price"
							className="block text-sm font-medium leading-6 "
						>
							Product Price
						</label>
						<div className="mt-2">
							<input
								id="price"
								name="price"
								type="text"
								autoComplete="price"
								defaultValue={price}
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Product Price"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="rating"
							className="block text-sm font-medium leading-6 "
						>
							Product Rating
						</label>
						<div className="mt-2">
							<input
								id="rating"
								name="rating"
								type="text"
								autoComplete="rating"
								defaultValue={rating}
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Product Rating"
							/>
						</div>
					</div>
					<div className="lg:col-span-2">
						<label
							htmlFor="short_description"
							className="block text-sm font-medium leading-6 "
						>
							Short description
						</label>
						<textarea
							rows="5"
							id="short_description"
							name="short_description"
							autoComplete="short_description"
							defaultValue={short_description}
							required
							className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Write a Product Short description"
						></textarea>
					</div>

					<div className="lg:col-span-2 mx-auto">
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
						>
							Update Product
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateProduct;
