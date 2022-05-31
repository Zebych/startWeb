import React, {useEffect, useState} from 'react';
import BasicSelect from '../../../inputs/Select.jsx';
import NumberInput from '../../../inputs/NumberInput.jsx';
import CheckboxInput from '../../../inputs/CheckboxInput.jsx';
import DisableDateInput from '../../../inputs/DisabledDateInput.jsx';

const EditDriver = ({data, changeRowDriver}) => {
    const [activeDriver, setActiveDriver] = useState('')
    const [travelAll, setTravelAll] = useState(0)
    const [remove, setRemove] = useState(false)

    useEffect(() => {
        setActiveDriver(data.activeDriver)
        setTravelAll(data.travelAll)
        setRemove(data.remove)
    }, [data])

    useEffect(() => {
        const rowDriverId = data.id
        changeRowDriver(activeDriver, travelAll, remove, rowDriverId)
    }, [activeDriver, travelAll, remove])

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{padding: '0 15px 0 15px'}}>
                <BasicSelect label={'Водитель'} statuses={data.drivers}
                             setValue={setActiveDriver} value={activeDriver}/>
            </div>

            <div style={{padding: '0 15px 0 15px'}}>
                <NumberInput label={'Всего поездок'} value={travelAll}
                             setValue={setTravelAll}/>
            </div>

            <div style={{padding: '0 15px 0 15px'}}>
                <DisableDateInput value={data.lastTrip} label={'Последняя поездка'}/>
            </div>

            <div style={{padding: '0 15px 0 15px'}}>
                <DisableDateInput value={data.created} label={'Создан'}/>
            </div>

            <div style={{padding: '0 15px 0 15px'}}>
                <CheckboxInput checked={remove} setChecked={setRemove}/>
                <span>Удалить</span>
            </div>
        </div>
    );
};

export default EditDriver;