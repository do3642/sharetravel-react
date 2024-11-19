import { useNavigate } from "react-router-dom";
import '../styles/MarketCard.css';

function MarketCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-container">
      {product.map((item, index) => (
        <div className="product-card" key={index}>
          <img className="product-img" src={item.src} alt={item.title} />
          <div className="product-card-right">
            <p className="product-title">{item.title}</p>
            <p className="product-price">{item.price}</p>
          </div>
          <div className="product-card-left">
            <p>{item.view}</p>
            <p>{item.like}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MarketCard;