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


  import React, { useState, useEffect } from "react";
import allPosts from "../data/travelBoardData.js"; // 더미 데이터
import Board from "./Board.js";
import "../styles/TravelBoard.css";

function TravelBoard() {
  const [selectedCategory, setSelectedCategory] = useState("국내"); // 기본 카테고리
  const [filteredPosts, setFilteredPosts] = useState([]); // 필터링된 게시글 데이터

  // 선택한 카테고리에 따라 게시글 필터링
  useEffect(() => {
    const filtered = allPosts.filter((post) => post.category === selectedCategory);
    setFilteredPosts(filtered);
  }, [selectedCategory]);

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

      {/* Board 컴포넌트 호출 */}
      <Board posts={filteredPosts} boardType={"travel"} />
    </section>
  );
}

export default TravelBoard;
