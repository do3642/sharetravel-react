import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LoginIcon from '@mui/icons-material/Login';
import * as React from 'react';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LogoutMenu ({ handleClose}) {

  const navigate = useNavigate()

 const handleNav = (param) => {
  navigate(`/${param}`);
};
  


  return (
    <React.Fragment>
      
      <MenuItem onClick={()=>{
        handleClose();
        handleNav("login");
      }}>
          <ListItemIcon>
            <LoginIcon fontSize="small" />
          </ListItemIcon>
          로그인
        </MenuItem>

        <MenuItem onClick={() =>{
          handleClose();
          handleNav("register");
        }}>
          <ListItemIcon>
            <PersonAddAlt1Icon fontSize="small" />
          </ListItemIcon>
          회원가입
        </MenuItem>

    </React.Fragment>
  )
}

export default LogoutMenu;