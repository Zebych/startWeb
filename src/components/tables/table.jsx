import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useNavigate} from 'react-router-dom';

export default function DataTable({columns, rows}) {
    const navigate = useNavigate()

    const handleOnCellClick = (params) => {
        const rowId = params.row.id
        if (params.field !== "__check__") {
            navigate(`${rowId}/change/`, {replace: true})
        }
    };

    return (
        <div style={{width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[5]}
                checkboxSelection
                autoHeight={true}
                autoPageSize={true}
                density={'compact'}
                DisableColumnMenu={true}
                disableSelectionOnClick={true}
                onCellClick={handleOnCellClick}
            />
        </div>
    );
}
