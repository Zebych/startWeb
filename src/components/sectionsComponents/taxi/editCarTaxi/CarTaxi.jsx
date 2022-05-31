import React, {useEffect, useState} from 'react';
import BasicSelect from '../../../inputs/Select.jsx';

const CarTaxi = ({data,changeRowCarTaxi}) => {
    const [activeCar, setActiveCar] = useState('')
    const [activeStatus, setActiveStatus] = useState('')
    const [activeDriver, setActiveDriver] = useState('')
    const [activeTariff, setActiveTariff] = useState('')

    useEffect(() => {
        setActiveCar(data.activeCar)
        setActiveStatus(data.activeStatus)
        setActiveDriver(data.activeDriver)
        setActiveTariff(data.activeTariff)
    }, [data])

    useEffect(() => {
        changeRowCarTaxi( activeCar, activeStatus, activeDriver, activeTariff,)
    }, [activeCar, activeStatus, activeDriver, activeTariff,])

    return (
        <>
            <div style={{paddingBottom: '20px'}}>
                <BasicSelect label={'Автомобиль'} statuses={data.cars} value={activeCar}
                             setValue={setActiveCar}/>
                <BasicSelect label={'Статус автомобиля'} statuses={data.statusesCar}
                             value={activeStatus} setValue={setActiveStatus}/>
                <BasicSelect label={'Текущий водитель'} statuses={data.drivers}
                             value={activeDriver} setValue={setActiveDriver}/>
                <BasicSelect label={'Тариф'} statuses={data.tariffs} value={activeTariff}
                             setValue={setActiveTariff}/>
            </div>
        </>
    )
        ;
};

export default CarTaxi;