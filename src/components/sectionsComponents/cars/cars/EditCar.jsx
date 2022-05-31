import React, {useEffect, useState} from 'react';
import Divider from '@mui/material/Divider';
import BasicSelect from '../../../inputs/Select.jsx';
import BadgeAvatars from './avatar/Avatar.jsx';
import InputText from '../../../inputs/InputText.jsx';
import ChooseFileInput from '../../../inputs/ChooseFileInput.jsx';
import TextareaInput from '../../../inputs/TextareaInput.jsx';
import {useDispatch, useSelector} from 'react-redux';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import {handleRemoveDataClickTC} from '../../../../store/reducers/cars-reducer.js';
import {useParams} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const EditCar = () => {
    const [avaDatafile, setAvaDatafile] = useState({file: '', imagePreviewUrl: ''})
    const [ava, setAva] = useState('')
    const [statuses, setStatuses] = useState([])
    const [activeStatus, setActiveStatus] = useState('')
    const [brandCar, setBrandCar] = useState('')
    const [modelCar, setModelCar] = useState('')
    const [description, setDescription] = useState('')
    const [carNumber, setCarNumber] = useState('')
    const [specifications, setSpecifications] = useState('')

    const dispatch = useDispatch()
    const params = useParams()
debugger
    const car = useSelector(state => state.cars.find(car => car.id === params.id))

    useEffect(() => {
        if (!!car) {
            setActiveStatus(car.activeStatus)
            setStatuses(car.statuses)
            setBrandCar(car.brandCar)
            setModelCar(car.modelCar)
            setDescription(car.description)
            setAva(car.ava)
            setCarNumber(car.carNumber)
            setSpecifications(car.specifications)
        }
    }, [car])

    useEffect(() => {
        if (avaDatafile.imagePreviewUrl !== '') {
            const url = avaDatafile.imagePreviewUrl
            setAva(url)
        }
    }, [avaDatafile])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('avaDatafile', (avaDatafile.file))
        data.set('activeStatus', activeStatus)
        data.set('brandCar', brandCar)
        data.set('modelCar', modelCar)
        data.set('description', description)
        data.set('carNumber', carNumber)
        data.set('specifications', specifications)

        // dispatch(handleSaveDataCarClickTC(data.id,data))
    }

    const onRemoveClick = () => {
        dispatch(handleRemoveDataClickTC(data.id))
    }

    return (
        <>
            <div style={{
                padding: '15px 0 15px 0', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <h3>id name</h3>


                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around', alignItems: 'center'
                }}>
                    {statuses.length !== 0 &&
                    <BasicSelect statuses={statuses} value={activeStatus}
                                 setValue={setActiveStatus}
                                 label={'Статус'}/>}

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingLeft: 15
                    }}>
                        {activeStatus === 'активен'
                            ? <BadgeAvatars ava={ava}/>
                            : <Avatar alt="ava" src={ava}
                                /*style={{width: 75, height: 75}}*//>}
                        <div style={{
                            color: 'transparent',
                            width: '108px',
                            paddingTop: '10px'
                        }}>
                            <ChooseFileInput setDataFile={setAvaDatafile}/>
                        </div>
                    </div>


                </div>
            </div>
            <Divider/>

            <InputText label={'Марка'} inputValue={brandCar} setInputValue={setBrandCar}/>


            <InputText label={'Модель'} inputValue={modelCar}
                       setInputValue={setModelCar}/>

            <TextareaInput placeholder={'Описание'} setValue={setDescription}
                           value={description}/>

            <InputText label={'Гос. номер'} inputValue={carNumber}
                       setInputValue={setCarNumber}/>


            <InputText label={'Тех. характеристики'} inputValue={specifications}
                       setInputValue={setSpecifications}/>
            {params && params.add
                ? <Button variant="outlined" onClick={onSaveClick}>Создать</Button>
                : <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>}

        </>
    );
};

export default EditCar;