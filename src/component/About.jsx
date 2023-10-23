const About = () => {
	return (
		<div>
			<div
				className="hero min-h-fit"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1562408590-e32931084e23)",
				}}
			>
				<div className="bg-[#000000b3] w-full h-full"></div>
				<div className="hero-content text-center py-36 text-white">
					<div className="max-w-lg">
						<h1 className="text-5xl font-bold">ABOUT US</h1>
						<p className="py-6">
							Next Generation Technology Computer and Network Security. Best
							Software and IT Solution Company in Bangladesh
						</p>
					</div>
				</div>
			</div>
			<div className="container mx-auto py-10">
				<div className="mb-5">
					<p className="mb-3">
						At NG Tech, we are driven by a passion for providing cutting-edge
						technology solutions that empower our clients to achieve their
						goals. We are a team of experienced and dedicated professionals who
						are committed to delivering the highest quality services in the
						areas of computer and network security, software development, and IT
						consulting.
					</p>
					<p className="mb-3">
						We believe that the key to success in today's digital world is to
						stay ahead of the curve. That's why we are constantly investing in
						research and development, ensuring that we are always at the
						forefront of the latest technological advancements.
					</p>
					<p>
						Our goal is to be a trusted partner to our clients, providing them
						with the solutions they need to protect their data, improve their
						efficiency, and gain a competitive advantage.
					</p>
				</div>
				<div className="py-5">
					<h2 className="text-xl font-semibold mb-3">Our Services</h2>
					<ul className="list-disc list-inside">
						<li>Computer and network security</li>
						<li>Software development</li>
						<li>IT consulting</li>
						<li>Cloud computing</li>
						<li>Data analytics</li>
						<li>Managed services</li>
					</ul>
				</div>
				<div className="py-5">
					<h2 className="text-xl font-semibold mb-3">Our Mission</h2>
					<p>
						To provide our clients with the highest quality technology solutions
						that help them achieve their goals.
					</p>
				</div>
				<div className="py-5">
					<h2 className="text-xl font-semibold mb-3">Our Vision</h2>
					<p>
						To be the leading provider of technology solutions in Bangladesh.
					</p>
				</div>
				<div className="py-5">
					<h2 className="text-xl font-semibold mb-3">Our Values</h2>
					<ul className="list-disc list-inside">
						<li>Integrity</li>
						<li>Innovation</li>
						<li>Teamwork</li>
						<li>Excellence</li>
						<li>Customer satisfaction</li>
					</ul>
				</div>
				<div className="py-5">
					<h2 className="text-xl font-semibold mb-3">Our Commitment</h2>
					<p>
						We are committed to providing our clients with the highest level of
						service and support. We are always available to answer your
						questions and help you find the solutions that best meet your needs.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
