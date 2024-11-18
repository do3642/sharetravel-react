import '../styles/MarketCarousel.css';
import marketData from '../data/marketData';
import { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function MarketCarousel() {
  const [moveIndex, setMoveIndex] = useState(0);

  // 5초마다 자동으로 이미지 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setMoveIndex((prevIndex) => (prevIndex + 1) % marketData.length);
    }, 5000); // 5초마다 자동 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 반복 중단
  }, []);

  // 이전 사진으로 이동
  const prevImg = () => {
    setMoveIndex((prevIndex) => (prevIndex - 1 + marketData.length) % marketData.length);
  };

  // 다음 사진으로 이동
  const nextImg = () => {
    setMoveIndex((prevIndex) => (prevIndex + 1) % marketData.length);
  };

  return (
    <section className='marketCrs'>
      <h2>마켓 둘러보기</h2>

      <div className='carousel'>
        {marketData.map((data, index) => {
          // 계산된 위치를 기반으로 사진 이동 및 확대/축소 효과 적용
          const position = (index - moveIndex + marketData.length) % marketData.length;
          const isActive = position === Math.floor(marketData.length / 2); // 가운데 사진인지 확인

          return (
            <div
              key={index}
              className={`carousel-item ${isActive ? 'active' : ''}`}
              style={{ transform: `translateX(${(position - Math.floor(marketData.length / 2)) * 100}%)` }}
            >
              <img src={data.src} alt={`마켓이미지${index + 1}`} />
              {isActive && (
                <>
                  <div className='description'>
                    {data.title} - {data.price}
                  </div>
                  <button className='go left' onClick={prevImg}>
                    <ArrowBackIosNewIcon />
                  </button>
                  <button className='go right' onClick={nextImg}>
                    <ArrowForwardIosIcon />
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MarketCarousel;