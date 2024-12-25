import facebookLogo from '../assets/images/facebook_logo.png'
import instagramLogo from '../assets/images/instagram_logo.png'
import twitterLogo from '../assets/images/twitter_logo.png'
import '../assets/css/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <p className="title">BookStore</p>
                    </div>
                    <div className="col-7 d-flex justify-content-end">
                        <div className="social-icons gap-3 d-flex">
                            <img src={facebookLogo} alt="facebookLogo" style={{ width: '30px', height: '30px' }} />
                            <img src={instagramLogo} alt="instagramLogo" style={{ width: '30px', height: '30px' }} />
                            <img src={twitterLogo} alt="twitterLogo" style={{ width: '30px', height: '30px' }} />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer