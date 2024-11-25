import { useNavigate } from "react-router-dom";
import '../styles/MarketCard.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axiosInstance from "../axios/axiosInstance";
import { useEffect, useState } from "react";

function MarketCard({ product }) {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosInstance.get('/market')
      .then(response => {
        console.log(response.data)
        setProductList(response.data)
        setLoading(true)
      }).catch(error => {
        console.log(error);
      })
  },[])

  const combinedProducts = [
    ...product.map(item => ({
      ...item,
      images: Array.isArray(item.images) ? item.images : [item.images], // 이미지 배열로 변환
    })),
    ...productList.map(item => ({
      ...item,
      images: Array.isArray(item.images) ? item.images : [item.images], // 이미지 배열로 변환
    })),
  ];

  if( !loading ) {
    return (<div>로딩중입니다.</div>)
  }

  return (
    <div className="product-container">
      {combinedProducts.map((item, index) => (
        <div className="product-card" key={index} onClick={() => navigate(`/market/${item.id}`)}>
          <img className="product-img" src={item.images[1] ? `http://localhost:8888/upload/${item.images[2].img}` : `/img/market-${index}.png`} alt={item.title} />
          <div className="product-card-right">
            <p className="product-title">{item.title}</p>
            <br/>
            <p className="product-price">{item.price} 원</p>
          </div>
          <div className="product-card-left">
            <p><VisibilityIcon id='icon'/> {item.cnt}</p>
            <p><FavoriteIcon id='icon'/> {item.likeCount}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MarketCard;