import React, {useEffect, useState} from 'react';
import InputText from '../../../inputs/InputText.jsx';
import TextareaInput from '../../../inputs/TextareaInput.jsx';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import DisableDateInput from '../../../inputs/DisabledDateInput.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const EditTariffZone = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [coordinates, setCoordinates] = useState('')

    const dispatch = useDispatch()
    const params = useParams()

    const tariffZone = useSelector(state => state.tariffZones.find(tariffZone => tariffZone.id === params.id))


    useEffect(() => {
        setName(tariffZone.name)
        setDescription(tariffZone.description)
        setCoordinates(tariffZone.coordinates)
    }, [tariffZone])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('name', name)
        data.set('description', description)
        data.set('coordinates', coordinates)

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick = () => {
        // dispatch(handleRemoveClickTC(data.id))
    }

    return (
        <div>
            <InputText label={'Название'} inputValue={name} setInputValue={setName}/>
            <TextareaInput placeholder={'Описание'} value={description}
                           setValue={setDescription}/>
            <TextareaInput placeholder={'Координаты'} value={coordinates}
                           setValue={setCoordinates}/>
            <div>
                <DisableDateInput label={'Дата создания'} value={tariffZone.dateOfCreation}/>
            </div>
            <div>
                <DisableDateInput label={'Дата обновления'} value={tariffZone.updateDate}/>
            </div>

            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>
        </div>
    );
};

export default EditTariffZone;