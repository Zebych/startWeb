import React, {useEffect, useState} from 'react';
import InputText from '../../../inputs/InputText.jsx';
import BasicSelect from '../../../inputs/Select.jsx';
import NumberInput from '../../../inputs/NumberInput.jsx';
import DateInput from '../../../inputs/DateInput.jsx';
import DisableDateInput from '../../../inputs/DisabledDateInput.jsx';
import Divider from '@mui/material/Divider';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const EditPromoCode = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [bonusCode, setBonusCode] = useState('')
    const [activeStatus, setActiveStatus] = useState('')
    const [activeType, setActiveType] = useState('')
    const [bonus, setBonus] = useState(0)
    const [initialAmount, setInitialAmount] = useState(0)
    const [left, setLeft] = useState(0)
    const [startAction, setStartAction] = useState('')
    const [endAction, setEndAction] = useState('')

    const dispatch = useDispatch()
    const params = useParams()

    const promoCode = useSelector(state => state.promoCodes.find(promoCode => promoCode.id === params.id))

    useEffect(() => {
        setTitle(promoCode.title)
        setDescription(promoCode.description)
        setBonusCode(promoCode.bonusCode)
        setActiveStatus(promoCode.activeStatus)
        setActiveType(promoCode.activeType)
        setBonus(promoCode.bonus)
        setInitialAmount(promoCode.initialAmount)
        setLeft(promoCode.left)
        setStartAction(promoCode.startAction)
        setEndAction(promoCode.endAction)
    }, [promoCode])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('title', title)
        data.set('description', description)
        data.set('bonusCode', bonusCode)
        data.set('activeStatus', activeStatus)
        data.set('activeType', activeType)
        data.set('bonus', JSON.stringify(bonus))
        data.set('initialAmount', JSON.stringify(initialAmount))
        data.set('left', JSON.stringify(left))
        data.set('startAction', startAction)
        data.set('endAction', endAction)

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick=()=>{
        // dispatch(handleRemoveClickTC(data.id))
    }

    return (
        <div>
            <InputText label={'Название'} setInputValue={setTitle} inputValue={title}/>
            <InputText label={'Описание'} setInputValue={setDescription}
                       inputValue={description}/>
            <InputText label={'Код'} setInputValue={setBonusCode} inputValue={bonusCode}/>
            <BasicSelect label={'Статус'} statuses={promoCode.statuses} value={activeStatus}
                         setValue={setActiveStatus}/>
            <BasicSelect label={'Тип'} statuses={promoCode.types} value={activeType}
                         setValue={setActiveType}/>
            <NumberInput setValue={setBonus} value={bonus} label={'Бонус'}/>
            <NumberInput setValue={setInitialAmount} value={initialAmount}
                         label={'Изначальное количество'}/>
            <NumberInput setValue={setLeft} value={left} label={'Осталось'}/>

            <div style={{padding: '15px 0 15px'}}>
                <DateInput label={'Начало действия'}
                           value={startAction}
                           setValue={setStartAction}/>
            </div>
            <Divider/>

            <div style={{padding: '15px 0 15px'}}>
                <DateInput label={'Конец действия'} value={endAction}
                           setValue={setEndAction}/>
            </div>
            <Divider/>

            <div style={{padding: '15px 0 15px'}}>
                <DisableDateInput label={'Создан'} value={promoCode.created}/>
            </div>
            <Divider/>

            <div style={{padding: '15px 0 15px'}}>
                <DisableDateInput label={'Обновлен'} value={promoCode.update}/>
            </div>
            <Divider/>

            <ButtonsSet onSaveClick={onSaveClick} onRemoveClick={onRemoveClick}/>
        </div>
    );
};

export default EditPromoCode;