import * as React from 'react';
import { FileUploadContext, FileUplodContextInterface } from '../../FileUploaderContext';

interface FolderUploaderProps {
    toggleUploadMenu: (a: boolean) => void;
}

const FolderUploader = ({toggleUploadMenu}: FolderUploaderProps) => {
    const {roomData, updateRoomData} = React.useContext(FileUploadContext);
    console.log(roomData);

    const handleFolderUpload = (files:FileList) => {
        console.log(roomData)
        // Update chosen files
        if(files.length){
            const folderPath = files.item(0)?.webkitRelativePath;
            const folderName =  folderPath?.split('/')[0] || "";
            const dateTime = new Date();

            let folderObj:FileUplodContextInterface = {
                name: folderName,
                dateAdded: dateTime,
                filesList: Array.from(files),
                foldersList: [],
                currentDirectory: '.',
                path: roomData.currentDirectory + '/' + folderName
            };
            let newFoldersList = [...roomData.foldersList || [], folderObj];
            let newRoomData = { ...roomData};
            newRoomData.foldersList = newFoldersList;
            updateRoomData(newRoomData);
            // console.log('uuuu', roomData)
            // roomData.foldersList = [...newFoldersList];
        }
        toggleUploadMenu(false);
    }
        return (
        <>
            {/* @ts-expect-error */}
            <input className="folder_upload_btn" directory="" webkitdirectory="" type="file" onChange={(e) => handleFolderUpload(e.currentTarget.files)}/>
        </>
    )
};
export default FolderUploader;