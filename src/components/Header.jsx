import dc_logo from '../assets/img/dc-logo.png'

export default function Header() {

    const menu = [
        {
            id: 1,
            link: '#',
            text: 'CHARACTERS',
        },
        {
            id: 2,
            link: '#',
            text: 'COMICS',
        },
        {
            id: 3,
            link: '#',
            text: 'MOVIE',
        },
        {
            id: 4,
            link: '#',
            text: 'TV',
        },
        {
            id: 5,
            link: '#',
            text: 'GAMES',
        },
        {
            id: 6,
            link: '#',
            text: 'COLLECTIBLES',
        },
        {
            id: 7,
            link: '#',
            text: 'VIDEO',
        },
        {
            id: 8,
            link: '#',
            text: 'NEWS',
        },
        {
            id: 9,
            link: '#',
            text: 'CARD',
        },
        {
            id: 10,
            link: '#',
            text: 'SHOP',
        },
    ]

    return (<header>
        <div className='container-page d-flex align-items-center justify-content-between p-3'>
            <img src={dc_logo} className='head-logo' alt="logo" />
            <nav className="nav justify-content-center">
                {
                    menu.map(item => (
                        <a key={item.id} className={`nav-link`} href={item.link}>{item.text}</a>
                    ))
                }
            </nav>
        </div>
    </header>)
}