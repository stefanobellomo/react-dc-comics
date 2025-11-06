import Info from './Info';
import dc_logo_bg from '../assets/img/dc-logo-bg.png'
import Social from './Social';

export default function Footer({ sections, social }) {
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
                            <Social social={social} />

                        </div>
                    </div>
                </div>
            </section>
        </footer>)
}