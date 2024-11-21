import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Board.css";

function Board({ posts,boardType }) {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [startPage, setStartPage] = useState(1); // 시작 페이지
  const [endPage, setEndPage] = useState(3); // 끝 페이지
  const postsPerPage = 15; // 페이지당 게시글 수
  const pagesPerGroup = 3; // 한 번에 보여줄 페이지 버튼 수
  const totalPages = Math.ceil(posts.length / postsPerPage); // 전체 페이지 수
  const navigate = useNavigate();

   // 날짜순으로 오름차순 정렬
   const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  useEffect(() => {
    const newStartPage = Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1;
    const newEndPage = Math.min(newStartPage + pagesPerGroup - 1, totalPages);
    setStartPage(newStartPage);
    setEndPage(newEndPage);
  }, [currentPage, totalPages]);

  const currentPosts = sortedPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // 페이지 번호 변경
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 이전 페이지 그룹으로 이동
  const handlePrevPage = () => {
    if (startPage > 1) {
      setCurrentPage(startPage - 1);
    }
  };

  // 다음 페이지 그룹으로 이동
  const handleNextPage = () => {
    if (endPage < totalPages) {
      setCurrentPage(endPage + 1);
    }
  };

  // 게시글 클릭 시 상세 페이지로 이동
  const handlePostClick = (postId) => {
    const basePath = boardType === "tip" ? "/tip-board" : "/travel-board";
    navigate(`${basePath}/${postId}`);
  };
  const handleWriteClick = () => {
    const basePath = boardType === "tip" ? "/tipBoard" : "/travelBoard";
    navigate(`${basePath}/write`);
  };



  return (
    <div>
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
          {currentPosts.map((post, index) => {
             const isNewPost = new Date(post.date).toDateString() === new Date().toDateString(); // 오늘 날짜와 비교
             return(
            <tr key={post.id} onClick={() => handlePostClick(post.id)}>
              <td>{posts.length - (currentPage - 1) * postsPerPage - index}</td>
              <td>{post.location}</td>
              <td>
                {post.title}
                <i className="fa-solid fa-comment"></i>
                    {post.comments}
                    <i className="fa-solid fa-thumbs-up"></i>
                    {post.recommendations}
                    {isNewPost && (
                      <i style={{ color: 'red', marginLeft: '5px' }}>New</i>)}
              </td>
              <td>{post.date}</td>
              <td>{post.author}</td>
              <td>{post.views}</td>
            </tr>
             )
          })}
        </tbody>
      </table>

          <button className="write-post-btn" onClick={handleWriteClick}>게시물 작성</button>

      {/* 페이지네이션 */}
      <div className="pagination">
        <button
          className="prev-page"
          onClick={handlePrevPage}
          disabled={startPage === 1}
        >
        </button>
        {[...Array(endPage - startPage + 1)].map((_, index) => {
          const pageNumber = startPage + index;
          return (
            <button
              key={pageNumber}
              className={currentPage === pageNumber ? "active" : ""}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="next-page"
          onClick={handleNextPage}
          disabled={endPage === totalPages}
        >
        </button>
      </div>
    </div>
  );
}

export default Board;
