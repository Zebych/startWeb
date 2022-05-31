import React, {useEffect, useState} from 'react';
import InputText from '../../inputs/InputText.jsx';
import BasicSelect from '../../inputs/Select.jsx';
import TextareaInput from '../../inputs/TextareaInput.jsx';
import Divider from '@mui/material/Divider';
import CheckboxInput from '../../inputs/CheckboxInput.jsx';
import ButtonsSet from '../../buttonsSet/ButtonsSet.jsx';
import {useDispatch} from 'react-redux';

const data = {
    numberCard: '3212 3211 3211 3211',
    cardExpiryDate: '12/22',
    profiles: ['8 999 999 99 99', '+7 999 999 99 99'],
    activeProfile: '+7 999 999 99 99',
    cryptogram: 'sdfdsfsdfgdfgdf',
    token: 'sdfsdf321',
    cardName:'Гермундык Алиев',
    testTransactionInfo:'asdasdfds',
    defaultCard:false,
    verifiedCard :false,
}

const EditPayments = () => {
    const [numberCard, setNumberCard] = useState('')
    const [cardExpiryDate, setCardExpiryDate] = useState('')
    const [activeProfile, setActiveProfile] = useState('')
    const [cryptogram, setCryptogram] = useState('')
    const [token, setToken] = useState('')
    const [cardName, setCardName] = useState('')
    const [testTransactionInfo, setTestTransactionInfo] = useState('')
    const [verifiedCard, setVerifiedCard] = useState(false)
    const [defaultCard, setDefaultCard] = useState(false)

    // const dispatch = useDispatch()

    useEffect(() => {
        setNumberCard(data.numberCard)
        setCardExpiryDate(data.cardExpiryDate)
        setActiveProfile(data.activeProfile)
        setCryptogram(data.cryptogram)
        setToken(data.token)
        setCardName(data.cardName)
        setTestTransactionInfo(data.testTransactionInfo)
        setVerifiedCard(data.verifiedCard)
        setDefaultCard(data.defaultCard)
    }, [data])


    const onSaveClick = () => {
        const data = new FormData();
        data.set('numberCard', numberCard)
        data.set('cardExpiryDate', cardExpiryDate)
        data.set('cryptogram', cryptogram)
        data.set('token', token)
        data.set('cardName', cardName)
        data.set('testTransactionInfo', testTransactionInfo)
        data.set('verifiedCard', JSON.stringify(verifiedCard))
        data.set('defaultCard', JSON.stringify(defaultCard))

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick=()=>{
        // dispatch(handleRemoveClickTC(data.id))
    }

    return (
        <div>
            <InputText label={'номер карты'} inputValue={numberCard}
                       setInputValue={setNumberCard}/>
            <InputText label={'Срок действия карты'} inputValue={cardExpiryDate}
                       setInputValue={setCardExpiryDate}/>
            <BasicSelect statuses={data.profiles} label={'Профиль'} value={activeProfile}
                         setValue={setActiveProfile}/>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{paddingRight:15}}>Криптограмма:</span>
                <TextareaInput placeholder={'Криптограмма'}
                               setValue={setCryptogram}
                               value={cryptogram}/>
            </div>
            <Divider/>

            <InputText label={'Токен для оплаты'} inputValue={token}
                       setInputValue={setToken}/>

            <InputText label={'Имя держателя карты'} inputValue={cardName}
                       setInputValue={setCardName}/>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{paddingRight:15}}>Информация о тестовой транзакции:</span>
                <TextareaInput placeholder={'Информация о тестовой транзакции'}
                               setValue={setTestTransactionInfo}
                               value={testTransactionInfo}/>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>

                <CheckboxInput checked={verifiedCard} setChecked={setVerifiedCard}/>
                <span style={{paddingRight:15}}>Проверенная карта</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>

                <CheckboxInput checked={defaultCard} setChecked={setDefaultCard}/>
                <span style={{paddingRight:15}}>Дефолтная карта пользователя</span>
            </div>
            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>
        </div>
    );
};

export default EditPayments;