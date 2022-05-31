import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';

const Cars = () => {
    const cars = useSelector(state => state.cars)

    const columns = [
        {field: 'firstName', headerName: 'Full name', width: 300},
        {field: 'status', headerName: 'Статус', width: 300},
        {field: 'id', headerName: 'ID', width: 70},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={cars}/>
        </div>
    );
};

export default Cars;