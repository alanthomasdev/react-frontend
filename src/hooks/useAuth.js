import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logout, setCredentials } from "../redux/slices/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { token, role } = useSelector((state) => state.auth);

  const loginUser = async (email, password) => {
    const res = await axios.post("http://localhost:3000/login", { email, password });
    dispatch(setCredentials({ token: res.data.data.token, role: res.data.data.role }));
  };

  return {
    token,
    role,
    isAdmin: role === "admin",
    isStaff: role === "staff",
    loginUser,
    logout: () => dispatch(logout()),
  };
};
