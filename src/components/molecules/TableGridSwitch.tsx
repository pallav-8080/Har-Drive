import * as React from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import TableRowsIcon from '@mui/icons-material/TableRows';
import GridViewIcon from '@mui/icons-material/GridView';

interface TableGridSwitchProps{
    viewType: 'GRID' | 'TABLE',
    setViewType: any
}
const TableGridSwitch = ({viewType, setViewType}: TableGridSwitchProps )  =>{
  return (
    <div id="switch" style={{display:'block', float: 'right', margin: '20px', marginRight:'10%'}}>

    <ToggleButtonGroup
      value={viewType}
      exclusive
      onChange={(event, newValue:'GRID' | 'TABLE') => {
        console.log(newValue)
        setViewType(newValue);
      }}
    >
      <ToggleButton value='GRID'><GridViewIcon/></ToggleButton>
      <ToggleButton value='TABLE'><TableRowsIcon/></ToggleButton>

    </ToggleButtonGroup>
    </div>
  );
}
export default TableGridSwitch