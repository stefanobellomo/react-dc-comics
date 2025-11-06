export default function Social({ social }) {
    return (
        <div className="col-auto d-flex align-items-center gap-3">
            {social.map(item => (
                <a key={item.id} href={item.href} aria-label={item.alt}>
                    <img src={item.src} className="soc-icon" alt="Facebook" />
                </a>
            ))}
        </div>
    )
}