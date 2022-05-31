import React, {useEffect, useState} from 'react';
import InputText from '../../../inputs/InputText.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';

const EditTariffOption = () => {
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()
    const params = useParams()

    const tariffOption = useSelector(state => state.tariffOptions.find(tariffOption => tariffOption.id === params.id))

    useEffect(() => {
        setTitle(tariffOption.title)
    }, [tariffOption])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('title', title)

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick = () => {
        // dispatch(handleRemoveClickTC(data))
    }
    return (
        <div>
            <InputText label={'Название'} inputValue={title} setInputValue={setTitle}/>
            <ButtonsSet onSaveClick={onSaveClick} onRemoveClick={onRemoveClick}/>

        </div>
    );
};

export default EditTariffOption;