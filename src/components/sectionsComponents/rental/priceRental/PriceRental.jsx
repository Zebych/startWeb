import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {useSelector} from 'react-redux';

const PriceRental = () => {
    const priceRentals = useSelector(state => state.priceRentals)
    const columns = [
        {field: 'description', headerName: 'Описание', width: 300},
        {field: 'id', headerName: 'ID', width: 70},
    ]
    return (
        <div>
            <DataTable columns={columns} rows={priceRentals}/>
        </div>
    );
};

export default PriceRental;