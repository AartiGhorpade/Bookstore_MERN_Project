import heroSectionMainImg from '../assets/images/hero-section-main-img.jpg'
import '../assets/css/hero-section.css'
const HeroSection = () => {
    return (
        <>
            <div className="container pt-lg-0 pt-3">
                <div className="row">
                    <div className="col-lg-7 col-12 my-auto">
                        <h1 className='hero-section-title'>Welcome! Learn something new every day with our books.</h1>
                        <p className="hero-section-subtitle">Dive into a world of knowledge with our diverse range of books. Whether you are looking to relax or learn something new, we have got something for everyone.</p>
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-white" id="basic-addon1">@</span>
                            <input type="text" className="form-control input-search-box" placeholder="Enter email to login..." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <button className='btn btn-secondary'>Login</button>
                    </div>
                    <div className="col-lg-5 col-12"><img src={heroSectionMainImg} alt="heroSectionMainImg" className='img-fluid' /></div>
                </div>
            </div>
        </>
    )
}

export default HeroSection