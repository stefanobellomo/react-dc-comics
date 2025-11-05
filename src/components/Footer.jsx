import dc_logo_bg from '../assets/img/dc-logo-bg.png'
import fbIcon from "../assets/img/footer-facebook.png";
import twIcon from "../assets/img/footer-twitter.png";
import ytIcon from "../assets/img/footer-youtube.png";
import pinIcon from "../assets/img/footer-pinterest.png";
import periscopeIcon from "../assets/img/footer-periscope.png";

const info_dc_comics = [
    {
        id: 1,
        link: '#',
        text: 'Characters'
    },
    {
        id: 2,
        link: '#',
        text: 'Comics'
    },
    {
        id: 3,
        link: '#',
        text: 'Movies'
    },
    {
        id: 4,
        link: '#',
        text: 'TV'
    },
    {
        id: 5,
        link: '#',
        text: 'Games'
    },
    {
        id: 6,
        link: '#',
        text: 'Videos'
    },
    {
        id: 7,
        link: '#',
        text: 'News'
    }
]

const info_dc = [
    {
        id: 1,
        link: '#',
        text: 'Terms Of Use'
    },
    {
        id: 2,
        link: '#',
        text: 'Privacy policy'
    },
    {
        id: 3,
        link: '#',
        text: 'Ad Choices'
    },
    {
        id: 4,
        link: '#',
        text: 'Adversting'
    },
    {
        id: 5,
        link: '#',
        text: 'Jobs'
    },
    {
        id: 6,
        link: '#',
        text: 'Subscription'
    },
    {
        id: 7,
        link: '#',
        text: 'Talent Workshop'
    },
    {
        id: 8,
        link: '#',
        text: 'CPSC Certificates'
    },
    {
        id: 9,
        link: '#',
        text: 'Ratings'
    },
    {
        id: 10,
        link: '#',
        text: 'Shop Help'
    },
    {
        id: 11,
        link: '#',
        text: 'Contact Us'
    }
]

const info_sites = [
    {
        id: 1,
        link: '#',
        text: 'DC'
    },
    {
        id: 2,
        link: '#',
        text: 'MAD Magazine'
    },
    {
        id: 3,
        link: '#',
        text: 'DC Kids'
    },
    {
        id: 4,
        link: '#',
        text: 'DC Universe'
    },
    {
        id: 5,
        link: '#',
        text: 'DC Power Visa'
    }
]


export default function Footer() {
    return (<footer>
        <div className="dc-footer-top">
            <div className="container-page d-flex">
                <div className="row">
                    <div className="col col-4">
                        <h5>DC COMICS</h5>
                        <ul>
                            {
                                info_dc_comics.map(item => (
                                    <li key={item.id}><a className="dc-foot-link" href={item.link}>{item.text}</a></li>
                                ))
                            }
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
                            {
                                info_dc.map(item => (
                                    <li key={item.id}><a className="dc-foot-link" href={item.link}>{item.text}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col col-4">
                        <h5>SITES</h5>
                        <ul>
                            {
                                info_sites.map(item => (
                                    <li key={item.id}><a className="dc-foot-link" href={item.link}>{item.text}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
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