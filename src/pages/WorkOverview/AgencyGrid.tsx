import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'vuokrayritys',
    headerName: 'HP-yritys',
    width: 150,
    editable: true,
  },
  {
    field: 'sposti',
    headerName: 'Sähköposti',
    width: 300,
    editable: true,
  },
 
];

const rows = [
  { id: 1, sposti: 'Snow@luukku.com', vuokrayritys: 'Jon'},
  { id: 2, sposti: 'Lannister@luukku.com', vuokrayritys: 'Cersei'},
  { id: 3, sposti: 'Lannister@luukku.com', vuokrayritys: 'Jaime'},
  { id: 4, sposti: 'Stark@luukku.com', vuokrayritys: 'Arya' },
  { id: 5, sposti: 'Targaryen@luukku.com', vuokrayritys: 'Daenerys'},
  { id: 6, sposti: 'Melisandre@luukku.com', vuokrayritys: null,},
  { id: 7, sposti: 'Clifford@luukku.com', vuokrayritys: 'Ferrara'},
  { id: 8, sposti: 'Frances@luukku.com', vuokrayritys: 'Rossini'},
  { id: 9, sposti: 'Roxie@luukku.com', vuokrayritys: 'Harvey'},
];

export const AgencyGrid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default AgencyGrid