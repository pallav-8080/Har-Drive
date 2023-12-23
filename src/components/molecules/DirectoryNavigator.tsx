import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import Link from '@mui/material/Link';

interface BreadcrumbProps{
    currentPath: string,
    handleDirectoryChange: any
}
const Breadcrumb = ({currentPath, handleDirectoryChange}: BreadcrumbProps ) => {
    console.log(currentPath);
    let dirs = currentPath ? currentPath.split('/') : ['.'];
    dirs[0] = 'My Drive';
    dirs.shift();

  return (
    <div style={{alignSelf: "end"}}>
    <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          id="."
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="#"
          onClick={() => handleDirectoryChange("My Drive")}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          My Drive
        </Link>
        {dirs.map(d => 
            <Link
                id={d}
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                className='bread_crumb_link'
                href="#"
                onClick={() => handleDirectoryChange(d)}
                >
                <FolderIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                {d}
            </Link>
        )}

      </Breadcrumbs>
    </div>
  );
}
export default Breadcrumb