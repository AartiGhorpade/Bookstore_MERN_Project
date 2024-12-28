import toast from "react-hot-toast"
import { useAuth } from "../Context/AuthProvider"
import { useNavigate } from "react-router-dom"

const Logout = () => {
    const [authUser, setAuthUser] = useAuth()
    const navigate = useNavigate()
    const logoutFun = () => {
        try {
            setAuthUser(null);
            localStorage.removeItem('loginDetails');
            toast.success('Logout Successfully');
            navigate('/'); // Redirect to home page or any other page
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <button className="btn btn-danger" onClick={logoutFun}>Logout</button>
    )
}

export default Logout