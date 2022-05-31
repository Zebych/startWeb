import React from 'react';
import DataTable from '../../tables/table.jsx';
import {useSelector} from 'react-redux';


const GeneralInfo = () => {
    const generalInfo = useSelector(state => state.generalInfo)

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'question', headerName: 'Вопрос', width: 300},
        {field: 'activeStatus', headerName: 'Статус', width: 300},
        {field: 'created', headerName: 'Создано', width: 300},
        {field: 'updated', headerName: 'Обновлено', width: 300},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={generalInfo}/>
        </div>
    );
};

export default GeneralInfo;