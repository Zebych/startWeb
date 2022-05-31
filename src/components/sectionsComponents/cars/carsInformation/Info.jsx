import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';

const Info = () => {
    const infoCars = useSelector(state => state.infoCars)
    const columns = [
        {field: 'description', headerName: 'description', width: 300},
        {field: 'id', headerName: 'ID', width: 70},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={infoCars}/>
        </div>
    );
};

export default Info;