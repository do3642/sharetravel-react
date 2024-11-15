import '../styles/TravelInfo.css'
import testImage from '../assets/userProfile/test1.png';
import testImages from '../assets/userProfile/test2.png';
import { useState } from 'react';

function TravelInfo() {

   // 상태 정의: 현재 이미지 URL을 저장할 state
   const [currentImage, setCurrentImage] = useState("/img/travelInfo-1.jpg");
   const [imageIndex, setImageIndex] = useState(0);

  
   const images = [
    ["/img/travelInfo-1.jpg",
     "/img/travelInfo-2.jpg",
     "/img/travelInfo-3.jpg",],
    ["/img/travelInfo-4.jpg",
     "/img/travelInfo-5.jpg",
     "/img/travelInfo-6.jpg",],
    ["/img/travelInfo-7.jpg",
     "/img/travelInfo-8.jpg",
     "/img/travelInfo-9.jpg",]
   ]
   
   
   // 이미지를 변경하는 함수
   const changeImage = (imageSrc) => {
     setCurrentImage(imageSrc); // 클릭된 p 태그의 이미지 src로 상태 변경
   };
 
  // 상태 정의: 클릭된 p 태그의 인덱스를 저장할 state
  const [clickedIndex, setClickedIndex] = useState(0);

  







  return(
    <section id="travel-info">
      <h2>추천 여행지</h2>
      <div className="flex-box">

        {/* 추천지 사진들 */}
        <article className="left-travel-info">
          <div><img src={currentImage} alt="Travel"></img></div>
          <div>
          {images[imageIndex].map((image, index) => (
          <p className={clickedIndex === index ? "active": ""} key={index} onClick={() => {
            changeImage(image);
            setClickedIndex(index);
            }}>
            <img src={image} alt={`Travel Info ${index + 1}`} />
          </p>
        ))}
          </div>

          {/* 최소,최대일때 버튼 활성,비활성화 */}
          {imageIndex !== 0 ?
           <i className="fa-regular fa-circle-left" onClick={()=>{
            setImageIndex(imageIndex-1);
            changeImage(images[imageIndex-1][0]);
            setClickedIndex(0);
          }}></i> :  <i style={{display:'none'}}>;</i>
          }
         {imageIndex < images.length-1 ?
            <i className="fa-regular fa-circle-right" onClick={()=>{
              setImageIndex(imageIndex+1);
              changeImage(images[imageIndex+1][0]);
              setClickedIndex(0);
            }}></i> : <i style={{display:'none'}}>;</i>

         }
         
        </article>

        {/* 추천지 관련 댓글들 */}
        <article className="right-travel-info">
          <div className="comments-list">
            <div className="comments">
              <div className="comments-info">
                <p><img src={testImage} alt="사용자 프사"></img></p>
                <div>
                  <span>오키러버</span>
                  <span><strong>글 10 |</strong><strong>&nbsp;댓글 15</strong></span>
                </div>
                <div>
                  <span>작성일</span>
                  <span><strong>2024. 11. 15</strong></span>
                </div>
                
              </div>
              <div className="comments-content">
                <span>오키나와의 에메랄드빛 바다가 정말 아름다워요! 다음엔 꼭 다이빙도 해보고 싶어요.</span>
              </div>
            </div>
            <div className="comments">
              <div className="comments-info">
                <p><img src={testImages} alt="사용자 프사"></img></p>
                <div>
                  <span>푸른바다러버</span>
                  <span><strong>글 132 |</strong><strong>&nbsp;댓글 155</strong></span>
                </div>
                <div>
                  <span>작성일</span>
                  <span><strong>2024. 11. 15</strong></span>
                </div>
              </div>
              <div className="comments-content">
                <span>국제거리가 생각보다 볼 것도 많고, 먹거리도 풍부해서 하루 종일 즐겁게 보냈습니다! 가족 여행으로 딱이네요.</span>
              </div>
            </div>
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
              <ul className="tip">
                <li>오키나와</li>
                <li>숨겨진 맛집 추천</li>
                <li><i className="fa-regular fa-thumbs-up"></i>42</li>
                <li><i className="fa-regular fa-comment-dots"></i>15</li>
                <li>여행자1</li>
              </ul>
              <ul className="tip">
                <li>제주도</li>
                <li>알뜰하게 렌트카 이용하기</li>
                <li><i className="fa-regular fa-thumbs-up"></i>28</li>
                <li><i className="fa-regular fa-comment-dots"></i>8</li>
                <li>바다여행자</li>
              </ul>
              <ul className="tip">
                <li>부산</li>
                <li>광안리 해변 카페 추천</li>
                <li><i className="fa-regular fa-thumbs-up"></i>35</li>
                <li><i className="fa-regular fa-comment-dots"></i>22</li>
                <li>커피러버</li>
              </ul>
              <ul className="tip">
                <li>강릉</li>
                <li>경포대 해변 사진 스팟</li>
                <li><i className="fa-regular fa-thumbs-up"></i>50</li>
                <li><i className="fa-regular fa-comment-dots"></i>30</li>
                <li>파도타기</li>
              </ul>
              <ul className="tip">
                <li>서울</li>
                <li>도심 속 힐링 명소</li>
                <li><i className="fa-regular fa-thumbs-up"></i>19</li>
                <li><i className="fa-regular fa-comment-dots"></i>5</li>
                <li>도시여행자</li>
              </ul>
            </div>


        </article>
      </div>
    </section>
  )
}

export default TravelInfo;