import './CakeCard.css';

export default function CakeCard({ image, title, size, price, desc, label }) {
    return (
        <div className="product-card">
            <div className="swiper cardSwiper">
                {label && <span className="card-label">{label}</span>}
            </div>
            <div className="content">
                <img src={image} alt={title}/>
                <h3 className="title">{title}</h3>
                <p className="amount">{size}</p>
                <h2 className="count">{price}</h2>

                <p className="desc">{desc}</p>
            </div>
        </div>
    );
}
