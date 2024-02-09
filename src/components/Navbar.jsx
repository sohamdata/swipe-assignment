import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	const isOnProduct = location.pathname.includes("products");

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid justify-content-center">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className={`nav-link ms-3 fs-5 ${!isOnProduct && "active"}`} to="/">
								Invoice
							</Link>
						</li>
						<li className="nav-item">
							<Link className={`nav-link ms-3 fs-5 ${isOnProduct && "active"}`} to="/products">
								Product
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
