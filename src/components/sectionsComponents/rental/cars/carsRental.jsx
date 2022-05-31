import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';

const RentalCars = () => {
    const carsRental = useSelector(state => state.carsTaxi)
    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'activeCar', headerName: 'Автомобиль', width: 300},
        {field: 'activeStatusCar', headerName: 'Статус автомобиля', width: 300},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={carsRental}/>
        </div>
    );
};

export default RentalCars;