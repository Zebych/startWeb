import React, {useEffect, useState} from 'react';

import Divider from '@mui/material/Divider';
import InputText from '../../../inputs/InputText.jsx';
import {useDispatch, useSelector} from 'react-redux';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import DisableDateInput from '../../../inputs/DisabledDateInput.jsx';
import {useParams} from 'react-router-dom';

const EditAddress = () => {
    const [address, setAddress] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [tariffZone, setTariffZone] = useState('')

    const dispatch = useDispatch()
    const params = useParams()
    const addressData = useSelector(state => state.addresses.find(address => address.id === params.id))

    useEffect(() => {
        setAddress(addressData.address)
        setLatitude(addressData.latitude)
        setLongitude(addressData.longitude)
        setTariffZone(addressData.tariffZone)
    }, [addressData])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('address', address)
        data.set('latitude', latitude)
        data.set('longitude', longitude)
        data.set('tariffZone', tariffZone)

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick = () => {
        // dispatch(handleRemoveClickTC(data))
    }
    return (
        <>

            <InputText label={'Адес'} setInputValue={setAddress} inputValue={address}/>

            <InputText label={'Широта'} setInputValue={setLatitude}
                       inputValue={latitude}/>

            <InputText label={'Долгота'} setInputValue={setLongitude}
                       inputValue={longitude}/>

            <InputText label={'Тарифная зона'} setInputValue={setTariffZone}
                       inputValue={tariffZone}/>

            <div style={{padding: '15px 0 15px'}}>
                <DisableDateInput label={'Создан'} value={addressData.tariffZone}/>
            </div>
            <Divider/>

            <div style={{padding: '15px 0 15px'}}>
                <DisableDateInput label={'Последнее использование'}
                                  value={addressData.lastUse}/>
            </div>
            <Divider/>


            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>
        </>
    )
};

export default EditAddress;