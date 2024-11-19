import { useState } from "react";
import '../styles/Market.css';
import MarketCard from "./MarketCard";
import marketData from "../data/marketData";

function Market() {
  const [sortList, setSortList] = useState('최신순');
  // 상품들의 정보를 저장해주는 state
  const[product, setProduct] = useState(marketData)

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
    </section>
  )
}

export default Market;