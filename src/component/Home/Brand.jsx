import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
	const { brand_name, brand_image } = brand;
	return (
		<>
			<Link to={`/brand/${brand_name}`} className="shadow-xl rounded-2xl">
				<img src={brand_image} alt={brand_name} className="rounded-t-2xl" />
				<h3 className="text-3xl font-semibold text-center py-3 uppercase">
					{brand_name}
				</h3>
			</Link>
		</>
	);
};

export default Brand;
