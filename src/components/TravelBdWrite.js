import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill 스타일 추가
import "../styles/TravelBdWrite.css";
import axiosInstance from "../axios/axiosInstance"; // axios 인스턴스 가져오기
import { useNavigate } from "react-router-dom";

function TravelBdWrite({user}) {
  const navigate = useNavigate();
  const quillRef = useRef();
  const [data, setData] = useState({
    category:'국내',
    location:'',
    title:'',
    content:'',
    member: user
    });



  const imgHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
      const file = input.files[0];
      
      if(file) {
        const formData = new FormData();
        formData.append('image', file);

        const response = await axiosInstance.post(`/test/img`, formData, {
          headers: {
            "Content-Type" : "multipart/form-data"
          }
        });

        const imgUrl = `${process.env.REACT_APP_SERVER_URL}${response.data}`;

        if(quillRef.current) {
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection();
          editor.insertEmbed(range.index, "image", imgUrl);
        }

      }

    }
  }

  
  const onChangeHandler = (e) => {
    const targetName = e.target.name;
    setData({
    ...data,
    [targetName] : e.target.value
    })
 
  }
  // content를 업데이트하는 함수
  const handleContentChange = (newContent) => {
    setData(prevData => ({
      ...prevData, // 기존 data 유지
      content: newContent // content만 업데이트
    }));
  };

  console.log(data.content)




  // ReactQuill 툴바 설정 (이미지 업로드 기능 포함)
  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image']
      ],
      handlers : {
        image: imgHandler
      }
    }
  }), []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axiosInstance.post("/travelBoard/posts", data)
    .then(response => {
      alert("게시물 등록 성공")
      navigate('/')
      }).catch(error => {
      console.log(error)
      })
     
  
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
              name="category"
              value={data.category}
              onChange={onChangeHandler}
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
              name="location"
              type="text"
              value={data.location}
              onChange={onChangeHandler}
              placeholder="예: 서울, 부산, 일본, 베트남"
              className="form-control"
            />
          </div>

          {/* 제목 */}
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              id="title"
              name="title"
              type="text"
              value={data.title}
              onChange={onChangeHandler}
              placeholder="제목을 입력하세요"
              className="form-control"
            />
          </div>

          {/* 내용 (ReactQuill 사용) */}
          <div className="form-group">
            <label htmlFor="content">내용</label>
            <ReactQuill
              ref={quillRef}
              value={data.content}
              onChange={(value) => handleContentChange(value)} // content 변경 시 handleContentChange 호출
              modules={quillModules}
              theme="snow"
              placeholder="내용을 입력하세요"
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
