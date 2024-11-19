import React from "react";
import allTips from "../data/tipBoardData.js"; // 더미 데이터
import Board from "./Board.js";
import "../styles/TipBoard.css";

function TipBoard() {
  return (
    <section className="tip-board travel-board">
      {/* 게시판 타이틀 */}
      <div className="board-title">
        <h2>여행 팁 게시판</h2>
        <hr />
      </div>

      {/* Board 컴포넌트 호출 */}
      <Board posts={allTips} />
    </section>
  );
}

export default TipBoard;
