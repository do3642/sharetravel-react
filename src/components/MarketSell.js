import '../styles/MarketSell.css';

function MarketSell() {
  return (
    <section className="market-sell">
      <ul className="sell-info">
        <li>상품명:<input type="text" id="title" name="title"/></li>
        <li>지역: <input type="text" id="area" name="area"/></li>
        <li>가격: <input type="number" id="price" name="price"/>원</li>
        <li>상품이미지: <input type="file" multiple id="img" name="img" /></li>
        <li>상품 정보: 
          <textarea id="info" name='info' rows='9'></textarea>
        </li>
        <button>상품 등록</button>
      </ul>

    </section>
  )
}

export default MarketSell;