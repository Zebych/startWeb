import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';


const TariffOptions = () => {
    const tariffOptions = useSelector(state => state.tariffOptions)
    const columns = [
        {field: 'title', headerName: 'Название', width: 300},
        {field: 'created', headerName: 'Создано', width: 300},
        {field: 'id', headerName: 'ID', width: 300},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={tariffOptions}/>
        </div>
    );
};

export default TariffOptions;