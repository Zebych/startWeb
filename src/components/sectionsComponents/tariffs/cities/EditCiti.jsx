import React, {useEffect, useState} from 'react';
import InputText from '../../../inputs/InputText.jsx';
import TextareaInput from '../../../inputs/TextareaInput.jsx';
import BasicSelect from '../../../inputs/Select.jsx';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const EditCiti = () => {
    const [name, setName] = useState('')
    const [coordinates, setCoordinates] = useState('')
    const [activeStatus, setActiveStatus] = useState('')

    const dispatch = useDispatch()
    const params = useParams()

    const city = useSelector(state => state.cities.find(city => city.id === params.id))

    useEffect(() => {
        setName(city.name)
        setCoordinates(city.coordinates)
        setActiveStatus(city.activeStatus)
    }, [])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('name', name)
        data.set('coordinates', coordinates)
        data.set('activeStatus', activeStatus)

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick = () => {
        // dispatch(handleRemoveClickTC(data.id))
    }

    return (
        <div>
            <InputText label={'Название'} inputValue={name} setInputValue={setName}/>
            <TextareaInput placeholder={'Координаты'} value={coordinates}
                           setValue={setCoordinates}/>
            <BasicSelect label={'Статус'} statuses={city.statuses} value={activeStatus}
                         setValue={setActiveStatus}/>
            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>
        </div>
    );
};

export default EditCiti;