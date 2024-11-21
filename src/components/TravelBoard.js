import React, { useState, useEffect } from "react";
import allPosts from "../data/travelBoardData.js"; // 더미 데이터
import Board from "./Board.js";
import "../styles/TravelBoard.css";
import axiosInstance from "../axios/axiosInstance"; // axios 인스턴스 가져오기

function TravelBoard() {
  const [selectedCategory, setSelectedCategory] = useState("국내"); // 기본 카테고리
  const [filteredPosts, setFilteredPosts] = useState([]); // 필터링된 게시글 데이터

  const [allPost, setAllPost] = useState([]);
  
  if(sessionStorage.getItem('jwt')){
    
  }


  // 게시물 리스트 받아옴
  useEffect(() => {
    axiosInstance.get('/travel-board')
      .then(response => {
        setAllPost(response.data); // 전체 데이터를 받아오면 상태를 업데이트
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // 선택한 카테고리에 따라 게시글 필터링
  useEffect(() => {
    const filterPosts = async () => {
      if (!allPost || allPost.length === 0) return; // 데이터가 없을 경우 안전하게 종료

      const filtered = allPost.filter((post) => post.category === selectedCategory); // content는 필요없음
      setFilteredPosts(filtered);
    };

    filterPosts(); // 비동기 함수 호출
  }, [selectedCategory, allPost]); // allPost가 변경될 때마다 필터링 실행


  
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
