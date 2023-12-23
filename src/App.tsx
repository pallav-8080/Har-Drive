import React, { useState } from 'react';
import logo from './logo.svg';
import DriveHome from './components/pages/DriveHome';
import './App.css';
import { FileUploadContext, FileUplodContextInterface } from './FileUploaderContext';

function App() {

  const defaultRoomData:FileUplodContextInterface = {
    filesList: [],
    foldersList: [],
    dateAdded: new Date(),
    path:'.',
    name: 'My Drive',
    currentDirectory: '.',

  }
  const [roomData, setRoomData] = useState<FileUplodContextInterface>(defaultRoomData);
  const updateRoomData = (newData: FileUplodContextInterface) => {
    setRoomData(newData);
  }
  return (
    <div className="App">
      <FileUploadContext.Provider value={{roomData, updateRoomData}}>
        <DriveHome/>
      </FileUploadContext.Provider>
    </div>
  );
}

export default App;
