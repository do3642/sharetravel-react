import TravelAdsBox from "./TavelAdsBox";
import adsData from "../data/travelAdsData.js";
import { Link } from "react-router-dom";
import '../styles/TravelAds.css'


function TravelAds(){
  // 4개씩 그룹화
  const groupedData = adsData.reduce((acc, curr, index) => {
    if (index % 4 === 0) acc.push([]); // 새로운 그룹 시작
    acc[acc.length - 1].push(curr); // 현재 데이터를 마지막 그룹에 추가
    return acc;
  }, []);


  return(
    <section className="Travel-Ads">
      <div className="Travel-Ads-Top">
        <h2>제목</h2>
        <Link to={"/"}>+더보기</Link>
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
         />
            ))}
        </article>
    </section>
  )
}

export default TravelAds;