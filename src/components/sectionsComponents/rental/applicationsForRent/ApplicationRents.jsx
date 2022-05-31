import React from 'react';
import DataTable from '../../../tables/table.jsx';
import {applicationRentsReducer} from '../../../../store/reducers/applicationRents-reducer';
import {useSelector} from 'react-redux';



const ApplicationRents = () => {
    const applicationRents=useSelector(state=>state.applicationRents)
    const columns=[
        { field: 'activeCar', headerName: 'Модель автомобиля для аренды', width:200 },
        { field: 'activeProfile', headerName: 'Профиль пользователя отправившего заявку', width: 300},
        { field: 'startDate', headerName: 'Дата начала аренды', width: 300 },
        { field: 'expirationDate', headerName: 'Дата окончания аренды', width: 300 },
        { field: 'price', headerName: 'Стоимость аренды', width: 100 },
        { field: 'activeStatus', headerName: 'Статус заявки', width: 200 },
    ]
    return (
        <div>
            <DataTable columns={columns} rows={applicationRents}/>
        </div>
    );
};

export default ApplicationRents;