import ListItemIcon from '@mui/material/ListItemIcon';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Logout from '@mui/icons-material/Logout';
import * as React from 'react';
import { MenuItem } from '@mui/material';

function LoginMenu ({ handleClose, setAnchorEl }) {
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          로그아웃
      </MenuItem>

    </React.Fragment>

  )

}

export default LoginMenu;
