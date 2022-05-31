import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';

const Addresses = () => {
    const addresses = useSelector(state => state.addresses)

    const columns = [
        {field: 'address', headerName: 'Адрес', width: 300},
        {field: 'latitude', headerName: 'Широта', width: 300},
        {field: 'longitude', headerName: 'Долгота', width: 300},
        {field: 'created', headerName: 'Создан', width: 300},
        {field: 'lastUsed', headerName: 'Последнее использование', width: 300},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={addresses}/>
        </div>
    );
};

export default Addresses;