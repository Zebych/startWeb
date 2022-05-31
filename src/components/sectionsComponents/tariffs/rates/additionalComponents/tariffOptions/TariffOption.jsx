import React, {useEffect, useState} from 'react';
import BasicSelect from '../../../../../inputs/Select.jsx';
import InputText from '../../../../../inputs/InputText.jsx';
import CheckboxInput from '../../../../../inputs/CheckboxInput.jsx';

const TariffOption = ({tariffOption, changeRowTariffOptions}) => {
    const [activeOption, setActiveOption] = useState('')
    const [activeStatus, setActiveStatus] = useState('')
    const [value, setValue] = useState('')
    const [remove, setRemove] = useState(false)

    useEffect(() => {
        setActiveOption(tariffOption.activeOption)
        setValue(tariffOption.value)
        setActiveStatus(tariffOption.activeStatus)
        setRemove(tariffOption.remove)
    }, [tariffOption])

    useEffect(() => {
        const tariffOptionId = tariffOption.id
        changeRowTariffOptions(activeOption, activeStatus, value, remove, tariffOptionId)
    }, [activeOption, activeStatus, value, remove])

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{padding: '0 15px 0 15px'}}>
                <BasicSelect
                    statuses={tariffOption.tariffOptions}
                    value={activeOption}
                    setValue={setActiveOption}
                    label={'Тарифная опция'}
                />
            </div>
            <div style={{padding: '0 15px 0 15px'}}>
                <InputText label={'Значение'} inputValue={value}
                           setInputValue={setValue}/>
            </div>
            <div style={{padding: '0 15px 0 15px'}}>
                <BasicSelect
                    statuses={tariffOption.statuses}
                    value={activeStatus}
                    setValue={setActiveStatus}
                    label={'Статус'}
                />
            </div>
            <div style={{padding: '0 15px 0 15px'}}>
                <CheckboxInput checked={remove} setChecked={setRemove}/>
                <span>Удалить</span>
            </div>
        </div>
    );
};

export default TariffOption;