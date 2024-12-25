import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = ({ showLogin, setShowLogin }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            {showLogin && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>

                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="main-title" id="exampleModalLabel">Login</h5>
                                    <Link to="/" type="button" className="btn-close" onClick={() => setShowLogin(false)} aria-label="Close"></Link>
                                </div>
                                <div className="modal-body p-5">
                                    <input type="email" placeholder="Enter email" className="form-control input-box-hover-effect" {...register("email", { required: true })} />
                                    {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                                    <input type="password" placeholder="Enter password" className="form-control input-box-hover-effect mt-4" {...register("password", { required: true })} />
                                    {errors.password && <span style={{ color: 'red' }}>Password is required</span>}

                                </div>
                                <div className="mb-4 mx-4 d-flex justify-content-between">
                                    <input type="submit" className="btn login-btn me-2" value="Login" />
                                    <div>
                                        <p>Not registered yet? <span><a href="/signup">Signup</a></span></p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
