import '../styles/TravelAdsBox.css'
function TravelAdsBox(){
  return(
    <div className="Travel-Ads-Box">
        <div><img src='/img/travelAds-1.jpg' alt=''></img></div>
        <p>호텔</p>
        <p>해피홈 호텔</p>
        <p>오션뷰와 함께하는 여유로운 휴식</p>
        <p>해피홈 호텔은 아름다운 오션뷰를 자랑하는 고급 호텔로, 다양한 편의시설과 친절한 서비스로 여행객들에게 최상의 휴식을 제공합니다. 바다를 보며 즐기는 아침식사와 넓은 수영장은 특별한 경험을 선사합니다. 가족, 친구, 연인과 함께 방문하기 좋은 호텔입니다.</p>
        <div>
          <span><i className="fa-regular fa-thumbs-up"></i>10</span>
          <span><i className="fa-regular fa-comment-dots"></i> 20</span>
        </div>
    </div>
  )
}

export default TravelAdsBox;