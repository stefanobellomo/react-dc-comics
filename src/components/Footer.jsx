import dc_logo_bg from '../assets/img/dc-logo-bg.png'
import fbIcon from "../assets/img/footer-facebook.png";
import twIcon from "../assets/img/footer-twitter.png";
import ytIcon from "../assets/img/footer-youtube.png";
import pinIcon from "../assets/img/footer-pinterest.png";
import periscopeIcon from "../assets/img/footer-periscope.png";
import Info from './Info';

export default function Footer({ sections }) {
    return (
        <footer>
            <div className="dc-footer-top">
                <div className="container-page d-flex">

                    <Info sections={sections} />

                    <img src={dc_logo_bg} className="logo_ft" alt="logo" />
                </div>
            </div>

            <section className="dc-bottom py-4">
                <div className="container-page">
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