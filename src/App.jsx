import Header from "./components/Header"
import Main from "./components/Main"
import dc_logo_bg from './assets/img/dc-logo-bg.png'

function App() {

  return (
    <>
      <Header />
      <Main />
      <footer>
        <div className="container d-flex">
          <div className="row">
            <div className="col col-3">
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
            <div className="col col-3">
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
            <div className="col col-3">
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
      </footer>
    </>
  )
}

export default App
