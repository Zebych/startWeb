import React, {useEffect, useState} from 'react';
import TextareaInput from '../../inputs/TextareaInput.jsx';
import BasicSelect from '../../inputs/Select.jsx';
import ButtonsSet from '../../buttonsSet/ButtonsSet.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const EditGeneralInfo = () => {
    const [question,setQuestion]=useState('')
    const [answer,setAnswer]=useState('')
    const [activeStatus,setActiveStatus]=useState('')

    const dispatch = useDispatch()
    const params = useParams()
    const generalInfo = useSelector(state => state.generalInfo.find(info => info.id === params.id))

    useEffect(()=>{
        setQuestion(generalInfo.question)
        setAnswer(generalInfo.answer)
        setActiveStatus(generalInfo.activeStatus)
    },[generalInfo])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('question', question)
        data.set('answer', answer)
        data.set('activeStatus', activeStatus)
    }

    const onRemoveClick=()=>{
        // dispatch(handleRemoveClickTC(data.id))
    }

    return (
        <div>
            <div style={{display:'flex',alignItems: 'center'}}>
                <span style={{paddingRight:15,width: 100}}>Вопрос:</span>
                <TextareaInput placeholder={'Вопрос'} value={question} setValue={setQuestion}/>
            </div>
            <div style={{display:'flex',alignItems: 'center'}}>
                <span style={{paddingRight:15,width: 100}}>Ответ:</span>
                <TextareaInput placeholder={'Ответ'} value={answer} setValue={setAnswer}/>
            </div>
            <BasicSelect statuses={generalInfo.statuses} label={'Статус'} setValue={setActiveStatus} value={activeStatus}/>
            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>

        </div>
    );
};

export default EditGeneralInfo;