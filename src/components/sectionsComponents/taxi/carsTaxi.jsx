import React from 'react';
import {useSelector} from 'react-redux';
import DataTable from '../../tables/table.jsx';

const TaxiCars = () => {
    const carsRental = useSelector(state => state.carsRental)
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

export default TaxiCars;