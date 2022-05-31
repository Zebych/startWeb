import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';

const PromoCodes = () => {
    const promoCodes = useSelector(state => state.promoCodes)
    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'title', headerName: 'Название', width: 300},
        {field: 'initialAmount', headerName: 'Изначальное количество', width: 300},
        {field: 'left', headerName: 'Осталось', width: 300},
        {field: 'startAction', headerName: 'Начало действия', width: 300},
        {field: 'endAction', headerName: 'Конец действия', width: 300},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={promoCodes}/>
        </div>
    );
};

export default PromoCodes;