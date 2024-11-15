import '../styles/TravelAdsBox.css'
function TravelAdsBox(){
  return(
    <div className="Travel-Ads-Box">
        <div><img src='' alt=''></img></div>
        <p>업종</p>
        <p>상호명</p>
        <p>제목</p>
        <p>내용</p>
        <div>
          <span><i className="fa-regular fa-thumbs-up"></i>10</span>
          <span><i className="fa-regular fa-comment-dots"></i> 20</span>
        </div>
    </div>
  )
}

export default TravelAdsBox;