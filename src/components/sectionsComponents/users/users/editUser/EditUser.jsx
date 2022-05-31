import React from 'react';
import ButtonsSet from '../../../../buttonsSet/ButtonsSet.jsx';

const data={
    email:'321@mail.ru',
    phone:'+7999 999 9999',
    userType:['Администратор','Менеджер','Клиент','Водитель'],
    lastUse:'20 апреля 2022г 12:15',
    registrationDate:'20 апреля 2022г 12:15 хардкор',
}
const EditUser = () => {
    const onSaveClick = () => {
        const data = new FormData();
        // dispatch(handleSaveClickTC(data))
    }
    const onRemoveClick=()=>{
        // dispatch(handleRemoveClickTC(data.id))
    }

    return (
        <div>
разбить права на группы\ дублируется по 10 раз одна и таже хрень
            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>

        </div>
    );
};

export default EditUser;