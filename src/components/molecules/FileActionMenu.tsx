import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import '../../styles/UploadMenu.css'
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FileUplodContextInterface } from '../../FileUploaderContext';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

interface FileActionMenuProps {
    open: boolean;
    toggleMenu: (a: boolean) => void;
    anchorEl: null | HTMLElement;
    roomData: FileUplodContextInterface;
    updateRoomData: any;
    viewFile: any
  }

const FileActionMenu = ({ open, toggleMenu, anchorEl, roomData, updateRoomData, viewFile }: FileActionMenuProps)  => {
  const isFile = anchorEl?.ariaLabel === "file";

  const [showToaster, setShowToaster] = React.useState<boolean>(false);
  const [popText,setPopText] = React.useState<string>('Please use the table view to edit !');

    return (
      <>
      <Menu
        id="file_action"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() =>toggleMenu(false)}
      >
          <MenuItem className="upload_menu_item" onClick={() => viewFiles(anchorEl, isFile, roomData, updateRoomData, viewFile, toggleMenu)}>
            <PageviewIcon />
            <span>View</span>
            </MenuItem>
          <MenuItem className="upload_menu_item" onClick={() => editFile(anchorEl, isFile, showToaster, setPopText, setShowToaster, toggleMenu)}> 
            <EditIcon />
            <span>Edit</span>
          </MenuItem>
          <MenuItem className="upload_menu_item" onClick={() => deleteFile(anchorEl, isFile, roomData, updateRoomData, setPopText, setShowToaster, toggleMenu)}>
            <DeleteIcon/>
            <span>Delete</span>
            </MenuItem>
      </Menu>
     <Snackbar open={showToaster} autoHideDuration={4000} onClose={() => setShowToaster(false)}>
          <Alert onClose={() => setShowToaster(false)} severity="success" sx={{ width: '100%' }}>
            {popText}
          </Alert>
      </Snackbar>
      </>
    );
}
const viewFiles = (anchorEl:HTMLElement | null, isFile: boolean, roomData: FileUplodContextInterface, updateRoomData:any, viewFile:any, toggleMenu:any) => {
  const targetNmae = anchorEl?.id;
  
  if(isFile){
    const file = roomData.filesList.filter(f => f.name == targetNmae)[0];
    console.log(file)
    viewFile(file);
  } else {
    const targetFolder = roomData.foldersList.filter(f => f.name === targetNmae)[0];
    //adding parent room to children room to preserver context => helps in navigate back
    if(roomData.path === "." && !targetFolder.foldersList.filter((f:any) => f.path === ".").length){
      targetFolder.foldersList = [...targetFolder.foldersList, roomData];
    }
    updateRoomData(targetFolder);
  }
  toggleMenu(false);
};
const editFile = (anchorEl:HTMLElement | null, isFile: boolean, showToaster: boolean, setPopText:any, setShowToaster:any,  toggleMenu:any) => {
    toggleMenu(false);
    setPopText('Please use the table view to edit !')
    setShowToaster(true);
};
const deleteFile = (anchorEl:HTMLElement | null, isFile: boolean, roomData: FileUplodContextInterface, updateRoomData:any, setPopText:any, setShowToaster:any,  toggleMenu:any) => {
  const file = anchorEl?.id;
  let filteredResults;
  let newRoomData = {...roomData};

  if(isFile){
    filteredResults = roomData.filesList.filter(f => f.name !== file);
    newRoomData.filesList = filteredResults;
  } else {
    filteredResults = roomData.foldersList.filter(f => f.name !== file);
    newRoomData.foldersList = filteredResults;
  };
  toggleMenu(false);
  setPopText('File deleted successfully')
  setShowToaster(true);
  updateRoomData(newRoomData)
  console.log(anchorEl);
}
export default FileActionMenu;