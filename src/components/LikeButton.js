import React, { useState } from 'react';
import '../styles/HeartEffect.css';

const LikeButton = () => {
  const [hearts, setHearts] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 상태 관리

  const handleLikeClick = () => {
    if (isAnimating) return; // 애니메이션이 진행 중일 경우 클릭을 막음

    // 애니메이션 시작
    setIsAnimating(true);

    // 하트의 새로운 위치와 애니메이션을 추가
    const heartCount = 30; // 총 하트 개수
    const intervalTime = 100; // 하트가 나오는 간격 (100ms)
    const newHearts = [];

    // setInterval로 하트를 일정 간격으로 뿌려줍니다
    const intervalId = setInterval(() => {
      if (newHearts.length < heartCount) {
        newHearts.push({
          id: Date.now() + newHearts.length, // 고유 id
          style: {
            left: `${Math.random() * 80 + 10}%`, // 10% ~ 90% 사이로 랜덤한 가로 위치
            top: `${Math.random() * 80 + 10}%`,  // 10% ~ 90% 사이로 랜덤한 세로 위치
            animationDuration: `${Math.random() * 1.5 + 1.5}s`, // 애니메이션 시간 랜덤 (1.5~3초)
            opacity: Math.random(), // 하트 투명도
          },
        });

        setHearts((prevHearts) => [...prevHearts, newHearts[newHearts.length - 1]]);
      } else {
        clearInterval(intervalId); // 하트가 다 뿌려지면 interval을 정리
      }
    }, intervalTime); // intervalTime 간격으로 하트를 추가

    // 일정 시간 후 하트 제거
    setTimeout(() => {
      setHearts([]); // 하트들 제거
      setIsAnimating(false); // 애니메이션 완료 후 다시 클릭 가능하도록 설정
    }, 6000); // 애니메이션이 끝난 후 (6초 후) 다시 클릭할 수 있도록 설정
  };

  return (
    <div className='like-btn'>
      <button onClick={handleLikeClick}>
        <i className="fa-solid fa-heart"></i> {/* 기존 하트 아이콘 유지 */}
        추천
      </button>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart"
          style={heart.style}
        >
          <i className="fa-solid fa-heart"></i> {/* 새로운 하트 */}
        </div>
      ))}
    </div>
  );
};

export default LikeButton;
