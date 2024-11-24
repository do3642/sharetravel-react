import axiosInstance from "../axios/axiosInstance";
import "../styles/Comments.css";
import React, { useState, useEffect } from "react";
import timeFormat from "./date";

function Comments({user,postId}) {
    const [showPopup, setShowPopup] = useState(false);
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState();
    const [deletePopup, setDeletePopup] = useState(false); // 삭제 확인 팝업 상태
    const [refreshComment, setRefreshComment] = useState(0);
    const [deleteCommentId, setDeleteCommentId] = useState(0);

    //비로그인시 제한
    if(!user){
        user = {id: -1};
    }
    const commentList = () =>{
        axiosInstance.post(`/travel-board/${postId}/comments`)
        .then(response => {
             // 댓글 데이터 뽑아옴
            setComments(response.data)
        })
        .catch(error => {
            console.log(error);
        });
    }
    useEffect(()=>{
        commentList();
    },[])

    // 댓글 - 보내는 데이터
    const [data, setData] = useState({
        content:'',
        travelBoardId: postId,
        memberId: user.id
        });
        
         // content를 업데이트하는 함수
        const handleContentChange = (e) => {
            setContent(e.target.value);
            setData(data => ({
            ...data, // 기존 data 유지
            content: e.target.value
            }));
        };

     // 댓글 등록 버튼 클릭
     const handleButtonClick = () => {
            setShowPopup(true); // 팝업 표시
            setTimeout(() => setShowPopup(false), 2000); // 2초 후 팝업 숨기기
            axiosInstance.post(`/travel-board/${postId}/comment`,data)
            .then(response => {
                commentList();
            })
            .catch(error => {
                console.log(error);
            })

            setContent('');
    };
       // 댓글 삭제 버튼 클릭
       const handleDeleteClick = (id) => {
        setDeleteCommentId(id);
        setDeletePopup(true); // 삭제 팝업 표시

        console.log(id)
        console.log(deleteCommentId);
    };

    // 댓글 삭제요청
    const handleDeleteComment = (commentId) => {
        axiosInstance.delete(`/travel-board/${postId}/deleteComments/${commentId}`)
            .then(response => {
                console.log(response.data); // 성공 메시지
                commentList();
            })
            .catch(error => {
                console.error('댓글 삭제 실패', error.response.data);
            });
    };
    const confirmDelete = () => {
        console.log(deleteCommentId);
        handleDeleteComment(deleteCommentId);
        setDeletePopup(false); // 팝업 닫기
    };

     // 삭제 취소 처리
     const cancelDelete = () => {
        setDeletePopup(false); // 팝업 닫기
    };

        // 추천 버튼 클릭
        const handleLikeClick = (id) => {
          
        };

         // 비추천 버튼 클릭
        const handleDislikeClick = (id) => {

         };



    return (
        <div>
            <div className="commentTitle">
                <h3>방문댓글</h3>
                <span>총 댓글: {comments.length}개</span>
            </div>
            <div className="commentInput">
                        <textarea
                            type="text"
                            placeholder="댓글을 입력하세요."
                            value={content}
                            onChange={(value) => handleContentChange(value)}                             
                        />
                    <button onClick={handleButtonClick}>등록</button>
                    
                    
                </div>

            <div className="commentList">
                {comments.map((comment,i) => (
                    <div className="commentBox">
                    <div key={comment.id} className="commentBox">
                        <div className="commentUser">
                            <div className="commentUserTop">
                                <div className="leftImage">
                                    {/* <i className="fa-solid fa-circle-user"></i> */}
                                    <img src={process.env.PUBLIC_URL + '/img/jjang.webp'} />
                            </div>
                            
                            {/* 회원가입된 아이디를 닉네임으로 표시 */}
                                <div className="commentId">{comment.member.nickname}</div>
                                    <div className="dateAndDelete">
                                        <div className="rightDate">
                                            {timeFormat(comment)}
                                    </div>

                                    
                                    <button
                                        className="deleteButton"
                                        onClick={() => handleDeleteClick(comment.id)}
                                        aria-label="댓글 삭제"
                                    > 
                                    X 
                                    </button>
                                    
                                    
                                    
                                    </div>

                                    
                                   
                            </div>
                        
                        </div>
                        
                        
                    </div>
                            
                    <div className="commentImage"></div>
                    <div className="commentContent">{comment.content}</div>
                    
                    <div className="commentBtnBox">
                    <div className="leftIcon" onClick={() => handleLikeClick(comment.id)}> <i className="fa-solid fa-thumbs-up"></i>{comment.likes}</div>
                    <div className="rightIcon" onClick={() => handleDislikeClick(comment.id)}> <i class="fa-solid fa-thumbs-down"></i>{comment.dislikes}</div>
                </div>
                  
                    </div>

                    
                    
                ))}


                    {showPopup && (
                    <div className="popup">
                     댓글이 등록되었습니다!
                    </div>
                )}
                 {/* 삭제 확인 팝업 */}
            {deletePopup && (
                <div className="deletePopup">
                    <div className="deletePopupContent">
                        <p>댓글을 삭제하시겠습니까?</p>
                        <button onClick={confirmDelete}>확인</button>
                        <button onClick={cancelDelete}>취소</button>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}


export default Comments;