import React, { useEffect, useState } from "react";
import allTips from "../data/tipBoardData.js"; // 더미 데이터
import Board from "./Board.js";
import "../styles/TipBoard.css";
import axiosInstance from "../axios/axiosInstance.js";

function TipBoard() {
  const [allPost, setAllPost] = useState([]);
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
  

  return (
    <section className="tip-board travel-board">
      {/* 게시판 타이틀 */}
      <div className="board-title">
        <h2>여행 팁 게시판</h2>
        <hr />
      </div>

      {/* Board 컴포넌트 호출 */}
      <Board posts={allPost} boardType={"tip"} />
    </section>
  );
}

export default TipBoard;
