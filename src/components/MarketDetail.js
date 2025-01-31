import marketData from "../data/marketData";
import { useParams } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../styles/MarketDetail.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";

function MarketDetail( {user} ) {
  const { productId } = useParams();
  const product = marketData.find((product) => product.id === parseInt(productId, 10));
  // 찜을 클릭했는지 안 했는지 기억해줌
  const [click, setClick] = useState(false); // false가 선택 안 함. true가 선택.
  const [like, setLike] = useState(product.likeCount);

  // 찜 버튼에 대한 핸들러
  const handleLikeClick = () => {
    if (click) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setClick(!click);
  }

  return(
    <section className="market-detail">
      <div className="product">
        <img src={product.images}></img>
        <div className="product-detail">
          <ul className="detail-top">
            <li className="title">{product.title}</li>
            <li className="price">{product.price}</li>
            <li className="area">{product.area}</li>
          </ul>
          <hr />
          <ul className="detail-bottom">
            <li><FavoriteIcon /> {product.likeCount} |</li>
            <li><VisibilityIcon /> {product.cnt} |</li>
            <li><AccessTimeFilledIcon /> {product.createDate}</li>
          </ul>

          <div className="detail-btn">
            <button className="like-btn" onClick={handleLikeClick}><FavoriteIcon className={click ? "like" : "dislike"}/> 찜 </button>
            <button className="buy-btn"><ShoppingCartIcon /> 바로 구매 </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />

      <div className="product-dsc">
        <h2>상품 정보</h2>
        <hr />
        <p>상품정보가 나와야 함.</p>
      </div>
    </section>
  )
}

export default MarketDetail;