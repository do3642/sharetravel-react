// const allPosts = [
//   { id: 1, category: "국외", location: "베트남", title: "베트남 다낭 여행 가이드", author: "동남아여행자", date: "2024-11-19", views: 150, comments: 50, recommendations: 60 },
//   { id: 2, category: "국외", location: "파리", title: "파리에서의 하루", author: "프랑스러버", date: "2024-11-19", views: 85, comments: 20, recommendations: 10 },
//   { id: 3, category: "국내", location: "가평", title: "가평 숲속 캠핑장 리뷰", author: "캠퍼B", date: "2024-11-19", views: 95, comments: 40, recommendations: 30 },
//   { id: 4, category: "국내", location: "제주도", title: "제주도 힐링 여행 코스", author: "여행러A", date: "2024-11-19", views: 120, comments: 100, recommendations: 50 },
//   { id: 5, category: "국외", location: "이탈리아", title: "로마의 역사적인 명소들", author: "유럽여행자", date: "2024-11-19", views: 200, comments: 60, recommendations: 90 },
//   { id: 6, category: "국내", location: "강릉", title: "강릉 여행의 매력", author: "바다사랑", date: "2024-11-13", views: 110, comments: 70, recommendations: 40 },
//   { id: 7, category: "국외", location: "뉴욕", title: "뉴욕 여행의 모든 것", author: "미국탐방", date: "2024-11-12", views: 250, comments: 150, recommendations: 120 },
//   { id: 8, category: "국내", location: "부산", title: "부산 여행지 추천", author: "부산사람", date: "2024-11-11", views: 180, comments: 120, recommendations: 70 },
//   { id: 9, category: "국외", location: "도쿄", title: "도쿄에서의 즐길 거리", author: "일본여행자", date: "2024-11-10", views: 210, comments: 80, recommendations: 60 },
//   { id: 10, category: "국내", location: "서울", title: "서울에서 즐기는 다양한 액티비티", author: "도시탐방", date: "2024-11-09", views: 190, comments: 130, recommendations: 110 },
//   { id: 11, category: "국외", location: "싱가포르", title: "싱가포르에서의 여유로운 하루", author: "동남아여행자", date: "2024-11-08", views: 180, comments: 50, recommendations: 40 },
//   { id: 12, category: "국내", location: "경주", title: "경주의 아름다운 풍경", author: "문화탐방", date: "2024-11-07", views: 160, comments: 90, recommendations: 80 },
//   { id: 13, category: "국외", location: "런던", title: "런던의 명소와 여행 팁", author: "영국여행자", date: "2024-11-06", views: 230, comments: 140, recommendations: 100 },
//   { id: 14, category: "국내", location: "전주", title: "전주 한옥마을 탐방", author: "전주사랑", date: "2024-11-05", views: 140, comments: 60, recommendations: 50 },
//   { id: 15, category: "국외", location: "스페인", title: "스페인의 매력적인 도시들", author: "유럽탐방", date: "2024-11-04", views: 260, comments: 130, recommendations: 110 },
//   { id: 16, category: "국내", location: "속초", title: "속초 바다 여행", author: "바다사랑", date: "2024-11-03", views: 150, comments: 80, recommendations: 60 },
//   { id: 17, category: "국외", location: "멕시코", title: "멕시코 여행 가이드", author: "남미여행자", date: "2024-11-02", views: 120, comments: 30, recommendations: 20 },
//   { id: 18, category: "국내", location: "서울", title: "서울의 숨은 명소들", author: "도시탐방", date: "2024-11-01", views: 200, comments: 110, recommendations: 90 },
//   { id: 19, category: "국외", location: "홍콩", title: "홍콩 여행 꿀팁", author: "아시아탐방", date: "2024-10-31", views: 170, comments: 60, recommendations: 40 },
//   { id: 20, category: "국내", location: "제주도", title: "제주도 올레길 여행", author: "제주사랑", date: "2024-10-30", views: 220, comments: 150, recommendations: 130 },
// ];

// export default allPosts;


import { faker } from '@faker-js/faker';

const categories = ["국내", "국외"];
const locationsDomestic = ["서울", "제주도", "부산", "강릉", "가평", "전주", "속초", "경주"];
const locationsInternational = ["파리", "뉴욕", "도쿄", "런던", "베트남", "싱가포르", "이탈리아", "스페인", "홍콩", "멕시코"];
const authors = ["여행러A", "바다사랑", "동남아여행자", "유럽여행자", "캠퍼B", "전주사랑", "도시탐방", "아시아탐방", "프랑스러버", "미국탐방"];
const titles = [
  "여행 가이드", "숨은 명소 탐방", "추천 여행지", "여행 꿀팁", "명소와 여행 팁",
  "힐링 코스", "역사적인 명소들", "즐길 거리", "바다 여행", "도시 탐방"
];

const generateRandomPosts = (count) => {
  const posts = [];
  for (let i = 1; i <= count; i++) {
    const category = faker.helpers.arrayElement(categories);
    const location = category === "국내"
      ? faker.helpers.arrayElement(locationsDomestic)
      : faker.helpers.arrayElement(locationsInternational);
    const title = `${location} ${faker.helpers.arrayElement(titles)}`;
    const author = faker.helpers.arrayElement(authors);
    const date = faker.date.recent(30).toISOString().split("T")[0]; // 최근 30일 중 날짜
    const views = faker.number.int({ min: 50, max: 300 });
    const comments = faker.number.int({ min: 10, max: 150 });
    const recommendations = faker.number.int({ min: 10, max: 120 });

    posts.push({
      id: i,
      category,
      location,
      title,
      author,
      date,
      views,
      comments,
      recommendations,
    });
  }
  return posts;
};

const allPosts = generateRandomPosts(100);

export default allPosts;
