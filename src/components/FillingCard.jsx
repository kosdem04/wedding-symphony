import './FillingCard.css';

export default function FillingCard({ image, title, composition, desc, }) {
    return (
        <div className="product-card">
            <div className="contentFilling">
                <img src={image} alt={title}/>
                <h3 className="title">{title}</h3>
                <div className="composition">
                    <span className="composition-title">Состав:</span>
                    <ul className="composition-list">
                        {composition.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <p className="descFilling">{desc}</p>
            </div>
        </div>
    );
}
