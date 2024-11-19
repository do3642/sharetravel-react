import { useState } from "react";
import '../styles/Market.css'

function Market() {
  const [sortList, setSortList] = useState('최신순');

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
    </section>
  )
}

export default Market;