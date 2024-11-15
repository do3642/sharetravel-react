import '../styles/TravelInfo.css'
import { useState } from 'react';
import tipsData from '../data/tipsData.js';
import images from '../data/images.js';
import comments from '../data/commetsData.js';
import { useNavigate } from 'react-router-dom';

// 추후 tipsData에 DB에서 꺼내오는걸 받아야함
// images에는 추천 여행지 사진들
function TravelInfo() {




  // 상태 정의: 현재 이미지 URL을 저장할 state
  const [currentImage, setCurrentImage] = useState("/img/travelInfo-1.jpg");
  const [imageIndex, setImageIndex] = useState(0);




  // 이미지를 변경하는 함수
  const changeImage = (imageSrc) => {
    setCurrentImage(imageSrc); // 클릭된 p 태그의 이미지 src로 상태 변경
  };

  // 상태 정의: 클릭된 p 태그의 인덱스를 저장할 state
  const [clickedIndex, setClickedIndex] = useState(0);


  // -------------------------------------


  // 랜덤 색상을 생성하는 함수
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // 여행 팁 리스트에 랜덤 색상을 적용
  const tipsWithRandomColors = tipsData.map(tip => ({
    ...tip,
    randomColor: getRandomColor(),
  }));



  //  팁 게시물 navigate
  const navigate = useNavigate();
  const handleTipClick = (id) => {
    navigate(`/post/${id}`); // 게시글 상세 페이지로 이동
  };

  return (
    <section id="travel-info">
      <h2>추천 여행지</h2>
      <div className="flex-box">

        {/* 추천지 사진들 */}
        <article className="left-travel-info">
          <div><img src={currentImage} alt="Travel"></img></div>
          <div>
            {images[imageIndex].map((image, index) => (
              <p className={clickedIndex === index ? "active" : ""} key={index} onClick={() => {
                changeImage(image);
                setClickedIndex(index);
              }}>
                <img src={image} alt={`Travel Info ${index + 1}`} />
              </p>
            ))}
          </div>

          {/* 최소,최대일때 버튼 활성,비활성화 */}
          {imageIndex !== 0 ?
            <i className="fa-regular fa-circle-left" onClick={() => {
              setImageIndex(imageIndex - 1);
              changeImage(images[imageIndex - 1][0]);
              setClickedIndex(0);
            }}></i> : <i style={{ display: 'none' }}>;</i>
          }
          {imageIndex < images.length - 1 ?
            <i className="fa-regular fa-circle-right" onClick={() => {
              setImageIndex(imageIndex + 1);
              changeImage(images[imageIndex + 1][0]);
              setClickedIndex(0);
            }}></i> : <i style={{ display: 'none' }}>;</i>

          }

        </article>

        {/* 추천지 관련 댓글들 */}
        <article className="right-travel-info">
          <div className="comments-list">
            {comments[imageIndex].map((comment, index) => (
              <div className="comments" key={index}>
                <div className="comments-info">
                  <p><img src={comment.imgUrl} alt="사용자 프사" /></p>
                  <div>
                    <span>{comment.nickname}</span>
                    <span><strong>글 {comment.postCount} |</strong><strong>&nbsp;댓글 {comment.commentCount}</strong></span>
                  </div>
                  <div>
                    <span>작성일</span>
                    <span><strong>{comment.createDate}</strong></span>
                  </div>
                </div>
                <div className="comments-content">
                  <span>{comment.content}</span>
                </div>
              </div>
            ))}
          </div>
          <h3>인기 여행 팁</h3>
          {/* 여행팁 게시물 */}
          <div className="tips-list">
            <ul className="tip">
              <li>카테고리</li>
              <li>제목</li>
              <li>추천</li>
              <li>댓글</li>
              <li>닉네임</li>
            </ul>
            {tipsWithRandomColors.map((tip, index) => (
              <ul className="tip" key={index} onClick={() => handleTipClick(tip.id)}>
                <li >{tip.category}</li>
                <li>{tip.title}</li>
                <li><i className="fa-regular fa-thumbs-up"></i>{tip.thumbsUp}</li>
                <li><i className="fa-regular fa-comment-dots"></i>{tip.comments}</li>
                <li style={{ color: tip.randomColor }}>{tip.nickname}</li>
              </ul>
            ))}
          </div>


        </article>
      </div>
    </section>
  )
}

export default TravelInfo;