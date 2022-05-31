import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';

const Rates = () => {
    const rates = useSelector(state => state.rates)

    const columns = [
        {field: 'name', headerName: 'Название', width: 300},
        {field: 'activeStatus', headerName: 'Статус тарифа', width: 300},
        {field: 'citi', headerName: 'Город', width: 300},
        {field: 'priority', headerName: 'Приоритет', width: 300},
    ]
    return (
        <div>
            <DataTable columns={columns} rows={rates}/>
        </div>
    );
};

export default Rates;