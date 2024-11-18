import '../styles/TravelAdsBox.css'
function TravelAdsBox({ imgSrc, category, title, description, detail, likes, comments, onClick }){
  return(
    <div className="Travel-Ads-Box" onClick={onClick}>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <p>{category}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{detail}</p>
      <div>
        <span>
          <i className="fa-regular fa-thumbs-up"></i> {likes}
        </span>
        <span>
          <i className="fa-regular fa-comment-dots"></i> {comments}
        </span>
      </div>
  </div>
  )
}

export default TravelAdsBox;