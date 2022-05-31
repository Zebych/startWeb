import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import InputText from '../../../inputs/InputText.jsx';
import NumberInput from '../../../inputs/NumberInput.jsx';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import {useParams} from 'react-router-dom';

const EditPriceRental = () => {
    const [description, setDescription] = useState('')
    const [rental_1_7, setRental_1_7] = useState(0)
    const [rental_7_14, setRental_7_14] = useState(0)
    const [rental_14_30, setRental_14_30] = useState(0)
    const [rentalMore_30, setRentalMore_30] = useState(0)
    const [securityDeposit, setSecurityDeposit] = useState(0)

    const dispatch = useDispatch()
    const params = useParams()

    const priceRental = useSelector(state => state.priceRentals.find(priceRental => priceRental.id === params.id))


    useEffect(() => {
        setDescription(priceRental.description)
        setRental_1_7(priceRental.rental_1_7)
        setRental_7_14(priceRental.rental_7_14)
        setRental_14_30(priceRental.rental_14_30)
        setRentalMore_30(priceRental.rentalMore_30)
        setSecurityDeposit(priceRental.security_deposit)
    }, [priceRental])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('description', description)
        data.set('rental_1_7', JSON.stringify(rental_1_7))
        data.set('rental_7_14', JSON.stringify(rental_7_14))
        data.set('rental_14_30', JSON.stringify(rental_14_30))
        data.set('rentalMore_30', JSON.stringify(rentalMore_30))
        data.set('security_deposit', JSON.stringify(securityDeposit))

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick=()=>{
        // dispatch(handleRemoveClickTC(data.id))
    }

    return (
        <>
            <InputText label={'Описание'} inputValue={description} setInputValue={setDescription}/>

            <NumberInput label={'Аренда 1-7 суток'} value={rental_1_7} setValue={setRental_1_7}/>


            <NumberInput label={'Аренда 7-14 суток'} value={rental_7_14} setValue={setRental_7_14}/>


            <NumberInput label={'Аренда 14-30 суток'} value={rental_14_30} setValue={setRental_14_30}/>


            <NumberInput label={'Аренда от 30 суток'} value={rentalMore_30} setValue={setRentalMore_30}/>

            <NumberInput label={'Обеспечительный платеж'} value={securityDeposit} setValue={setSecurityDeposit}/>

           <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>
        </>
    )
}

export default EditPriceRental;