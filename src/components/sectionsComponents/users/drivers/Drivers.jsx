import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';

const Drivers = () => {
    const drivers = useSelector(state => state.drivers)
    const columns = [
        {field: 'userModel', headerName: 'Модель пользователя', width: 300},
        {field: 'lastUsed', headerName: 'Последнее использование', width: 300},
        {field: 'created', headerName: 'Создан', width: 300},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={drivers}/>
        </div>
    );
};

export default Drivers;