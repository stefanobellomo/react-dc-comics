import dc_logo from './assets/img/dc-logo.png'

export default function Header() {
    return (<header>
        <div className='container d-flex align-items-center justify-content-between'>
            <img src={dc_logo} alt="logo" />
            <nav className="nav justify-content-center">
                <a className="nav-link" href="#">CHARACTERS</a>
                <a className="nav-link" href="#">COMICS</a>
                <a className="nav-link" href="#">MOVIES</a>
                <a className="nav-link" href="#">TV</a>
                <a className="nav-link" href="#">GAMES</a>
                <a className="nav-link" href="#">COLLECTIBLES</a>
                <a className="nav-link" href="#">VIDEOS</a>
                <a className="nav-link" href="#">NEWS</a>
                <a className="nav-link" href="#">FANS</a>
                <a className="nav-link" href="#">SHOP</a>
            </nav>
        </div>
    </header>)
}