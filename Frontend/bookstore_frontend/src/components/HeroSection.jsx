import heroSectionMainImg from '../assets/images/hero-section-main-img.jpg'
import '../assets/css/hero-section.css'
const HeroSection = () => {
    return (
        <>
            <div className="container mt-lg-0 mt-3">
                <div className="row">
                    <div className="col-lg-7 col-12 my-auto">
                        <h1 className='hero-section-title'><p style={{ color: "purple" }}>Welcome!</p> Learn something new every day with our books.</h1>
                        <p className="hero-section-subtitle">Dive into a world of knowledge with our diverse range of books. Whether you are looking to relax or learn something new, we have got something for everyone.</p>
                    </div>
                    <div className="col-lg-5 col-12 mt-lg-2 mt-2"><img src={heroSectionMainImg} alt="heroSectionMainImg" className='img-fluid' /></div>
                </div>
            </div>
        </>
    )
}

export default HeroSection