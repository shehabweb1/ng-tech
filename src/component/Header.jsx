import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { AuthProviderContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
	const { user, logOut } = useContext(AuthProviderContext);
	const navigate = useNavigate();

	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
	);

	const handleToggle = (e) => {
		if (e.target.checked) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	useEffect(() => {
		localStorage.setItem("theme", theme);
		const localTheme = localStorage.getItem("theme");
		document.querySelector("html").setAttribute("data-theme", localTheme);
	}, [theme]);

	const handleLogOut = () => {
		logOut()
			.then(() => {
				navigate("/");
				Swal.fire(
					"Welcome!",
					"Your account has been Sign Out successful!",
					"success"
				);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const menuItems = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/addProduct">Add Product</NavLink>
			</li>
			{user && (
				<li>
					<NavLink to="/cart">My Cart</NavLink>
				</li>
			)}
			<li>
				<NavLink to="/about">About</NavLink>
			</li>
			<li>
				<NavLink to="/contact">Contact</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menuItems}
					</ul>
				</div>
				<Link to="/" className="btn btn-ghost normal-case text-2xl">
					NG Tech
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{menuItems}</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<>
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img src={user?.photoURL} />
								</div>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<h4 className="text-xl">{user?.displayName}</h4>
								</li>
								<li>
									<button onClick={handleLogOut}>Logout</button>
								</li>
							</ul>
						</div>
					</>
				) : (
					<NavLink to="/login" className="btn">
						Login
					</NavLink>
				)}
				<button className="btn btn-ghost">
					<label className="swap swap-rotate">
						<input
							type="checkbox"
							onChange={handleToggle}
							checked={theme === "light" ? false : true}
						/>
						<div className="swap-on">
							<BsFillSunFill className="w-6 h-6" />
						</div>
						<div className="swap-off">
							<BsFillMoonFill className="w-6 h-6" />
						</div>
					</label>
				</button>
			</div>
		</div>
	);
};

export default Header;
