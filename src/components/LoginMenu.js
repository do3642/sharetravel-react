import ListItemIcon from '@mui/material/ListItemIcon';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Logout from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import * as React from 'react';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginMenu ({ handleClose, isAuth, setIsAuth}) {
  // LoginMenu 컴포넌트와 LogoutMenu 컴포넌트에 있는 handleClose는 AccountMenu에서 가져옴.
   
  const navigate = useNavigate();

  
  // 로그아웃
   const logout = () => {
    sessionStorage.removeItem('jwt');
    setIsAuth(false);
  }


  

  return(
    <React.Fragment>
      
      <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EditNoteIcon fontSize="small" />
          </ListItemIcon>
          게시글 작성
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ShoppingCartCheckoutIcon fontSize="small" />
          </ListItemIcon>
          찜한 상품
        </MenuItem>
        <MenuItem onClick={()=>{
          handleClose();
          navigate('/userInfo');
        }}>
          <ListItemIcon>
            <ManageAccountsIcon fontSize="small" />
          </ListItemIcon>
          내정보
      </MenuItem>
        <MenuItem onClick={()=>{
          handleClose();
          logout();
        }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          로그아웃
      </MenuItem>

    </React.Fragment>

  )

}

export default LoginMenu;
