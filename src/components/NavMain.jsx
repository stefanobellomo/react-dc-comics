export default function NavMain({ nav_main }) {
    return (
        <nav className="nav justify-content-between gap-3">

            {nav_main.map(items => (
                <div key={items.id} className="d-flex align-items-center gap-2">
                    <img src={items.src} className="icon" alt="digital" />
                    <a className="nav-link text-white p-0" href="#">{items.label}</a>
                </div>
            ))}


        </nav>
    )
}