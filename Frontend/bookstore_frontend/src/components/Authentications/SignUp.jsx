import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast'

const SignUp = () => {
    const [showLogin, setShowLogin] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        await axios.post('http://localhost:4001/user/signup', userInfo).then((result) => {
            if (result.status === 201) {
                toast.success("User created successfully")
                toggleLoginModal()
            }

        }).catch((e) => {
            if (e.response) {
                toast.error(e.response.data.message)
            }
        })
    };
    function toggleLoginModal() {
        setShowLogin(!showLogin);
    }
    return (

        <div className="row">
            <div className="col-lg-5 m-auto col-12 booksCard p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex justify-content-between">
                        <h5 className="main-title">Signup</h5>
                        <Link to="/" type="button" className="btn-close" onClick={() => setShowLogin(false)} aria-label="Close"></Link>
                    </div>
                    <div className="p-lg-5 py-4">
                        <input type="text" placeholder="Enter name" className="form-control input-box-hover-effect" {...register("name", { required: true })} />
                        {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                        <input type="email" placeholder="Enter email" className="form-control input-box-hover-effect mt-4"  {...register("email", { required: true })} />
                        {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                        <input type="password" placeholder="Enter password" className="form-control input-box-hover-effect mt-4" {...register("password", { required: true })} />
                        {errors.password && <span style={{ color: 'red' }}>Password is required</span>}
                    </div>
                    <div className="mx-lg-4 d-flex justify-content-between">
                        <input type="submit" className="btn login-btn" value="Signup" />
                        <div className="ms-5 ms-lg-0">
                            <p>Alerady have account? <span> <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleLoginModal}>Login</span></span></p>
                        </div>
                    </div>
                </form>
            </div>
            <Login showLogin={showLogin} setShowLogin={setShowLogin} />

        </div>

    )
}

export default SignUp