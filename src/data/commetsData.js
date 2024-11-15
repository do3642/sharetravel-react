import testImage from '../assets/userProfile/test1.png';
import testImage2 from '../assets/userProfile/test2.png';

// 댓글 더미데이터
const comments = [
  [
    { imgUrl: testImage, nickname: '바다연구가', postCount: 10, commentCount: 15, content: '오키나와에서 스노클링 했는데, 물고기들이 정말 가까이까지 와요!', createDate: '2024. 11. 15' },
    { imgUrl: testImage2, nickname: '미소연인', postCount: 32, commentCount: 40, content: '오키나와에서 만난 해변들은 정말 잊을 수 없네요. 다음엔 가족과 같이 오고 싶어요.', createDate: '2024. 11. 15' },
  ],
  [
    { imgUrl: testImage2, nickname: '다코야키러버', postCount: 45, commentCount: 27, content: '오사카에서 먹은 다코야키가 아직도 생각나요! 진짜 맛있었어요.', createDate: '2024. 11. 15' },
    { imgUrl: testImage, nickname: '유니버셜매니아', postCount: 73, commentCount: 95, content: '오사카 유니버셜 스튜디오는 완전 추천해요. 시간 가는 줄 모르고 즐겼습니다!', createDate: '2024. 11. 15' },
  ],
  [
    { imgUrl: testImage, nickname: '대륙여행자', postCount: 58, commentCount: 33, content: '중국 장가계의 장엄한 산맥을 보니 정말 감동했어요. 꼭 한 번 가보세요!', createDate: '2024. 11. 15' },
    { imgUrl: testImage2, nickname: '길거리탐험가', postCount: 29, commentCount: 21, content: '중국의 길거리 음식이 정말 다양하고 맛있었어요. 거리마다 새로운 음식들이 있어서 매일 놀랐어요.', createDate: '2024. 11. 15' },
  ]
];

export default comments;
