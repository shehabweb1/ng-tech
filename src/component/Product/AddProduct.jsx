import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
	const handleAddProduct = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const image = form.get("image");
		const brand = form.get("brand").toLocaleLowerCase();
		const type = form.get("type");
		const price = form.get("price");
		const rating = form.get("rating");
		const description = form.get("description");

		const newProduct = { name, image, brand, type, price, rating, description };

		fetch("https://ng-tech-server.vercel.app/products", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newProduct),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire("Successfully!", "Product Added Successfully!", "success");
				}
			});
	};

	return (
		<div className="container mx-auto">
			<h1 className="text-3xl text-center font-semibold my-10">
				Create a new Product
			</h1>
			<div className="mb-10 sm:mx-auto sm:w-full sm:max-w-md lg:max-w-xl">
				<form
					className="grid grid-cols-1 lg:grid-cols-2 gap-4"
					onSubmit={handleAddProduct}
				>
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
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Product Name"
							/>
						</div>
					</div>
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
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Product Image url"
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
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Product Rating"
							/>
						</div>
					</div>
					<div className="lg:col-span-2">
						<label
							htmlFor="description"
							className="block text-sm font-medium leading-6 "
						>
							Short description
						</label>
						<textarea
							rows="5"
							id="description"
							name="description"
							autoComplete="description"
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
							Add Product
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
