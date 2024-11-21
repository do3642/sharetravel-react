import '../styles/MarketCarousel.css';
import marketData from '../data/marketData';
import { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

function MarketCarousel() {
  const [moveIndex, setMoveIndex] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const navigate = useNavigate();

  // 5초마다 자동으로 이미지 변경
  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 5000); // 5초마다 자동 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 반복 중단
  }, []);

  // 화면 변경될 때 캐러셀 형태 변화
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  },[]);

  // 이전 사진으로 이동
  const prevImg = () => {
    setMoveIndex((prevIndex) => (prevIndex - 1 + marketData.length) % marketData.length);
  };

  // 다음 사진으로 이동
  const nextImg = () => {
    setMoveIndex((prevIndex) => (prevIndex + 1) % marketData.length);
  };
  
  // 슬라이드를 무한 루프처럼 보이게 하려면 사진들을 반복적으로 표시
  const getCarouselItems = () => {
    const extendedData = [...marketData, ...marketData, ...marketData]; // 데이터를 3배로 늘려서 무한 루프처럼 보이게 함
    const startIndex = moveIndex;
    const visibleItems = () => {
      if (screenSize <= 450) {
        return extendedData.slice(startIndex, startIndex + 1);
      } else if (screenSize <= 1100) {
        return extendedData.slice(startIndex, startIndex + 3);
      } else {
        return extendedData.slice(startIndex, startIndex + 5);
      }
    };
    
    return visibleItems().map((data, index) => {
      const isActive = (screenSize <= 450 && index === 0) ||
                       (screenSize <= 1100 && index === 1) ||
                       (screenSize > 1100 && index === 2);

      return (

          <div
            key={index}
            className={`carousel-item ${isActive ? 'active' : ''}`}
            style={{
              transition: 'transform 0.5s ease',
            }}
          >
            <div
              className="image-container"
              onClick={() => navigate(`market/${data.id}`)} // 상품 페이지로 이동
            >
              <img src={data.src} alt={`마켓이미지${index + 1}`} />
              {isActive && (
                <div className="overlay">
                  <div className='description'>
                    <div className="description-title">{data.title}</div>
                    <br />
                    <div className='description-price'>{data.price}원</div>
                  </div>
                  <button className="go left" onClick={prevImg}>
                    <ArrowBackIosNewIcon />
                  </button>
                  <button className="go right" onClick={nextImg}>
                    <ArrowForwardIosIcon />
                  </button>
                </div>
              )}
            </div>
          </div>

      );
    });
  };

  return (
    <section className="marketCrs">
      <h2>마켓 둘러보기</h2>
      <div className="carousel">
        {getCarouselItems()}
      </div>
    </section>
  );
}

export default MarketCarousel;