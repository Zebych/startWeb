import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';

const Clients = () => {
    const clients = useSelector(state => state.clients)
    const columns = [
        {field: 'userModel', headerName: 'Модель пользователя', width: 300},
        {field: 'lastUsed', headerName: 'Последний вход', width: 300},
        {field: 'registered', headerName: 'Зарегистрирован', width: 300},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={clients}/>
        </div>
    );
};

export default Clients;