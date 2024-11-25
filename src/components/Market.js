import { useState } from "react";
import '../styles/Market.css';
import MarketCard from "./MarketCard";
import marketData from "../data/marketData";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from "react-router-dom";

function Market() {
  const [sortList, setSortList] = useState('최신순');
  // 상품들의 정보를 저장해주는 state
  const[product, setProduct] = useState(marketData);
  const navigate = useNavigate();

  // 페이지 상단으로 스크롤 해주는 함수
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="market">
      <div className="sort-tabs">
        <button
          className={sortList === '최신순' ? "sort" : "sort-hidden"}
          onClick={() => setSortList('최신순')}
        >
          최신순
        </button>
        <button
          className={sortList === '찜 많은 순' ? "sort" : "sort-hidden"}
          onClick={() => setSortList("찜 많은 순")}
        >
          찜 많은 순
        </button>
      </div>

      <MarketCard product={product}/>
      <div className="market-bottom">
        <button className="sell-btn" onClick={() => navigate('/marketsell')}>판매하기</button>
        <button className="up-btn" onClick={scrollTop}><ArrowUpwardIcon /></button>
      </div>
    </section>
  )
}

export default Market;