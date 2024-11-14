import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Logout from '@mui/icons-material/Logout';
import '../styles/AccountMenu.css'

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="내 프로필">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 45, height: 45 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              // 프로필 누르면 뜨는 창 관련 css
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1 
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <div className='menu-close' onClick={handleClose}>
          <b>x</b>
        </div>
        
        <MenuItem onClick={handleClose} sx={{pl: 8}}>
          <Avatar />
        </MenuItem>

        <div className='account-menu'> 
          닉네임님
        </div>
        <br />
        <Divider />
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
      </Menu>
    </React.Fragment>
  );
}
