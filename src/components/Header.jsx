import dc_logo from '../assets/img/dc-logo.png'

export default function Header() {

    const menu = [
        {
            id: 1,
            link: '#',
            text: 'CHARACTERS',
            is_active: false
        },
        {
            id: 2,
            link: '#',
            text: 'COMICS',
            is_active: true
        },
        {
            id: 3,
            link: '#',
            text: 'MOVIE',
            is_active: false
        },
        {
            id: 4,
            link: '#',
            text: 'TV',
            is_active: false
        },
        {
            id: 5,
            link: '#',
            text: 'GAMES',
            is_active: false
        },
        {
            id: 6,
            link: '#',
            text: 'COLLECTIBLES',
            is_active: false
        },
        {
            id: 7,
            link: '#',
            text: 'VIDEO',
            is_active: false
        },
        {
            id: 8,
            link: '#',
            text: 'NEWS',
            is_active: false
        },
        {
            id: 9,
            link: '#',
            text: 'CARD',
            is_active: false
        },
        {
            id: 10,
            link: '#',
            text: 'SHOP',
            is_active: false
        },
    ]

    return (<header>
        <div className='container d-flex align-items-center justify-content-between p-3'>
            <img src={dc_logo} className='head-logo' alt="logo" />
            <nav className="nav justify-content-center">
                {
                    menu.map(item => (
                        <a key={item.id} className={`nav-link ${item.is_active ? 'current' : ''}`} href={item.link}>{item.text}</a>
                    ))
                }
                {/* <a className="nav-link" href="#">CHARACTERS</a>
                <a className="nav-link" href="#">COMICS</a>
                <a className="nav-link" href="#">MOVIES</a>
                <a className="nav-link" href="#">TV</a>
                <a className="nav-link" href="#">GAMES</a>
                <a className="nav-link" href="#">COLLECTIBLES</a>
                <a className="nav-link" href="#">VIDEOS</a>
                <a className="nav-link" href="#">NEWS</a>
                <a className="nav-link" href="#">FANS</a>
                <a className="nav-link" href="#">SHOP</a> */}
            </nav>
        </div>
    </header>)
}