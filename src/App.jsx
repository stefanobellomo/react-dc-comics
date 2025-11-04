import Header from "./components/Header"
import Digital_comics from "./assets/img/buy-comics-digital-comics.png"
import DC_merch from "./assets/img/buy-comics-merchandise.png"
import Subs from "./assets/img/buy-comics-subscriptions.png"
import Comic_shop from "./assets/img/buy-comics-shop-locator.png"
import DC_visa from "./assets/img/buy-dc-power-visa.svg"

function App() {

  return (
    <>
      <Header />
      <main className="container">
        <nav className="nav justify-content-center">
          <div>
            <img src={Digital_comics} alt="digital" />
            <a className="nav-link" href="#">DIGITAL COMICS</a>
          </div>
          <div>
            <img src={DC_merch} alt="merch" />
            <a className="nav-link" href="#">DC MERCHANDISE</a>
          </div>
          <div>
            <img src={Subs} alt="subscrition" />
            <a className="nav-link" href="#">SUBSCRIPTION</a>
          </div>
          <div>
            <img src={Comic_shop} alt="shop" />
            <a className="nav-link" href="#">COMIC SHOP LOCATOR</a>
          </div>
          <div>
            <img src={DC_visa} alt="visa_card" />
            <a className="nav-link" href="#">DC POWER VISA</a>
          </div>
        </nav>
      </main>

    </>
  )
}

export default App
