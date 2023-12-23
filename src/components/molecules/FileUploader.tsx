import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import '../../styles/FileUpload.css'
import { FileUploader as ReactFileUploader } from "react-drag-drop-files";
import { width } from '@mui/system';
import { FileUploadContext } from '../../FileUploaderContext';

interface FileUploaderProps {
    toggleUploadMenu: (a: boolean) => void;
}
const FileUploader = ({ toggleUploadMenu }: FileUploaderProps)  => {
    const [filesToUpload, setFilesToUpload] = React.useState<any>([]);
    const {roomData, updateRoomData} = React.useContext(FileUploadContext);
    console.log(roomData);

  const handleFilesChange = (files:FileList) => {
    // Update chosen files
    console.log(files);
    let incomingFiles = Array.from(files);
    let newFilesList = [...roomData.filesList, ...incomingFiles];
    let newRoomData = {...roomData} ;
    newRoomData.filesList = newFilesList;
    toggleUploadMenu(false);
    updateRoomData(newRoomData)
    // setFilesToUpload([ ...files ])
  };

  const uploadFilesToServer = () => {
    // TODO : Create a form and post it to server
  }
  const fileTypes = ['pdf', 'svg', 'png', 'jpg', 'jpeg', 'mp4', 'csv', 'txt', 'docx', 'xlsx'];

  return (
    <div style={{"opacity": 0, "background": "blue", "position": "absolute", "left": 0, "maxHeight": "100%"}}>
         <ReactFileUploader 
         label="" 
         handleChange={(file:any) => handleFilesChange(file)} 
         name="hdrive_file_uploader_button"
         multiple
         types={fileTypes} />

      {/* <button onClick={uploadFiles}>Upload</button> */}
    </div>
  )
}
export default FileUploader