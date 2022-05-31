import React, {useEffect, useState} from 'react';
import InputText from '../../inputs/InputText.jsx';
import Divider from '@mui/material/Divider';
import MultipleSelectChip from '../../inputs/SelectChip.jsx';
import ButtonsSet from '../../buttonsSet/ButtonsSet.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const EditGroup = () => {
    const [name, setName] = useState('')
    const [activeRights, setActiveRights] = useState([])

    const dispatch = useDispatch()
    const params = useParams()

    const group = useSelector(state => state.groups.find(group => group.id === params.id))

    useEffect(() => {
        setName(group.name)
        setActiveRights(group.activeRights)
    }, [group])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('activeRights', JSON.stringify(activeRights))
        data.set('name', name)
    }

    const onRemoveClick = () => {
        // dispatch(handleRemoveClickTC(data.id))
    }

    return (
        <div>
            <InputText label={'Имя'} setInputValue={setName}
                       inputValue={name}/>
            <div style={{padding: '15px 0 15px'}}>
                <MultipleSelectChip label={'Доступные права'} values={group.rights}
                                    activeValue={activeRights}
                                    setActiveValue={setActiveRights}/>
            </div>
            <Divider/>

            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>
        </div>
    );
};

export default EditGroup;