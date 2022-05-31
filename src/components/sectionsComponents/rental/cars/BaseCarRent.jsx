import React from 'react';
import BasicSelect from '../../../inputs/Select.jsx';

const BaseCarRent = ({carRental,setCar,car,setStatus,status,setPrice,price}) => {

    return (
        <div>
            <BasicSelect statuses={carRental.cars} value={car} setValue={setCar}
                         label={'Автомобиль'}/>

            <BasicSelect
                statuses={carRental.statusesCar} value={status}
                setValue={setStatus}
                label={'Статус'}/>

            <BasicSelect statuses={carRental.prices} value={price} setValue={setPrice}
                         label={'Стоимость'}/>
        </div>
    );
};

export default BaseCarRent;