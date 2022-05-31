import React from 'react';
import DataTable from '../../tables/table.jsx';
import {useSelector} from 'react-redux';

const Codes = () => {
    const codes = useSelector(state => state.codes)
    const columns = [
        {field: 'code', headerName: 'Телефон', width: 300},
        {field: 'date', headerName: 'Создано', width: 300},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={codes}/>
        </div>
    );
};

export default Codes;