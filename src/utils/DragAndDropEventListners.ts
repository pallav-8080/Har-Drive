import { FileUplodContextInterface } from '../FileUploaderContext';

export const addDropEventHandlersToFolder = (folderName: string, dragTarget: string | null, roomData: FileUplodContextInterface, updateRoomData: any) => {
  const target = document.getElementById(folderName);
  
  target?.addEventListener(
    "dragenter",
    (event) => {
      // highlight potential drop target when the draggable element enters it
      console.log("entrr")
      // if(!target.classList.contains("drop_zone"))
        target.classList.add("drop_zone")
    }
  );
  target?.addEventListener("dragleave", (event) => {
    // reset background of potential drop target when the draggable element leaves it
    target.classList.remove("drop_zone")
  });
  target?.addEventListener("dropover", (event) => {
    // prevent default to allow drop
    event.preventDefault();

  });
  target?.addEventListener("drop", (event) => {
    // highlight potential drop target when the draggable element enters it
    console.log("dropp" , dragTarget);
    target.classList.remove("drop_zone");
    if(dragTarget !== null)
      updateFilesList(dragTarget, folderName, roomData, updateRoomData);
  });
}
export const addDragEventHandlersToFile = (filename: string, setDragTarget: React.Dispatch<React.SetStateAction<string | null>>) => {
    const target = document.getElementById(filename);

    target?.addEventListener("dragstart", (event) => {
      setDragTarget(filename)
    });
    target?.addEventListener("touchmove", (event) => {    
      console.log("drggg", filename);
      setDragTarget(filename)
    });
    target?.addEventListener("touchend", (event) => {    
      console.log("enddd", filename);
    });
};

const updateFilesList = (srcName: string, targetName: string, roomData: FileUplodContextInterface, updateRoomData: any) => {
  let srcFile = roomData.filesList.filter(f => f.name === srcName)[0];
  let targetFolder = roomData.foldersList.filter(f => f.name === targetName)[0];
  let isFileAlreadyPresent = targetFolder.filesList?.filter(f => f.name === srcName).length;
  if(isFileAlreadyPresent){
    return;
  }
console.log(targetFolder);
  let newFilesList = roomData.filesList.filter(f => f.name !== srcName);
  if(targetFolder.filesList === null){
    targetFolder.filesList = [srcFile];
  } else {
    targetFolder.filesList = [...targetFolder.filesList, srcFile];
  }
  let newRoomData:FileUplodContextInterface = { ...roomData, 
    filesList: newFilesList,
    foldersList: [...roomData.foldersList],
  };
  updateRoomData(newRoomData);

}
