import { useNavigate } from "react-router-dom";
import '../styles/MarketCard.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MarketCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-container">
      {product.map((item, index) => (
        <div className="product-card" key={index} onClick={() => navigate(`/market/${item.id}`)}>
          <img className="product-img" src={item.src} alt={item.title} />
          <div className="product-card-right">
            <p className="product-title">{item.title}</p>
            <br/>
            <p className="product-price">{item.price} 원</p>
          </div>
          <div className="product-card-left">
            <p><VisibilityIcon id='icon'/> {item.view}</p>
            <p><FavoriteIcon id='icon'/> {item.like}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MarketCard;