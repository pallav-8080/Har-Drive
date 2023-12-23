import * as React from 'react';
import UploadMenu from '../molecules/UploadMenu';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import '../../styles/SideBar.css'
import { FileUpload } from '@mui/icons-material';

interface SideBarProps {
    expanded: boolean;
  }

const SideBar = ({ expanded }: SideBarProps)  => {
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
    const [uploadMenuOpen, toggleUploadMenu] = React.useState<boolean>(false);
    const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);
    const [fileUploaderOpen, setFileUploaderOpen] = React.useState<boolean>(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    return (
      <div>
        <Toolbar />
      
          <IconButton className="upload_btn" onClick={(e: React.MouseEvent<HTMLElement>) => {
            setMenuAnchor(e.currentTarget)
            toggleUploadMenu(true)
          }}>
             <FileUpload />
             {expanded ? <p> Upload</p> : null }
          </IconButton>

        <Divider />
        <List>
          {['All Files', 'Shared', 'Recent' , 'Starred'].map((text, index) => (
            <ListItem key={text} disablePadding >
              <ListItemButton className='nav_item'>
                <ListItemIcon >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {expanded ? <ListItemText className="listItem" primary={text} /> : null}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <UploadMenu open={uploadMenuOpen} toggleMenu={toggleUploadMenu} anchorEl={menuAnchor}/>
      </div>
    );
}
export default SideBar;
  