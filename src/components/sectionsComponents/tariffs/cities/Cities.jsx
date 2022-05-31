import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';


const Cities = () => {
    const cities = useSelector(state => state.cities)
    const columns = [
        {field: 'name', headerName: 'Название', width: 300},
        {field: 'id', headerName: 'ID', width: 300},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={cities}/>
        </div>
    );
};

export default Cities;