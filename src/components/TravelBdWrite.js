import React, { useState } from "react";
import "../styles/TravelBdWrite.css";

function TravelBdWrite() {
  const [category, setCategory] = useState("국내"); // 국내/국외 선택
  const [subCategory, setSubCategory] = useState(""); // 세부 카테고리 입력
  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubCategoryChange = (e) => {
    setSubCategory(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 게시물 저장 로직
    console.log({
      category,
      subCategory,
      title,
      content,
    });
    alert("게시물이 작성되었습니다!");
  };

  return (
    <section id="travel-bd-write">
      <div className="write-container">
        <h1>게시물 작성</h1>
        <form className="write-form" onSubmit={handleSubmit}>
          {/* 카테고리 */}
          <div className="form-group">
            <label htmlFor="category">카테고리</label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="form-control"
            >
              <option value="국내">국내</option>
              <option value="국외">국외</option>
            </select>
          </div>

          {/* 세부 카테고리 */}
          <div className="form-group">
            <label htmlFor="subCategory">여행지</label>
            <input
              id="subCategory"
              type="text"
              value={subCategory}
              onChange={handleSubCategoryChange}
              placeholder="예: 서울, 부산, 일본, 베트남"
              className="form-control"
            />
          </div>

          {/* 제목 */}
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="제목을 입력하세요"
              className="form-control"
            />
          </div>

          {/* 내용 */}
          <div className="form-group">
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              placeholder="내용을 입력하세요 (이미지는 삽입 버튼으로 추가)"
              className="form-control"
              rows="10"
            ></textarea>
          </div>

          {/* 이미지 업로드 버튼 */}
          <div className="form-group">
            <label htmlFor="image-upload">이미지 추가</label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="form-control-file"
              multiple
            />
          </div>

          {/* 제출 버튼 */}
          <button type="submit" className="submit-button">
            작성 완료
          </button>
        </form>
      </div>
    </section>
  );
}

export default TravelBdWrite;
