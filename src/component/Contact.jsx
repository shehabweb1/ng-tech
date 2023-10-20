import React from "react";
import GoogleMapReact from "google-map-react";
import { HiOfficeBuilding, HiPhone } from "react-icons/hi";
import { MdLocalPostOffice } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
	const defaultProps = {
		center: {
			lat: 23.7662,
			lng: 90.3589,
		},
		zoom: 14,
	};
	return (
		<div>
			<div
				className="hero min-h-fit"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1593642634315-48f5414c3ad9)",
				}}
			>
				<div className="bg-[#000000b3] w-full h-full"></div>
				<div className="hero-content text-center py-32 text-white">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">CONTACT US</h1>
						<p className="py-6">
							Next Generation Technology Computer and Network Security. Best
							Software and IT Solution Company in Bangladesh
						</p>
					</div>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="py-5">
					<h2 className="text-3xl font-semibold text-center">Our Location</h2>
					<div
						className="mx-auto py-5"
						style={{ height: "50vh", width: "60%" }}
					>
						<GoogleMapReact
							bootstrapURLKeys={{ key: "" }}
							defaultCenter={defaultProps.center}
							defaultZoom={defaultProps.zoom}
						>
							<div lat={23.7662} lng={90.3589} text="My Marker" />
						</GoogleMapReact>
					</div>
				</div>
				<div className=" mb-10 grid grid-cols-1 lg:grid-cols-2 mx-auto gap-5">
					<div className="bg-base-300 py-5 rounded-2xl">
						<h3 className="text-2xl text-center font-semibold mb-3">
							Our Contact Details
						</h3>
						<div className="ml-6">
							<p className="flex items-center justify-center text-xl mt-10">
								<HiOfficeBuilding className="text-2xl mr-1" /> Mohammadpur,
								Dhaka-1207
							</p>
							<p className="flex items-center justify-center text-xl my-5">
								<MdLocalPostOffice className="text-2xl mr-1" />{" "}
								contact@ngtech.com
							</p>
							<p className="flex items-center justify-center text-xl">
								<HiPhone className="text-2xl mr-1" /> +8801608451204
							</p>
						</div>
					</div>
					<div className="py-5">
						<h3 className="text-2xl text-center font-semibold mb-3">
							Our Contact Form
						</h3>
						<form className="w-3/4 mx-auto">
							<fieldset className="form-control">
								<label className="label">
									<span className="label-text">Enter your Full Name</span>
								</label>
								<input
									type="text"
									placeholder="Enter your Full Name"
									className="input input-bordered w-full pr-16"
									required
								/>
							</fieldset>
							<fieldset className="form-control">
								<label className="label">
									<span className="label-text">Enter your email address</span>
								</label>
								<input
									type="email"
									placeholder="Enter your email address"
									className="input input-bordered w-full pr-16"
									required
								/>
							</fieldset>
							<fieldset className="form-control">
								<label className="label">
									<span className="label-text">Write a Message</span>
								</label>
								<textarea
									className="textarea textarea-bordered"
									placeholder="Write a Message"
								></textarea>
							</fieldset>
							<button type="submit" className="btn btn-primary mt-3">
								<BsFillSendFill /> Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
