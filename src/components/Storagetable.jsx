import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'Назва Товару', width: 160 },
  { field: 'lastName', headerName: 'Кількість товару', width: 160 },
  {
    field: 'age',
    headerName: 'Ціна купівлі',
    type: 'number',
    width: 110,
  },
  {
    field: 'fullName',
    headerName: 'Ціна продажу',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'last',
    headerName: 'Залишок',
    type: 'number',
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, last:33 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, last:1 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, last:3 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, last:11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, last:0 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, last:6 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, last:2 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, last:1 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, last:5, },
];

export default function DataTable() {
  return (
    <div style={{ minheight: 370, width: '100%', justifyContent:"center" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}