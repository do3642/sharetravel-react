import TravelAdsBox from "./TavelAdsBox";
import adsData from "../data/travelAdsData.js";
import { Link, useNavigate } from "react-router-dom";
import '../styles/TravelAds.css'


function TravelAds(){
  // 박스 클릭시 포스트 이동역할
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/travel-info/${id}`);  // 해당 포스트로 이동
  };


  return(
    <section className="Travel-Ads">
      <div className="Travel-Ads-Top">
        <h2>오늘의 추천 숙소</h2>
        <Link to={"/travel-info"}><i className="fa-solid fa-plus"></i> 더보기</Link>
      </div>
      <article>
         {adsData.map((ad) => (
        <TravelAdsBox
          key={ad.id}
          imgSrc={ad.imgSrc}
          category={ad.category}
          title={ad.title}
          description={ad.description}
          detail={ad.detail}
          likes={ad.likes}
          comments={ad.comments}
          onClick={() => handleClick(ad.id)}
         />
            ))}
        </article>
    </section>
  )
}

export default TravelAds;