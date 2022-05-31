import React from 'react';
import DataTable from '../../tables/table.jsx';

const Payments = () => {
    const columns=[
        { field: 'profile', headerName: 'Профиль', width:200 },
        { field: 'numberCard', headerName: 'Номер карты', width: 300},
        { field: 'checkedCard', headerName: 'Проверенная карта', width: 300 },
        { field: 'defaultCard', headerName: 'Дефолтная карта', width: 300 },
        { field: 'created', headerName: 'Создано', width: 300 },
    ]
    const rows = [
        { id: 1, profile: 'Snow', numberCard: '***4242',checkedCard:true,defaultCard:false,created:'2022-10-02'},
        { id: 2, profile: 'Lannister', numberCard: '***4242',checkedCard:true,defaultCard:false,created:'2022-10-02'},
        { id: 3, profile: 'Lannister', numberCard: '***4242',checkedCard:true,defaultCard:false,created:'2022-10-02'},

    ];

    return (
        <div>
            <DataTable columns={columns} rows={rows}/>
        </div>
    );
};

export default Payments;