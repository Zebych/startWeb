import React, {useEffect, useState} from 'react';
import BasicSelect from '../../../../../inputs/Select.jsx';
import NumberInput from '../../../../../inputs/NumberInput.jsx';
import CheckboxInput from '../../../../../inputs/CheckboxInput.jsx';

const RowTariffZone = ({data, changeRowTariffZone}) => {
    const [activeStatus, setActiveStatus] = useState('')
    const [price, setPrice] = useState(0)
    const [feedTime, setFeedTime] = useState(0)
    const [remove, setRemove] = useState(false)
    const rowId = data.id

    useEffect(() => {
        setActiveStatus(data.status)
        setPrice(data.price)
        setFeedTime(data.feedTime)
        setRemove(data.remove)
    }, [data])

    useEffect(() => {
        changeRowTariffZone(activeStatus, price, feedTime, remove, rowId)
    }, [activeStatus, price, feedTime, remove])

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{padding: '0 15px 0 15px'}}>
                <BasicSelect
                    statuses={data.statuses}
                    value={activeStatus}
                    setValue={setActiveStatus}
                    label={'Тарифная зона'}
                />
            </div>
            <div style={{padding: '0 15px 0 15px'}}>
                <NumberInput label={'Стоимость'} value={price} setValue={setPrice}/>
            </div>
            <div style={{padding: '0 15px 0 15px'}}>
                <NumberInput label={'Бесплатное время поездки'} value={feedTime}
                             setValue={setFeedTime}/>
            </div>
            <div style={{padding: '0 15px 0 15px'}}>
                <CheckboxInput checked={remove}
                               setChecked={setRemove}/><span>Удалить</span>
            </div>
        </div>
    );
};

export default RowTariffZone;