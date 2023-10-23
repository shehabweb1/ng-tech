import React from "react";

const Feature = () => {
	return (
		<div className="container mx-auto py-10">
			<h2 className="text-4xl font-bold text-center uppercase mb-5">
				Our Features
			</h2>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
				<div className="shadow-lg rounded-lg">
					<img
						src="https://www.startech.com.bd/image/cache/catalog/desktop-pc/dell/vostro/vostro-0001-228x228.jpg"
						alt="Brand PC"
						className="rounded-t-lg mx-auto"
					/>
					<h3 className="text-lg font-semibold text-center py-2">Brand PC</h3>
				</div>
				<div className="shadow-lg rounded-lg">
					<img
						src="https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/probook-455-g9/probook-455-g9-01-228x228.jpg"
						alt="laptop"
						className="rounded-t-lg mx-auto"
					/>
					<h3 className="text-lg font-semibold text-center py-2">Laptop</h3>
				</div>
				<div className="shadow-lg rounded-lg">
					<img
						src="https://www.startech.com.bd/image/cache/catalog/processor/intel/core-i9-14900k/core-i9-14900k-01-228x228.webp"
						alt="Processor"
						className="rounded-t-lg mx-auto"
					/>
					<h3 className="text-lg font-semibold text-center py-2">Processor</h3>
				</div>
				<div className="shadow-lg rounded-lg">
					<img
						src="https://www.startech.com.bd/image/cache/catalog/motherboard/msi/h510m-pro-e/h510m-pro-e-01-228x228.jpg"
						alt="Motherboard"
						className="rounded-t-lg mx-auto"
					/>
					<h3 className="text-lg font-semibold text-center py-2">
						Motherboard
					</h3>
				</div>
				<div className="shadow-lg rounded-lg">
					<img
						src="https://www.startech.com.bd/image/cache/catalog/graphics-card/nvidia/quadro-p1000/quadro-p1000-02-228x228.webp"
						alt="Graphics Card"
						className="rounded-t-lg mx-auto"
					/>
					<h3 className="text-lg font-semibold text-center py-2">
						Graphics Card
					</h3>
				</div>
				<div className="shadow-lg rounded-lg">
					<img
						src="https://www.startech.com.bd/image/cache/catalog/ram/kingston/fury-renegade/fury-renegade-01-228x228.webp"
						alt="RAM"
						className="rounded-t-lg mx-auto"
					/>
					<h3 className="text-lg font-semibold text-center py-2">RAM</h3>
				</div>
				<div className="shadow-lg rounded-lg">
					<img
						src="https://www.startech.com.bd/image/cache/catalog/ssd/samsung/980-500gb/980-500gb-228x228.jpg"
						alt="SSD"
						className="rounded-t-lg mx-auto"
					/>
					<h3 className="text-lg font-semibold text-center py-2">SSD</h3>
				</div>
				<div className="shadow-lg rounded-lg">
					<img
						src="https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/32ml600m/32ml600m-01-228x228.jpg"
						alt="monitor"
						className="rounded-t-lg mx-auto"
					/>
					<h3 className="text-lg font-semibold text-center py-2">Monitor</h3>
				</div>				
			</div>
		</div>
	);
};

export default Feature;
