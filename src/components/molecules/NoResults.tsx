import * as React from 'react';
// import '../../styles/Appbar.css';
import NoRes from '../../icons/empty.png';

// interface BreadcrumbProps{
//     currentPath: string,
//     handleDirectoryChange: any
// }
const NoResults = ({}) => {
  return (
    <div style={{
        background: "rgb(200, 195, 195, 0.2)",
        borderRadius: "12px",
        padding: "12px",
        display: "flex",
        "justifyContent": "center",
        "flexDirection": "column",
        alignItems: "center",
        marginLeft: "auto",
        width: "100%"
        }}>
    <img src={NoRes} height="40px" width="42px" alt="Nothing to show"/>
    <h3 style={{textAlign: "center"}}>Nothing to show</h3>
    <span><i>Drag and drop a file here</i></span>
    </div>
  );
}
export default NoResults