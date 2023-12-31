import React from "react";

const Banner = () => {
	return (
		<div
			className="hero min-h-fit"
			style={{
				backgroundImage: "url(https://i.ibb.co/LhwtzCS/banner.jpg)",
			}}
		>
			<div className="bg-[#000000b3] w-full h-full"></div>
			<div className="hero-content text-center py-36 text-white">
				<div className="max-w-lg">
					<h1 className="text-5xl font-bold">NEXT GENERATION TECHNOLOGY</h1>
					<p className="py-6">
						Next Generation Technology Computer and Network Security. Best
						Software and IT Solution Company in Bangladesh
					</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
