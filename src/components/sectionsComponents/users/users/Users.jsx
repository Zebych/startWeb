import React from 'react';
import DataTable from '../../../tables/table.jsx';

const Users = () => {
    const columns=[
        { field: 'email', headerName: 'Электронная почта', width:300 },
        { field: 'phone', headerName: 'Телефон', width: 300 },
        { field: 'userType', headerName: 'Тип пользователя', width: 300 },
        { field: 'created', headerName: 'Дата регистрации', width: 300 },

    ]
    const rows = [
        { id: 1, email: 'Snowfsdd',created:'20 апреля 2022г.',phone:'999999999',userType:'клиент'},
        { id: 2, email: 'Snowsdfsd',created:'20 апреля 2022г.',phone:'999999999',userType:'клиент'},
        { id: 3, email: 'Snowrwer',created:'20 апреля 2022г.',phone:'999999999',userType:'клиент'},
        { id: 4, email: 'Snow321',created:'20 апреля 2022г.',phone:'999999999',userType:'клиент'},
        { id: 5, email: 'Snow56',created:'20 апреля 2022г.',phone:'999999999',userType:'клиент'},
        { id: 6, email: 'Snow987',created:'20 апреля 2022г.',phone:'999999999',userType:'клиент'},
        { id: 7, email: 'Snow564',created:'20 апреля 2022г.',phone:'999999999',userType:'администратор'},
    ];
    return (
        <div>
            <DataTable columns={columns} rows={rows}/>
        </div>
    );
};

export default Users;