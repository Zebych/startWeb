import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';


const TariffZones = () => {
    const tariffZones = useSelector(state => state.tariffZones)

    const columns = [
        {field: 'id', headerName: 'ID', width: 300},
        {field: 'name', headerName: 'Название', width: 300},
        {field: 'dateOfCreation', headerName: 'Дата создания', width: 300},
        {field: 'updateDate', headerName: 'Дата обновления', width: 300},

    ]

    return (
        <div>
            <DataTable columns={columns} rows={tariffZones}/>
        </div>
    );
};

export default TariffZones;