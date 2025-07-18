import { useState } from 'react';
import '../assets/css/navbar.css';
import Login from './Authentications/Login';
import { useAuth } from './Context/AuthProvider';
import Logout from './Authentications/Logout';

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [authUser, setAuthUser] = useAuth()

    function toggleLoginModal() {
        setShowLogin(!showLogin);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">BookStore</a>
                    <div className='d-flex'>
                        <p className="nav-item d-lg-none my-auto">
                            {authUser ? <Logout /> : <a className="nav-link btn btn-outline-primary text-black py-1 login-btn" onClick={toggleLoginModal}>Login</a>}
                        </p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/allBooks">All Books</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contactus">Contact</a>
                            </li>
                            <li className="nav-item d-none d-lg-block">
                                {authUser ? <Logout /> : <a className="nav-link btn btn-outline-primary text-black py-1 login-btn" onClick={toggleLoginModal}>Login</a>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

            <Login showLogin={showLogin} setShowLogin={setShowLogin} />
        </div >
    );
}

export default Navbar;
