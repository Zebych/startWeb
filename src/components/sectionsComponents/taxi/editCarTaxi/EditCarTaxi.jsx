import React, {useEffect, useState} from 'react';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import EditDrivers from './EditDrivers.jsx';
import CarTaxi from './CarTaxi.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const data = {
    // cars: ['мопед', 'т-34', 'МИГ'],
    // activeCar: 'т-34',
    // statusesCar: ['активен', 'неактивен'],
    // activeStatus: 'активен',
    // drivers: ['Ашот', 'Джамшут'],
    // activeDriver: 'Ашот',
    // tariffs: ['дорого', 'безумно дорого', 'бесплатно'],
    // activeTariff: 'бесплатно',
    driversData: [
        {
            drivers: ['Ашот', 'Алымбек'],
            activeDriver: 'Алымбек',
            travelAll: 5,
            lastTrip: '2022-10-02',
            created: '2022-10-02',
            remove: false,
            id: '1',
        },
        {
            drivers: ['Ашот', 'Алымбек'],
            activeDriver: 'Ашот',
            travelAll: 51,
            lastTrip: '2022-10-05',
            created: '2022-10-25',
            remove: false,
            id: '2',
        },
        {
            drivers: ['Ашот', 'Алымбек'],
            activeDriver: 'Ашот',
            travelAll: 51,
            lastTrip: '2022-10-05',
            created: '2022-10-25',
            remove: false,
            id: '3',
        },
        {
            drivers: ['Ашот', 'Алымбек'],
            activeDriver: 'Ашот',
            travelAll: 51,
            lastTrip: '2022-10-05',
            created: '2022-10-25',
            remove: false,
            id: '4',
        },
        {
            drivers: ['Ашот', 'Алымбек'],
            activeDriver: 'Ашот',
            travelAll: 51,
            lastTrip: '2022-10-05',
            created: '2022-10-25',
            remove: false,
            id: '5',
        },
        {
            drivers: ['Ашот', 'Алымбек'],
            activeDriver: 'Ашот',
            travelAll: 51,
            lastTrip: '2022-10-05',
            created: '2022-10-25',
            remove: false,
            id: '6',
        },
        {
            drivers: ['Ашот', 'Алымбек'],
            activeDriver: 'Ашот',
            travelAll: 51,
            lastTrip: '2022-10-05',
            created: '2022-10-25',
            remove: false,
            id: '7',
        }
    ]
}

const EditCarTaxi = () => {
    const [activeCar, setActiveCar] = useState('')
    const [activeStatus, setActiveStatus] = useState('')
    const [activeDriver, setActiveDriver] = useState('')
    const [activeTariff, setActiveTariff] = useState('')
    const [newDriverData, setNewDriverData] = useState([ {
        drivers: [''],
        activeDriver: '',
        travelAll: 0,
        lastTrip: '',
        created: '',
        remove: false,
        id: '0',
    },])

    const dispatch = useDispatch()
    const params = useParams()
    const carTaxiData = useSelector(state => state.carsTaxi.find(car => car.id === params.id))

    useEffect(() => {
            setActiveCar(carTaxiData.activeCar)
            setActiveStatus(carTaxiData.activeStatus)
            setActiveDriver(carTaxiData.activeDriver)
            setActiveTariff(carTaxiData.activeTariff)
            setNewDriverData(carTaxiData.driversData)
    }, [carTaxiData])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('activeCar', activeCar)
        data.set('activeStatus', activeStatus)
        data.set('activeDriver', activeDriver)
        data.set('activeTariff', activeTariff)
        data.set('driverData', JSON.stringify(newDriverData))

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick = () => {
        // dispatch(handleRemoveClickTC(data.id))
    }

    const changeRowDriver = (activeDriver, travelAll, remove, rowDriverId) => {
            const newDataDriver = newDriverData.map((driver) => driver.id === rowDriverId
                ? {
                    ...driver,
                    travelAll: travelAll,
                    activeDriver: activeDriver,
                    remove: remove
                }
                : driver
            )
            setNewDriverData(newDataDriver)
    }

    const changeRowCarTaxi = (activeCar, activeStatus, activeDriver, activeTariff) => {
        setActiveCar(activeCar)
        setActiveStatus(activeStatus)
        setActiveDriver(activeDriver)
        setActiveTariff(activeTariff)
    }

    return (
        <>
            <div style={{paddingBottom: '20px'}}>
                <CarTaxi data={carTaxiData} changeRowCarTaxi={changeRowCarTaxi}/>

                <EditDrivers driversData={carTaxiData.driversData}
                             changeRowDriver={changeRowDriver}/>
                <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>
            </div>
        </>
    )
        ;
};

export default EditCarTaxi;