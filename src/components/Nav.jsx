export default function Nav({ menu }) {

    return (
        <nav className="nav justify-content-center">
            {
                menu.map(item => (
                    <a key={item.id} className={'nav-link'} href={item.link}>{item.text}</a>
                ))
            }
        </nav>
    )
}