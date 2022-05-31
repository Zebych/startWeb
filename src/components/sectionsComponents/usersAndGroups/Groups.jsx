import React from 'react';
import DataTable from '../../tables/table.jsx';
import {useSelector} from 'react-redux';


const Groups = () => {
    const groups = useSelector(state => state.groups)

    const columns = [
        {field: 'group', headerName: 'Группа', width: 300},
    ]

    return (
        <div>
            <DataTable columns={columns} rows={groups}/>
        </div>
    );
};

export default Groups;