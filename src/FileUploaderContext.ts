import { createContext } from 'react';

// interface File {
//     "name": String;
//     "format": String,
//     "time": Date
// }

// export interface FolderInterface {
//     "name": string,
//     "content": null | File[],
//     "dateAdded": Date
// }
export type FileUplodContextInterface = {
    name:string
    filesList: [] | File[],
    foldersList: [] | FileUplodContextInterface[],
    dateAdded: Date
    path: string,
    currentDirectory: string,

}
export const FileUploadContext = createContext<any>({
    "roomData": {
        name:'',
        filesList: [],
        foldersList:[],
        currentDirectory: '.',
        dateAdded: new Date(),
        path:'.'
    }, 
    "setRoomData": () => {},
});
