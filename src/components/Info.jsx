export default function Info({ sections }) {
    return (
        <div className="row">
            {sections.map(section => (
                <div key={section.title} className="col col-4">
                    <h5>{section.title}</h5>
                    <ul>
                        {section.items.map(item => (
                            <li key={item.id}>
                                <a className="dc-foot-link" href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}