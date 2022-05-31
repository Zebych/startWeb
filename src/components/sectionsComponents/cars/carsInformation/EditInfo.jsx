import React, {useEffect, useState} from 'react';

import InputText from '../../../inputs/InputText.jsx';
import {useDispatch, useSelector} from 'react-redux';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import {useParams} from 'react-router-dom';

const EditInfo = () => {
    const [description, setDescription] = useState('')
    const [power, setPower] = useState('')
    const [engine, setEngine] = useState('')
    const [acceleration, setAcceleration] = useState('')
    const [maxSpeed, setMaxSpeed] = useState('')
    const [driveUnit, setDriveUnit] = useState('')
    const [transmission, setTransmission] = useState('')

    const params = useParams()
    const infoCar = useSelector(state => state.infoCars.find(car => car.id === params.id))

    const dispatch = useDispatch()

    useEffect(()=>{
        if(!!infoCar){
            setDescription(infoCar.description)
            setPower(infoCar.power)
            setEngine(infoCar.engine)
            setAcceleration(infoCar.acceleration)
            setMaxSpeed(infoCar.maxSpeed)
            setDriveUnit(infoCar.driveUnit)
            setTransmission(infoCar.transmission)
        }
    },[infoCar])

    const onSaveClick=()=>{
        const data = new FormData();
        data.set('description', description)
        data.set('power', power)
        data.set('engine', engine)
        data.set('acceleration', acceleration)
        data.set('maxSpeed', maxSpeed)
        data.set('driveUnit', driveUnit)
        data.set('transmission', transmission)

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick=()=>{
        // dispatch(handleRemoveClickTC(data))
    }

    return (
        <>

            <InputText label={'Описание'} setInputValue={setDescription}
                       inputValue={description}/>


            <InputText label={'Мощность'} inputValue={power} setInputValue={setPower}/>


            <InputText label={'Двигатель'} inputValue={engine} setInputValue={setEngine}/>


            <InputText label={'Разгон до 100 км/ч'} inputValue={acceleration} setInputValue={setAcceleration}/>


            <InputText label={'Максимальная скорость'} setInputValue={setMaxSpeed} inputValue={maxSpeed}/>


            <InputText label={'Привод'} inputValue={driveUnit} setInputValue={setDriveUnit}/>


            <InputText label={'Коробка передач'} inputValue={transmission} setInputValue={setTransmission}/>


            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>
        </>
    )
};

export default EditInfo;