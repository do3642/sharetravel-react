import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import allPosts from "../data/travelBoardData.js";
import "../styles/TravelBoard.css";
import axios from "axios";


// post를 pageable로 가져올때 15개씩 뽑아오기
// 변수는 allPosts로 담기
// 페이지버튼도 받아올때 계산해서넣기



function TravelBoard() {
  const [selectedCategory, setSelectedCategory] = useState("국내"); // 기본 카테고리
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [postsPerPage] = useState(15); // 페이지당 게시글 수
  const [posts, setPosts] = useState([]); // 게시글 목록
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수
  const [totalElements, setTotalElements] = useState(0); // 전체 게시글 수
  const [startPage, setStartPage] = useState(1); // 시작 페이지 번호
  const [endPage, setEndPage] = useState(3); // 끝 페이지 번호
  const [prev, setPrev] = useState(false); // 이전 버튼 활성화 여부
  const [next, setNext] = useState(false); // 다음 버튼 활성화 여부

 

  const navigate = useNavigate();

  // 카테고리별 게시글 데이터를 가져오는 함수
  // const fetchPosts = async (pageNumber) => {
  //   try {
  //     const response = await axios.get(`/travlBoard/posts`, {
  //       params: {
  //         page: pageNumber - 1, // Spring은 0-based index 사용
  //         size: postsPerPage,
  //         category: selectedCategory
  //       }
  //     });
  //     const data = response.data;

  //     // 페이지 데이터 업데이트
  //     setPosts(data.page.content); // 게시글 목록
  //     setTotalPages(data.totalPages); // 전체 페이지 수
  //     setTotalElements(data.totalElements); // 전체 게시글 수
  //     setStartPage(data.startPage); // 시작 페이지 번호
  //     setEndPage(data.endPage); // 끝 페이지 번호
  //     setPrev(data.prev); // 이전 버튼 활성화 여부
  //     setNext(data.next); // 다음 버튼 활성화 여부
  //   } catch (error) {
  //     console.error("게시글 데이터를 가져오는 데 실패했습니다.", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPosts(currentPage); // 컴포넌트가 처음 렌더링될 때 게시글을 가져옴
  // }, [currentPage, selectedCategory]); // 페이지나 카테고리가 변경되면 다시 호출

  // 페이지 번호 변경
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 게시글 작성 페이지로 이동
  const handleWritePost = () => {
    navigate("/write-post");
  };
   // 게시글 클릭 시 상세 페이지로 이동
   const handlePostClick = (postId) => {
    navigate(`/travel-board/${postId}`); // 해당 게시글의 ID를 URL에 포함시켜 상세 페이지로 이동
  };

  // 이전 페이지로 이동
  const handlePrevPage = () => {
    if (prev) {
      setCurrentPage(startPage - 1); // 이전 페이지로 이동
    }
  };

  // 다음 페이지로 이동
  const handleNextPage = () => {
    if (next) {
      setCurrentPage(endPage + 1); // 다음 페이지로 이동
    }
  };

  return (
    <section className="travel-board">
      {/* 카테고리 버튼 */}
      <div className="category-tabs">
        <button
          className={selectedCategory === "국내" ? "active" : ""}
          onClick={() => setSelectedCategory("국내")}
        >
          국내
        </button>
        <button
          className={selectedCategory === "국외" ? "active" : ""}
          onClick={() => setSelectedCategory("국외")}
        >
          국외
        </button>
      </div>

      {/* 게시판 타이틀 */}
      <div className="board-title">
        <h2>{selectedCategory} 게시판</h2>
        <hr />
      </div>

      {/* 게시글 리스트 */}
      <table className="post-table">
        <thead>
          <tr>
            <th>글번호</th>
            <th>여행지</th>
            <th>제목</th>
            <th>작성일</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {/* {posts.map((post, index) => ( */}
          {allPosts.map((post, index) => {
          const isNewPost = new Date(post.date).toDateString() === new Date().toDateString(); // 오늘 날짜와 비교

          return (
            <tr key={post.id} onClick={() => handlePostClick(post.id)}>
              {/* 최신글이 1번이 되도록 수정 */}
              <td>{totalElements - (currentPage - 1) * postsPerPage - index}</td>
              <td>{post.location}</td>
              <td>
                {post.title}
                  <i className="fa-solid fa-comment"></i>
                   {post.comments}
                   <i className="fa-solid fa-thumbs-up"></i>
                   {post.recommendations}
                   {/* 아래는 최신글에 표시될 i태그 */}
                {isNewPost && ( 
                  <i style={{ color: 'red', marginLeft: '5px' }}>New</i>
                )}
              </td>
              <td>{post.date}</td>
              <td>{post.author}</td>
              <td>{post.views}</td>
            </tr>
          );
        })}
        </tbody>
      </table>

      {/* 게시글 작성 버튼 */}
      <button className="write-post-btn" onClick={handleWritePost}>
        게시글 작성
      </button>

      {/* 페이지 이동 버튼 */}
      <div className="pagination">
        {/* 이전 페이지 버튼 */}
        <button className="prev-page" onClick={handlePrevPage} disabled={!prev}>
        </button>

        {/* 페이지 번호 버튼 */}
        {[...Array(endPage - startPage + 1)].map((_, index) => {
          const pageNum = startPage + index;
          return (
            <button
              key={pageNum}
              className={currentPage === pageNum ? "active" : ""}
              onClick={() => paginate(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}

        {/* 다음 페이지 버튼 */}
        <button className="next-page" onClick={handleNextPage} disabled={!next}>
        </button>
      </div>
    </section>
  );
}

export default TravelBoard;