import './CakeCard.css';

export default function CakeCard({ image, title, size, price, desc, label }) {
    return (
        <div className="product-card">
            {/*<div className="swiper-card cardSwiper">*/}
            {/*    {label && <span className="card-label">{label}</span>}*/}
            {/*</div>*/}
            <div className="content">
                <img src={image} alt={title}/>
                <h3 className="title">{title}</h3>
                <p className="amount">{size}</p>
                <h2 className="count">{price}</h2>
                {/*<ul className="composition-cake-list">*/}
                {/*    {desc.map((item, index) => (*/}
                {/*        <li key={index}>{item}</li>*/}
                {/*    ))}*/}
                {/*</ul>*/}

                {/*<p className="desc">{desc}</p>*/}
            </div>
            <div className="contact-button-wrapper-card">
                <a
                    href="#contact"
                    className="btn contact-link"
                >
                    Забронировать дату
                </a>
            </div>
        </div>
    );
}
