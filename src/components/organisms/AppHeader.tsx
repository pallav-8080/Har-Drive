import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import '../../styles/Appbar.css';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

interface AppHeaderProps {
  sideBarExpanded: boolean;
  toggleSideBar: (a: boolean) => void;
}

const AppHeader = ({ sideBarExpanded, toggleSideBar }: AppHeaderProps) => {
  const [openUserMenu, toggleUserMenu] = React.useState(false);

  const handleMenu = () => {
    toggleUserMenu(!openUserMenu)
  }
  const openMyAccount = () => {
    alert('My account page coming soon!')
  }
  const handleLogout = () => {
    alert(0);
  }
  return (
    <Box sx={{ flexGrow: 1 }} style={{position:"sticky", display:"inline-block", top: 0, zIndex: 1000}}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon className="menu_icon"  onClick={() => toggleSideBar(!sideBarExpanded)}/>
            <div className='logo'><CloudSyncIcon fontSize='large'/> HarDrive</div>
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Harvey Data Room
          </Typography>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle fontSize='large'/>
              </IconButton>          
              <Menu
                id="menu-appbar"
                sx={{ mt: '30px' }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openUserMenu}
                onClose={() => toggleUserMenu(false)}
              >
                <MenuItem onClick={openMyAccount}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default AppHeader;
