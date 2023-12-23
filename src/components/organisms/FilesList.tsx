import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ReactComponent as PDFIcon } from '../../icons/pdf.svg';
import { ReactComponent as XSLIcon } from '../../icons/xsl.svg';
import { ReactComponent as DOCIcon } from '../../icons/docs.svg';
import { ReactComponent as ImageIcon } from '../../icons/png.svg';
import { ReactComponent as FileIcon } from '../../icons/file.svg';

import PDFpre from '../../icons/pdf_preview.png';
import { addDragEventHandlersToFile, addDropEventHandlersToFolder } from '../../utils/DragAndDropEventListners';
import FolderIcon from '@mui/icons-material/Folder';
import '../../styles/FileList.css'
import { FileUplodContextInterface } from '../../FileUploaderContext';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import FilePreViewer from '../molecules/FilePreViewer';
import FileActionMenu from '../molecules/FileActionMenu';

interface FilesListProps {
    roomData: FileUplodContextInterface;
    updateRoomData: any
}
const renderFolders = (roomData:FileUplodContextInterface, dragTarget: string | null, updateRoomData: any, toggleActionMenu: any, setMenuAnchor:any) => {
  const foldersList = roomData.foldersList || [];
  return (
    foldersList && foldersList.map((folder) => {
      
     const folderElem = 
        <Chip
          className='folder_chip'
          icon={<FolderIcon/>}
          label={
              folder.name
          }
          id={folder.name}
          key={folder.name}
          deleteIcon={<MoreVertIcon id={folder.name}/>}
          onClick={() => renderFolder(folder.name, roomData, updateRoomData)}
          onDelete={(e) => {
            setMenuAnchor(e.currentTarget)
            toggleActionMenu(true)}
          }/>
      addDropEventHandlersToFolder(folder.name, dragTarget, roomData, updateRoomData);
      return folderElem
    }))
};
const renderFolder = (name: string, roomData: FileUplodContextInterface, updateRoomData:any) => {
  console.log("vieww", name);
  const targetFolder = roomData.foldersList.filter(f => f.name === name)[0];
  //adding parent room to children room to preserver context => helps in navigate back
  if(roomData.path === "." && !targetFolder.foldersList.filter((f:any) => f.path === ".").length){
    targetFolder.foldersList = [...targetFolder.foldersList, roomData];
  }
  updateRoomData(targetFolder);
}
const renderFiles = (filesList:File[], setPreviewFile: React.Dispatch<React.SetStateAction<File | null>>, setDragTarget : React.Dispatch<React.SetStateAction<string | null>>, toggleActionMenu:any, setMenuAnchor:any) => {
  console.log("fff", filesList)
  const handleFileClick = (e:any) => {
    const fileName = e.currentTarget.id;
    const file = filesList.filter(f => f.name === fileName)[0];
    setPreviewFile(file);
  }
  return (
    filesList && filesList.map((file) => {
      let fileTypeIcon;
      switch(file.type){
        case "application/pdf":
          fileTypeIcon = <PDFIcon height={24}/>;
          break;
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          fileTypeIcon = <DOCIcon height={24}/>;
          break;
        case "image/jpeg":
          fileTypeIcon = <ImageIcon height={24}/>;
          break;
        case "image/png":
            fileTypeIcon = <ImageIcon height={24}/>;
            break;
        case "image/jpg":
          fileTypeIcon = <ImageIcon height={24}/>;
          break;
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          fileTypeIcon = <XSLIcon height={24}/>;
          break;
        default:
          fileTypeIcon = <FileIcon height={24}/>;
          break;
      }
      const t = 
        <Grid draggable="true" item xs={4} md={2} className='file_box' id={file.name} onClick={handleFileClick}>
          <Chip
            className='file_chip'
            icon={fileTypeIcon}
            label={file.name}
            id={file.name}
            deleteIcon={<MoreVertIcon aria-label="file" id={file.name}/>}
            onDelete={(e) => {
              setMenuAnchor(e.currentTarget)
              toggleActionMenu(true)}
            }
          />
          <div id={file.name}>
            <img src={PDFpre} className='preview' draggable="false" alt={file.name} />
          </div>
        </Grid>;
      addDragEventHandlersToFile(file.name, setDragTarget);
      return t;
    })
  );
};

const FilesList = ({ roomData, updateRoomData }: FilesListProps)  => {
    const [previewFile, setPreviewFile] = React.useState<File | null>(null);
    const [dragTarget, setDragTarget] = React.useState<string | null>(null);
    const [filesList, setFilesList] = React.useState<File[] | null>(null);
    const [actionMenuOpen, toggleActionMenu] = React.useState<boolean>(false);
    const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);

    React.useEffect(() => {
      setFilesList(roomData.filesList);
    },[roomData])
    return (
      <>
      <Grid container spacing={2}>
        <h3>Folders</h3>
         <Grid container spacing={2}>
            {renderFolders(roomData, dragTarget, updateRoomData, toggleActionMenu, setMenuAnchor)}
          </Grid>
          <h3 className='h3'>Files</h3>
          <Grid container spacing={2} pb="5%">
            {renderFiles(filesList || [], setPreviewFile, setDragTarget, toggleActionMenu, setMenuAnchor)}
          </Grid>
      </Grid>
      <FilePreViewer file={previewFile} closePreview={() => setPreviewFile(null)}/>
      <FileActionMenu open={actionMenuOpen} toggleMenu={toggleActionMenu} anchorEl={menuAnchor} roomData={roomData} updateRoomData={updateRoomData} viewFile={(f:File | null) => setPreviewFile(f)}/>

      </>


    );
}
export default FilesList;
  