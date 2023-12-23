import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import '../../styles/UploadMenu.css'
import FileUploader from './FileUploader';
import FolderUploader from './FolderUploader';

interface UploadMenuProps {
    open: boolean;
    toggleMenu: (a: boolean) => void;
    anchorEl: null | HTMLElement
  }
const openFileUploader = () => {

}
const UploadMenu = ({ open, toggleMenu, anchorEl }: UploadMenuProps)  => {
    return (
      <Menu
        id="menu-upload"
        sx={{ ml: '0px' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() =>toggleMenu(false)}
      >
          <MenuItem className="upload_menu_item"> 
            <UploadFileIcon />
            <span>File</span>
            <FileUploader toggleUploadMenu={toggleMenu} />
          </MenuItem>
          <MenuItem className="upload_menu_item">
            <DriveFolderUploadIcon />
            <span>Folder</span>
            <FolderUploader toggleUploadMenu={toggleMenu}/>
            </MenuItem>
      </Menu>
    );
}
export default UploadMenu;