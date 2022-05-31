import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import {useParams} from 'react-router-dom';
import BaseCarRent from './BaseCarRent.jsx';

const EditRentalCar = () => {
    const [car, setCar] = useState('')
    const [status, setStatus] = useState('')
    const [price, setPrice] = useState('')

    const dispatch = useDispatch()
    const params = useParams()

    const carRental = useSelector(state => state.carsRental.find(carRental => carRental.id === params.id))


    useEffect(() => {
        setCar(carRental.activeCar)
        setStatus(carRental.activeStatusCar)
        setPrice(carRental.activePrice)
    }, [carRental])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('car', car)
        data.set('status', status)
        data.set('price', price)

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick = () => {
        // dispatch(handleRemoveClickTC(data.id))
    }

    return (
        <>
            <BaseCarRent car={car} setCar={setCar} status={status} setStatus={setStatus}
                         carRental={carRental}
                         price={price} setPrice={setPrice}
            />

            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>
        </>
    )
}

export default EditRentalCar;