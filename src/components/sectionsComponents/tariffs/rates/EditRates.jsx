import React, {useEffect, useState} from 'react';
import InputText from '../../../inputs/InputText.jsx';
import TextareaInput from '../../../inputs/TextareaInput.jsx';
import BasicSelect from '../../../inputs/Select.jsx';
import NumberInput from '../../../inputs/NumberInput.jsx';
import ChooseFileInput from '../../../inputs/ChooseFileInput.jsx';
import Divider from '@mui/material/Divider';
import CheckboxInput from '../../../inputs/CheckboxInput.jsx';
import FareCost from './additionalComponents/FareCost.jsx';
import TariffZones from './additionalComponents/tariffZone/TariffZones.jsx';
import TariffOptions from './additionalComponents/tariffOptions/TariffOptions.jsx';
import TaxiCars from './additionalComponents/carForTaxi/TaxiCars.jsx';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const EditRates = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [activeStatus, setActiveStatus] = useState('')
    const [city, setCity] = useState('')
    const [priority, setPriority] = useState('')
    const [photoCar, setPhotoCar] = useState({file: '', imagePreviewUrl: ''})
    const [photoLogo, setPhotoLogo] = useState({file: '', imagePreviewUrl: ''})
    const [machinesOnLine, setMachinesOnLine] = useState(false)
    const [costOrder, setCostOrder] = useState(0)
    const [minCost, setMinCost] = useState(0)
    const [costPerMinute, setCostPerMinute] = useState(0)
    const [costKm, setCostKm] = useState(0)
    const [time, setTime] = useState(0)
    const [freeTime, setFreeTime] = useState(0)
    const [costOneMinute, setCostOneMinute] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [newTariffZones, setNewTariffZones] = useState([])
    const [newTariffOptions, setNewTariffOptions] = useState([])
    const [newTaxiCars, setNewTaxiCars] = useState([])

    const dispatch = useDispatch()
    const params = useParams()

    const tariff = useSelector(state => state.rates.find(tariff => tariff.id === params.id))

    useEffect(() => {
        setName(tariff.name)
        setDescription(tariff.description)
        setActiveStatus(tariff.activeStatus)
        setCity(tariff.city)
        setPriority(tariff.priority)
        setPhotoCar({file: '', imagePreviewUrl: tariff.photoCar})
        setPhotoLogo({file: '', imagePreviewUrl: tariff.photoLogo})
        setMachinesOnLine(tariff.machinesOnLine)
        setCostOrder(tariff.costOrder)
        setMinCost(tariff.minCost)
        setCostPerMinute(tariff.costPerMinute)
        setCostKm(tariff.costKm)
        setTime(tariff.time)
        setFreeTime(tariff.freeTime)
        setCostOneMinute(tariff.costOneMinute)
        setBonus(tariff.bonus)
        setNewTariffZones(tariff.dataTariffZones)
        setNewTariffOptions(tariff.tariffOptionsData)
        setNewTaxiCars(tariff.taxiCars)
    }, [tariff])

    const changeRowTariffZone = (activeStatus, price, feedTime, remove, rowId) => {
        const newDataTariffZones = newTariffZones.map((tariffZone) => tariffZone.id === rowId
            ? {
                ...tariffZone,
                status: activeStatus,
                price: +price,
                feedTime: +feedTime,
                remove: remove
            }
            : tariffZone
        )
        setNewTariffZones(newDataTariffZones)
    }

    const changeRowTariffOptions = (activeOption, activeStatus, value, remove, tariffOptionId) => {
        const newDataTariffOptions = newTariffOptions.map((tariffOption) => tariffOption.id === tariffOptionId
            ? {
                ...tariffOption,
                activeStatus: activeStatus,
                value: value,
                activeOption: activeOption,
                remove: remove
            }
            : tariffOption
        )
        setNewTariffOptions(newDataTariffOptions)
    }

    const changeRowTaxiCars = (activeCar, activeStatus, activeDriver, remove, rowTaxiCarId) => {
        const newDataTaxiCars = newTaxiCars.map((taxiCar) => taxiCar.id === rowTaxiCarId
            ? {
                ...taxiCar,
                activeStatus: activeStatus,
                activeCar: activeCar,
                activeDriver: activeDriver,
                remove: remove
            }
            : taxiCar
        )
        setNewTariffOptions(newDataTaxiCars)
    }

    const onSaveClick = () => {
        const data = new FormData();
        data.set('name', name)
        data.set('description', description)
        data.set('activeStatus', activeStatus)
        data.set('city', city)
        data.set('priority', priority)
        data.set('photoCar', photoCar.file)
        data.set('photoLogo', photoLogo.file)
        data.set('machinesOnLine', JSON.stringify(machinesOnLine))
        data.set('costOrder', JSON.stringify(costOrder))
        data.set('minCost', JSON.stringify(minCost))
        data.set('costPerMinute', JSON.stringify(costPerMinute))
        data.set('costKm', JSON.stringify(costKm))
        data.set('time', JSON.stringify(time))
        data.set('freeTime', JSON.stringify(freeTime))
        data.set('costOneMinute', JSON.stringify(costOneMinute))
        data.set('bonus', JSON.stringify(bonus))
        data.set('newTariffZones', JSON.stringify(newTariffZones))
        data.set('tariffOptionsData', JSON.stringify(newTariffOptions))
        data.set('taxiCars', JSON.stringify(newTaxiCars))

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick = () => {
        // dispatch(handleRemoveClickTC(data))
    }

    return (
        <div>
            <InputText label={'Название'} inputValue={name} setInputValue={setName}/>
            <TextareaInput placeholder={'Описние тарифа'} value={description}
                           setValue={setDescription}/>
            <BasicSelect label={'Статус тарифа'} statuses={tariff.statuses}
                         value={activeStatus}
                         setValue={setActiveStatus}/>
            <BasicSelect label={'Город'} value={city} statuses={tariff.cities}
                         setValue={setCity}/>
            <NumberInput label={'Приоритет'} value={priority} setValue={setPriority}/>
            <div style={{display: 'flex', alignItems: 'center', padding: '15px 0 15px'}}>
                <img src={photoCar.imagePreviewUrl}
                     alt="авто" style={{width: '200px', paddingRight: '15px'}}/>
                <ChooseFileInput setDataFile={setPhotoLogo}/>
            </div>
            <Divider/>
            <div style={{display: 'flex', alignItems: 'center', padding: '15px 0 15px'}}>
                <img src={photoLogo.imagePreviewUrl}
                     alt="авто" style={{width: '200px', paddingRight: '15px'}}/>
                <ChooseFileInput setDataFile={setPhotoLogo}/>
            </div>
            <Divider/>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <CheckboxInput checked={machinesOnLine} setChecked={setMachinesOnLine}/>
                <span>Учитывать машины только на линии</span>
            </div>
            <Divider/>

            <div style={{border: 'solid 1px #1976d2', borderRadius: 8, paddingLeft: 15}}>
                <FareCost
                    label={'Стоимость заказа'}
                    value={costOrder}
                    setValue={setCostOrder}
                    title={'Стоимость заказа'}
                />
                <FareCost
                    label={'Минимальная стоимость'}
                    value={minCost}
                    setValue={setMinCost}
                    title={'Минимальная стоимость'}
                />

                <FareCost
                    label={'Стоимость минуты поездки'}
                    value={costPerMinute}
                    setValue={setCostPerMinute}
                    title={'Стоимость минуты поездки'}
                />

                <FareCost
                    label={'Стоимость километра'}
                    value={costKm}
                    setValue={setCostKm}
                    title={'Стоимость километра'}
                />

                <FareCost
                    label={'Время подачи'}
                    value={time}
                    setValue={setTime}
                    title={'Время подачи'}
                />

                <FareCost
                    label={'Бесплатное ожидание'}
                    value={freeTime}
                    setValue={setFreeTime}
                    title={'Бесплатное время ожидания'}
                />

                <FareCost
                    label={'Минута ожидания'}
                    value={costOneMinute}
                    setValue={setCostOneMinute}
                    title={'Минута ожидания'}
                />

                <FareCost
                    label={'Баллы за поездку'}
                    value={bonus}
                    setValue={setBonus}
                    title={'Баллы за поездку'}
                />

            </div>
            <div style={{padding: '15px 0 15px'}}>
                <TariffZones dataTariffZones={tariff.dataTariffZones}
                             changeRowTariffZone={changeRowTariffZone}/>
            </div>
            <div>
                <TariffOptions tariffOptionsData={tariff.tariffOptionsData}
                               changeRowTariffOptions={changeRowTariffOptions}/>
            </div>
            <div style={{padding: '15px 0 15px'}}>
                <TaxiCars taxiCarsData={tariff.taxiCars}
                          changeRowTaxiCars={changeRowTaxiCars}/>
            </div>
            <ButtonsSet onSaveClick={onSaveClick} onRemoveClick={onRemoveClick}/>
        </div>
    );
};

export default EditRates;