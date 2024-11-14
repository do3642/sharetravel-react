import { Link } from "react-router-dom";
import '../styles/Visual.css'

function Visual (){
  return (
    <section id="visual">
      <article className="left-visual">
        <div className="color-box"></div>
        <div className="visual-batch-box">
            <div className="visual-btn-box">
              <button>&lt;</button>
              <button>&gt;</button>
              <span>
                <span>1</span>
                <span>/ 10</span>
              </span>
            </div>
        </div>
      </article>
{/* ------------------------ */}
      <article className="right-visual">
        <Link to={'/'}>
          <img src="/img/Banner-1.jpg" alt="메인비주얼"></img>
        </Link>
      </article>

      <div className="visual-text-box">
          <div>
            <p>모두시그니처</p>
            <p>모두가 선택한 프리미엄여행</p>
          </div>
          <div>
            <p>#2년연속 한국소비자대상 수상</p>
            <p>#시그니처 #시그니처블랙</p>
          </div>
      </div>

    </section>
  )
}

export default Visual;