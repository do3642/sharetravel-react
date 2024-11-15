import { Link } from "react-router-dom";
import '../styles/Visual.css'
import { useEffect, useState } from "react";
import slides from '../data/slidesData.js';

function Visual (){


    // 색상 배열과 슬라이드 상태
    const colors = ["#FFF7D1", "#FFECC8", "#FFD09B"];
    const mainTextColor = ["#000 ","1E3A4D",""];
    const subTextColor = ["#5C4033","#000",""];
    const hashtagsColor = ["#000","",""];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 상태 추가

    // 다음 슬라이드로 이동하는 함수
    const nextSlide = () => {
      if(!isAnimating) return;
      setTimeout(()=>{
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setColorIndex((prev) => (prev + 1) % colors.length);
      },200);
    };

    // 이전 슬라이드로 이동하는 함수
    const prevSlide = () => {
      if(!isAnimating) return;
        setTimeout(()=>{
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          setColorIndex((prev) => (prev - 1 + colors.length) % colors.length);
        },200);
        
    };

    
    useEffect(()=>{
      setIsAnimating(false);
      setTimeout(() => {
        setIsAnimating(true); // 일정 시간 후 클래스 추가
    }, 200);
    },[currentSlide])

   

  return (
    <section id="visual">
      <article className="left-visual">
        <div className="color-box" style={{ backgroundColor: colors[colorIndex] }}></div>
        <div className="visual-batch-box">
            <div className="visual-btn-box">
              <button onClick={prevSlide}><i class="fa-solid fa-chevron-left"></i></button>
              <button onClick={nextSlide}><i class="fa-solid fa-chevron-right"></i></button>
              <span>
                <span>{currentSlide + 1}</span>
                <span>/ {slides.length}</span>
              </span>
            </div>
        </div>
      </article>
{/* ------------------------ */}

      <article className="right-visual" style={{ boxShadow: `0px 2px 20px ${colors[colorIndex]}` }}>
        <Link to={slides[currentSlide].link}>
          <img src={slides[currentSlide].imgSrc} alt="메인비주얼"></img>
        </Link>
      </article>

      <div className="visual-text-box">
          <div className={isAnimating ? 'animating' : ''}>
            <p style={{color:`${mainTextColor[currentSlide]}`}}>{slides[currentSlide].mainText}</p>
            <p style={{color:`${subTextColor[currentSlide]}`}}>{slides[currentSlide].subText}</p>
          </div>
          <div className={isAnimating ? 'animating' : ''}>
            {slides[currentSlide].hashtags.map((hashtag, index) => (
              <p key={index} style={{color:`${hashtagsColor[currentSlide]}`}}>{hashtag}</p>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Visual;