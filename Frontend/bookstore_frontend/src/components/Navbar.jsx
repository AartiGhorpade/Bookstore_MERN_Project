import '../assets/css/navbar.css'
import moonImg from '../assets/images/moon.svg'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-lg-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">BookStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Course</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li> <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <div className="input-group">
                                    <input type="text" className="form-control input-search-box" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    {/* <span className="input-group-text bg-white" id="basic-addon2"><span className="material-symbols-outlined">
                                        search
                                    </span></span> */}
                                </div></li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-dark text-white py-1" href="#">Login</a>
                            </li>
                            <li className="nav-item mt-1">
                                <img src={moonImg} alt="Moon" />
                            </li>
                        </ul>

                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar