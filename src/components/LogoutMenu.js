import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LoginIcon from '@mui/icons-material/Login';
import * as React from 'react';
import { MenuItem } from '@mui/material';

function LogoutMenu ({ handleClose, setAnchorEl }) {
  return (
    <React.Fragment>
      
      <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LoginIcon fontSize="small" />
          </ListItemIcon>
          로그인
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAddAlt1Icon fontSize="small" />
          </ListItemIcon>
          회원가입
        </MenuItem>

    </React.Fragment>
  )
}

export default LogoutMenu;