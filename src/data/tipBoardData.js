

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

    // 새로운 속성 추가
    const content = faker.lorem.paragraphs(faker.number.int({ min: 1, max: 3 })); // 1~3개의 단락 생성
    const image = faker.image.urlPicsumPhotos(); // 랜덤 이미지 URL 생성

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
      content,
      image,
    });
  }
  return posts;
};

const allPosts = generateRandomPosts(30);

export default allPosts;
