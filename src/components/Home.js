import TravelInfo from './TravelInfo';
import TravelAds from './TravelAds';
import Visual from './Visual';
import MarketCarousel from './MarketCarousel';

function Home(){
  return(
    <>
      <Visual/>
      <TravelInfo/>
      <TravelAds/>
     <MarketCarousel />
    </>
  )
}

export default Home;