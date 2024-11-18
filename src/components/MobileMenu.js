import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';

export default function DrawerMobileNavigation({ open, setOpen, isAuth }) {

  const isSmallScreen = useMediaQuery('(max-width: 800px)')
  const isScreen = useMediaQuery('(min-width: 800px)')

  return (
    <React.Fragment>
      <IconButton className='nav-hamburger' color="neutral" sx={{mr:2}} onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      {isSmallScreen && (
        <Drawer open={open} onClose={() => setOpen(false)} anchor='right'>
          <Box
            sx={{
              display: 'flex',
              gap: 0.5,
              mr: 'auto',
              mt: 1,
              ml: 2,
            }}
          >
            <Typography
              component="label"
              htmlFor="close-icon"
              sx={{ fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer' }}
            >
            </Typography>
            <ModalClose id="close-icon" sx={{ position: 'initial' }} />
          </Box>
          <Input
            size="sm"
            placeholder="검색"
            variant="plain"
            endDecorator={<Search />}
            slotProps={{
              input: {
                'aria-label': 'Search anything',
              },
            }}
            sx={{
              m: 3,
              borderRadius: 0,
              borderBottom: '2px solid',
              borderColor: 'neutral.outlinedBorder',
              '&:hover': {
                borderColor: 'neutral.outlinedHoverBorder',
              },
              '&::before': {
                border: '1px solid var(--Input-focusedHighlight)',
                transform: 'scaleX(0)',
                left: 0,
                right: 0,
                bottom: '-2px',
                top: 'unset',
                transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                borderRadius: 0,
              },
              '&:focus-within::before': {
                transform: 'scaleX(1)',
              },
            }}
          />
          <List
            size="lg"
            component="nav"
            sx={{
              flex: 'none',
              fontSize: 'xl',
              '& > div': { justifyContent: 'center' },
            }}
          >
            <ListItemButton>여행정보</ListItemButton>
            <ListItemButton>여행팁</ListItemButton>
            <ListItemButton>여행지 추천</ListItemButton>
            <ListItemButton>마켓</ListItemButton>
            {
              isAuth ? 
                <>
                  <ListItemButton>게시글 작성</ListItemButton>
                  <ListItemButton>찜한 상품</ListItemButton>
                  <ListItemButton>내 정보</ListItemButton>
                  <ListItemButton>로그아웃</ListItemButton>
                </> :
                <>
                  <ListItemButton>로그인</ListItemButton>
                  <ListItemButton>회원가입</ListItemButton>
                </>

            }
          </List>
        </Drawer>
      )}
    </React.Fragment>
  );
}
