import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import '../../styles/FileUpload.css'
import { FileUploader as ReactFileUploader } from "react-drag-drop-files";
import { FileUploadContext, FileUplodContextInterface } from '../../FileUploaderContext';
import FilesList from '../organisms/FilesList'

interface DraggableFileUploaderProps {
}
const DraggableFileUploader = ({}: DraggableFileUploaderProps)  => {
    const [filesToUpload, setFilesToUpload] = React.useState<any>([])
    const [enableUploader, setEnableUploader] = React.useState<boolean>(false);
    const {roomData, updateRoomData} = React.useContext(FileUploadContext);

    console.log("room******" ,roomData);
    const handleFilesChange = (file:File) => {
      // Update chosen files
      let newFilesList = [...roomData.filesList, file];
      let newRoomData = {...roomData};
      newRoomData.filesList = newFilesList;
      
      updateRoomData(newRoomData);
      // setFilesToUpload([ ...files ])
    };

  const uploadFilesToServer = () => {
    // TODO : Create a form and post it to server
  };

  const fileTypes = ['pdf', 'svg', 'png', 'jpg', 'css', 'js', 'html', 'csv', 'txt', 'doc', 'docx'];

  return (
    <div className='file_upload_container' id="cont">
         <ReactFileUploader 
          label="Upload or drag a file right here" 
          handleChange={(file:any) => handleFilesChange(file)} 
          name="hdrive_file_uploader"
          disabled={!enableUploader}
          onDraggingStateChange={(dragging:boolean) => setEnableUploader(dragging)}
          children={
              <div id="dropBox" className="drop_box">
                  <FilesList roomData={roomData} updateRoomData={updateRoomData}/>
              </div>
          }
          dropMessageStyle={{'marginLeft': '-100%', 'height': `${document.getElementById("dropBox")?.scrollHeight}px`}}
          types={fileTypes} />

    </div>
  )
}
export default DraggableFileUploader