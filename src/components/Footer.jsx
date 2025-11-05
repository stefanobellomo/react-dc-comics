import dc_logo_bg from '../assets/img/dc-logo-bg.png'
import fbIcon from "../assets/img/footer-facebook.png";
import twIcon from "../assets/img/footer-twitter.png";
import ytIcon from "../assets/img/footer-youtube.png";
import pinIcon from "../assets/img/footer-pinterest.png";
import periscopeIcon from "../assets/img/footer-periscope.png";

const footerSections = [
    {
        title: 'DC COMICS',
        items: [
            { id: 1, text: 'Characters', href: '#' },
            { id: 2, text: 'Comics', href: '#' },
            { id: 3, text: 'Movies', href: '#' },
            { id: 4, text: 'TV', href: '#' },
            { id: 5, text: 'Games', href: '#' },
            { id: 6, text: 'Videos', href: '#' },
            { id: 7, text: 'News', href: '#' },
        ],
    },
    {
        title: 'DC',
        items: [
            { id: 1, text: 'Terms Of Use', href: '#' },
            { id: 2, text: 'Privacy policy', href: '#' },
            { id: 3, text: 'Ad Choices', href: '#' },
            { id: 4, text: 'Advertising', href: '#' },
            { id: 5, text: 'Jobs', href: '#' },
            { id: 6, text: 'Subscription', href: '#' },
            { id: 7, text: 'Talent Workshop', href: '#' },
            { id: 8, text: 'CPSC Certificates', href: '#' },
            { id: 9, text: 'Ratings', href: '#' },
            { id: 10, text: 'Shop Help', href: '#' },
            { id: 11, text: 'Contact Us', href: '#' },
        ],
    },
    {
        title: 'SITES',
        items: [
            { id: 1, text: 'DC', href: '#' },
            { id: 2, text: 'MAD Magazine', href: '#' },
            { id: 3, text: 'DC Kids', href: '#' },
            { id: 4, text: 'DC Universe', href: '#' },
            { id: 5, text: 'DC Power Visa', href: '#' },
        ],
    },
    {
        title: 'SHOP',
        items: [
            { id: 1, text: 'Shop DC', href: '#' },
            { id: 2, text: 'Shop DC Collectibles', href: '#' },
        ],
    },
];

export default function Footer() {
    return (
        <footer>
            <div className="dc-footer-top">
                <div className="container-page d-flex">
                    <div className="row">
                        {footerSections.map(section => (
                            <div key={section.title} className="col col-4">
                                <h5>{section.title}</h5>
                                <ul>
                                    {section.items.map(item => (
                                        <li key={item.id}>
                                            <a className="dc-foot-link" href={item.href}>{item.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
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