import Digital_comics from "../assets/img/buy-comics-digital-comics.png"
import DC_merch from "../assets/img/buy-comics-merchandise.png"
import Subs from "../assets/img/buy-comics-subscriptions.png"
import Comic_shop from "../assets/img/buy-comics-shop-locator.png"
import DC_visa from "../assets/img/buy-dc-power-visa.svg"

export default function Main({ comics }) {
    return (
        <main className="list_comics">

            <div className="bg-top-main"></div>

            <div className="container-page py-3">

                <button className="current-list">CURRENT SERIES</button>

                <div className="row d-flex row-cols-6 g-3">

                    {
                        comics.map(comic => (
                            <Card key={comic.id} thumb={comic.thumb} series={comic.series} />
                        ))
                    }


                </div>
                <div className="text-center">
                    <button className="load-list">LOAD MORE</button>
                </div>
            </div>

            <div className="bg-dc py-3">

                <div className="container-page">
                    <nav className="nav justify-content-between gap-3">
                        <div className="d-flex align-items-center gap-2">
                            <img src={Digital_comics} className="icon" alt="digital" />
                            <a className="nav-link text-white p-0" href="#">DIGITAL COMICS</a>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={DC_merch} className="icon" alt="merch" />
                            <a className="nav-link text-white p-0" href="#">DC MERCHANDISE</a>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={Subs} className="icon" alt="subscription" />
                            <a className="nav-link text-white p-0" href="#">SUBSCRIPTION</a>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={Comic_shop} className="icon" alt="shop" />
                            <a className="nav-link text-white p-0" href="#">COMIC SHOP LOCATOR</a>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={DC_visa} className="icon" alt="visa card" />
                            <a className="nav-link text-white p-0" href="#">DC POWER VISA</a>
                        </div>
                    </nav>
                </div>
            </div>
        </main>
    )
}