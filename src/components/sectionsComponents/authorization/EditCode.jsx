import React, {useEffect, useState} from 'react';

import InputText from '../../inputs/InputText.jsx';
import {useDispatch, useSelector} from 'react-redux';
import ButtonsSet from '../../buttonsSet/ButtonsSet.jsx';
import {useParams} from 'react-router-dom';

const EditCode = () => {
    const [tel, setTel] = useState('')
    const [code, setCode] = useState('')

    const params = useParams()

    const storeCode = useSelector(state => state.codes.find(code => code.id === params.id))

    // const dispatch = useDispatch()

    useEffect(() => {
        setTel(storeCode.tel)
        setCode(storeCode.code)
    }, [])

    const onSaveClick = () => {
        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick = () => {
        // dispatch(handleRemoveClickTC(data))
    }

    return (
        <>
            <InputText label={'Телефон'} inputValue={tel} setInputValue={setTel}/>

            <InputText label={'Код'} setInputValue={setCode} inputValue={code}/>

            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>
        </>
    )
};

export default EditCode;