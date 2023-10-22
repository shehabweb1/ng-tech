import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProviderContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthProviderContext);
	const location = useLocation();

	if (user) {
		return children;
	}

	return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
