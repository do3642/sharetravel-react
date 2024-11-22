import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import axiosInstance from '../axios/axiosInstance.js';
import { useNavigate, useParams } from "react-router-dom";


function DeleteConfirmation({postId}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if(!postId){
    return <div>준비중...</div>
  }
  const handleDelete = () => {
    
    axiosInstance.delete(`/travel-board/${postId}`)
    .then(response => {
      alert(`게시물 삭제 완료!`)
      navigate('/travel-board')
    })

    handleClose();
  };


  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        삭제
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>삭제 확인</DialogTitle>
        <DialogContent>
          <DialogContentText>정말 삭제하시겠습니까?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handleDelete} color="secondary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteConfirmation;
