import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import '../../styles/FilePreViewer.css';

interface FileViewerProps {
    file: File | null,
    closePreview: () => void
}
const FileViewer = ({file, closePreview}: FileViewerProps) => {

    const [openDialog, setOpenDialog] = useState(true);
    if(file === null){
        return <></>
    };
    let docs = [];
    switch(file.type){
        case "image/png":
            docs.push({ uri: require("../../dummyFiles/dummyPNGpreview.png") });
            break;
        case "image/jpg":
            docs.push({ uri: require("../../dummyFiles/dummyJPGpreview.jpg") });
            break;
        case "image/jpeg":
            docs.push({ uri: require("../../dummyFiles/dummyJPEGpreview.jpeg") });
            break;
        case "video/mp4":
            docs.push({ uri: require("../../dummyFiles/dummyMP4preview.mp4") });
            break;
        case "application/pdf":
            docs.push({ uri: require("../../dummyFiles/dummyPDFpreview.pdf") });
            break;
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            docs.push({ uri: require("../../dummyFiles/dummyDOCXpreview.docx") });
            break;
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            docs.push({ uri: require("../../dummyFiles/dummyXLSXpreview.xlsx") });
            break;
        case "text/csv":
            docs.push({ uri: require("../../dummyFiles/dummyCSVpreview.csv") });
            break;
        default:                
    };
    
      return (
        <Dialog
            open={true}
            onClose={() => {
                setOpenDialog(false)
                closePreview()
            }}
        >
         <DocViewer className="preview_container" documents={docs} pluginRenderers={DocViewerRenderers} />
        </Dialog>
      )
    }
export default FileViewer;
