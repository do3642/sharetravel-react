import { useParams } from 'react-router-dom';
import allPosts from '../data/travelBoardData.js';
import '../styles/TravelBdDetail.css';
import userProfile from '../assets/userProfile/test2.png';
import LikeButton from './LikeButton.js';

function TravelBdDetail() {
  const { postId } = useParams();
  const post = allPosts.find((post) => post.id === parseInt(postId, 10));

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  


  return (
    <section id="travel-bd-detail">
      <article className="post-content">
        <h2>여행정보</h2>
        <span>{post.location}</span>
        <h3>{post.title}</h3>
       
       
        <div className="post-meta">
          <span><img src={userProfile} alt='게시자 프로필'></img></span>
          <div className='post-user-box'>
            <div className='post-author'>
              <span>{post.author}</span>
            </div>
            <div className='post-data'>
              <span><i className="fa-solid fa-comment-dots"></i> {post.comments}</span>
              <span><i className="fa-solid fa-heart" style={{color: "#fc9797"}} ></i> {post.recommendations}</span>
              <span><i className="fas fa-eye"></i> {post.views}</span>
              <span><i className="fa-regular fa-clock"></i> {post.date}</span>
            </div>
          </div>
          <div className='post-controll-icon'>
            <i className="fa-solid fa-ellipsis-vertical"></i>
            <div className='post-controller'>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
        </div>
      <hr></hr>

        <div className="post-body">
           {/* 랜덤 이미지 추가 */}
           <p> {post.image && (
          <div className="post-image">
            <img src={post.image} alt={post.title} />
          </div>
          )}</p>
          {/* 게시글 내용 추가 */}
          <p className='post-con'>{post.content}</p> 

          {/* <div className='like-btn'>
            <button>
              <i className="fa-solid fa-heart"></i> 
               추천
              </button>
          </div> */}
          <LikeButton/>
        </div>
      </article>


      <section className="comments-section">
        <h3>댓글</h3>
        <div className="comment">
          <p><strong>사용자1</strong></p>
          <p>정말 유용한 정보네요! 감사합니다.</p>
        </div>
        <div className="comment">
          <p><strong>사용자2</strong></p>
          <p>여행 계획할 때 참고하겠습니다.</p>
        </div>
        {/* 추가 댓글들을 여기 추가 */}
      </section>
    </section>
  );
}

export default TravelBdDetail;
