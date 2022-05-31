import React, {useEffect, useState} from 'react';
import BasicSelect from '../../../inputs/Select.jsx';
import Divider from '@mui/material/Divider';
import {useDispatch, useSelector} from 'react-redux';
import DateInput from '../../../inputs/DateInput.jsx';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import {useParams} from 'react-router-dom';

const EditApplicationRent = () => {
    const [car, setCar] = useState('')
    const [status, setStatus] = useState('')
    const [profile, setProfile] = useState('')
    const [startDate, setStartDate] = useState('')
    const [expirationDate, setExpirationDate] = useState('')

    const dispatch = useDispatch()
    const params = useParams()

    const applicationRent = useSelector(state => state.applicationRents.find(applicationRent => applicationRent.id === params.id))


    useEffect(() => {
        setCar(applicationRent.activeCar)
        setStatus(applicationRent.activeStatus)
        setProfile(applicationRent.activeProfile)
        setStartDate(applicationRent.startDate)
        setExpirationDate(applicationRent.expirationDate)
    }, [applicationRent])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('car', car)
        data.set('status', status)
        data.set('profile', profile)
        data.set('startDate', startDate)
        data.set('expirationDate', expirationDate)

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick=()=>{
        // dispatch(handleRemoveClickTC(data.id))
    }

    return (
        <>
            <div>
                    <BasicSelect statuses={applicationRent.profiles} value={profile}
                                 setValue={setProfile}
                                 label={'Профиль'}/>

                    <BasicSelect statuses={applicationRent.cars} value={car} setValue={setCar}
                                 label={'Модель'}/>

                <div style={{padding: '15px 0 15px 0'}}>
                    <DateInput label={'Дата начала аренды'} value={startDate}
                               setValue={setStartDate}/>
                </div>
                <Divider/>

                <div style={{padding: '15px 0 15px 0'}}>
                    <DateInput label={'Дата окончания аренды'} value={expirationDate}
                               setValue={setExpirationDate}/>
                </div>
                <Divider/>

                    <BasicSelect
                        statuses={applicationRent.statuses} value={status}
                        setValue={setStatus}
                        label={'Статус заявки'}/>

            </div>

            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>

        </>
    )
}

export default EditApplicationRent;