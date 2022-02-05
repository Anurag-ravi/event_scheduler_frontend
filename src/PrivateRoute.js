import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
    const auth = useSelector(state => state.user.islogged);
    return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;