import dc_logo_bg from '../assets/img/dc-logo-bg.png'
import fbIcon from "../assets/img/footer-facebook.png";
import twIcon from "../assets/img/footer-twitter.png";
import ytIcon from "../assets/img/footer-youtube.png";
import pinIcon from "../assets/img/footer-pinterest.png";
import periscopeIcon from "../assets/img/footer-periscope.png";

export default function Footer() {
    return (<footer>
        <div className="dc-footer-top">
            <div className="container d-flex">
                <div className="row">
                    <div className="col col-4">
                        <h5>DC COMICS</h5>
                        <ul>
                            <li><a className="dc-foot-link" href="#">Characters</a></li>
                            <li><a className="dc-foot-link" href="#">Comics</a></li>
                            <li><a className="dc-foot-link" href="#">Movies</a></li>
                            <li><a className="dc-foot-link" href="#">TV</a></li>
                            <li><a className="dc-foot-link" href="#">Games</a></li>
                            <li><a className="dc-foot-link" href="#">Videos</a></li>
                            <li><a className="dc-foot-link" href="#">News</a></li>
                        </ul>

                        <h5>SHOP</h5>
                        <ul>
                            <li><a className="dc-foot-link" href="#">Shop DC</a></li>
                            <li><a className="dc-foot-link" href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>
                    <div className="col col-4">
                        <h5>DC</h5>
                        <ul>
                            <li><a className="dc-foot-link" href="#">Terms Of Use</a></li>
                            <li><a className="dc-foot-link" href="#">Privacy policy</a></li>
                            <li><a className="dc-foot-link" href="#">Ad Choices</a></li>
                            <li><a className="dc-foot-link" href="#">Adversting</a></li>
                            <li><a className="dc-foot-link" href="#">Jobs</a></li>
                            <li><a className="dc-foot-link" href="#">Subscription</a></li>
                            <li><a className="dc-foot-link" href="#">Talent Workshop</a></li>
                            <li><a className="dc-foot-link" href="#">CPSC Certificates</a></li>
                            <li><a className="dc-foot-link" href="#">Ratings</a></li>
                            <li><a className="dc-foot-link" href="#">Shop Help</a></li>
                            <li><a className="dc-foot-link" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col col-4">
                        <h5>DC COMICS</h5>
                        <ul>
                            <li><a className="dc-foot-link" href="#">DC</a></li>
                            <li><a className="dc-foot-link" href="#">MAD Magazine</a></li>
                            <li><a className="dc-foot-link" href="#">DC Kids</a></li>
                            <li><a className="dc-foot-link" href="#">DC Universe</a></li>
                            <li><a className="dc-foot-link" href="#">DC Power Visa</a></li>
                        </ul>
                    </div>
                </div>
                <img src={dc_logo_bg} className="logo_ft" alt="logo" />
            </div>
        </div>


        <section className="dc-bottom py-4">
            <div className="container">
                <div className="row g-3 d-flex align-items-center justify-content-between">

                    <div className="col-auto">
                        <button className='singUp'>SIGN-UP NOW!</button>
                    </div>

                    <div className="col-auto d-flex align-items-center gap-3">
                        <span className="upper">FOLLOW US</span>
                        <a href="#">
                            <img src={fbIcon} className="soc-icon" alt="Facebook" />
                        </a>
                        <a href="#">
                            <img src={twIcon} className="soc-icon" alt="Twitter" />
                        </a>
                        <a href="#">
                            <img src={ytIcon} className="soc-icon" alt="YouTube" />
                        </a>
                        <a href="#">
                            <img src={pinIcon} className="soc-icon" alt="Pinterest" />
                        </a>
                        <a href="#">
                            <img src={periscopeIcon} className="soc-icon" alt="Periscope" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </footer>)
}