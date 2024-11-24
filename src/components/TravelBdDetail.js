import { useNavigate, useParams } from 'react-router-dom';
import allPosts from '../data/travelBoardData.js';
import '../styles/TravelBdDetail.css';
import userProfile from '../assets/userProfile/test2.png';
import LikeButton from './LikeButton.js';
import { useEffect, useState } from 'react';
import axiosInstance from '../axios/axiosInstance.js';
import DeleteConfirmation from './DeleteConfirmation.js';
import Comments from './Comments.js';

function TravelBdDetail({user}) {
  const { postId } = useParams();
  const [allPost, setAllPost] = useState([]);
  const post = allPost.find((post) => post.id === parseInt(postId, 10));
  const navigate = useNavigate();


   // 게시물 리스트 받아옴
   useEffect(() => {
    axiosInstance.get('/travel-board')
      .then(response => {
        setAllPost(response.data);
      })
      .catch(error => {
        console.log(error);
      });

      
  }, []);

  // 조회수 증가
  useEffect(() => {
    const incrementViewCount = async () => {
        await axiosInstance.post(`/travel-board/${postId}/increment-view`);
    };
    incrementViewCount(); // 컴포넌트가 마운트될 때 조회수 증가
  }, [postId]); // postId가 변경될 때마다 실행
  
  // 추천 증가 함수
  const likeUp = (e) => {
    e.preventDefault();
    axiosInstance.post(`/travel-board/${postId}/like`)
      .then(response => {
        console.log("추천 증가 성공");
      })
      .catch(error => {
        console.error("추천 증가 실패", error);
      });
  };




  // user가 null 또는 undefined일 때 기본값 설정
  const safeUser = user || { id: -1 };

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }


  const handlerNav = () =>{
    navigate(`/travelBoard/write/${postId}`);
  }

  const deletePost = ()=>{
    
  }
  
// 시간 표시
const dateObj = new Date(post.createDate);
const year = dateObj.getFullYear();
const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작
const day = String(dateObj.getDate()).padStart(2, "0");
const hours = String(dateObj.getHours()).padStart(2, "0"); // 로컬 시간
const minutes = String(dateObj.getMinutes()).padStart(2, "0");
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;


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
              <span>{post.member.nickname}</span>
            </div>
            <div className='post-data'>
              <span><i className="fa-solid fa-comment-dots"></i> {post.comments.length}</span>
              <span><i className="fa-solid fa-heart" style={{color: "#fc9797"}} ></i> {post.recommendationCount}</span>
              <span><i className="fas fa-eye"></i> {post.viewCount}</span>
              <span><i className="fa-regular fa-clock"></i> {formattedDateTime}</span>
            </div>
          </div>
          {
            safeUser.id === post.member.id ?
            <div className='post-controll-icon'>
            <i className="fa-solid fa-ellipsis-vertical"></i>
            <div className='post-controller'>
              <button onClick={handlerNav}>수정</button>
              <DeleteConfirmation postId={postId}/>
            </div>
          </div>: <span></span>
          }
         
        </div>
      <hr></hr>
        <div className="post-body">
          {/* 게시글 내용 추가 */}
          <p dangerouslySetInnerHTML={{__html: post.content}}></p>
          <p className='post-con'></p> 

          {/* <div className='like-btn'>
            <button>
              <i className="fa-solid fa-heart"></i> 
               추천
              </button>
          </div> */}
          <div onClick={likeUp}>
            <LikeButton />
          </div>
        </div>
      </article>


      <section className="comments-section">
            <Comments user={user} postId={postId}/>
      </section>
    </section>
  );
}

export default TravelBdDetail;
