import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SideBar from '../organisms/SideBar';
import AppHeader from '../organisms/AppHeader';
import TableView from '../molecules/TableView';
import FileUploader from '../molecules/DraggableFileUploader';
import { FileUplodContextInterface, FileUploadContext } from '../../FileUploaderContext';
import '../../styles/DriveHome.css';
import TableGridSwitch from '../molecules/TableGridSwitch';
import Breadcrumb from '../molecules/DirectoryNavigator';

const DriveHome = () => {
    const [loading, setLoading] = useState(false);
    const [openSideBar, toggleSideBar] = React.useState<boolean>(true);
    const [viewType, setViewType] = React.useState<'GRID' | 'TABLE'>('GRID');
    const {roomData, updateRoomData} = React.useContext(FileUploadContext);
   
    if (loading) {
        return (
            <CircularProgress />
        );
    }
    const handleDirectoryChange = (target:string) => {
        const targetDir = roomData.foldersList.filter((f:FileUplodContextInterface) => f.name === target);   
        if(targetDir.length){
            updateRoomData(targetDir[0]);
        }
    }
    return (
        <Box sx={{ flexGrow: 1 }} className="home">
            <AppHeader 
                sideBarExpanded = {openSideBar}
                toggleSideBar = {toggleSideBar}
            />
            <Grid container spacing={2}>
                <Grid item xs={openSideBar ? 4 : 2} md={openSideBar ? 2 : 1} className='side'>
                    <SideBar expanded={openSideBar}/>
                </Grid>
                <Grid item xs={openSideBar ? 8 : 10} md={openSideBar ? 10 : 11} sx={{ my: '1em', p:100 }} className='main'>
                    <Grid item md={12} className="view_switch">
                        <Breadcrumb currentPath={roomData.path} handleDirectoryChange={handleDirectoryChange}/>
                        <TableGridSwitch viewType={viewType} setViewType={setViewType} />
                    </Grid>
                    { viewType === 'TABLE' ? <TableView filesList={roomData.filesList}/> : <FileUploader/> }
                </Grid>
        </Grid>
      </Box>
    );
};

export default DriveHome;
