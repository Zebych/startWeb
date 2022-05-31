import React, {useEffect, useState} from 'react';
import InputText from '../../../../inputs/InputText';
import BasicSelect from '../../../../inputs/Select';
import DisableDateInput from '../../../../inputs/DisabledDateInput';

const data = {
    email: '111@mail.ru',
    phone: '8 999 999 99 99',
    password: '111',
    userTypes: ['клиент', 'водитель'],
    activeType: 'водитель',
    lastDate: '10.02.22',
    registrationDate: '10.02.22',
}

const BasicInfo = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [activeType, setActiveType] = useState('')

    useEffect(() => {
        setEmail(data.email)
        setPhone(data.phone)
    }, [data])

    return (
        <div>
            <InputText label={'Электронная почта'} setInputValue={setEmail}
                       inputValue={email}/>
            <InputText label={'Телефон'} setInputValue={setPhone}
                       inputValue={phone}/>
            <InputText label={'Новый пароль'} setInputValue={setPassword}
                       inputValue={password}/>
            <BasicSelect label={'Тип пользователя'} setValue={setActiveType}
                         value={activeType} statuses={data.userTypes}/>
            <DisableDateInput label={'Последний вход'} value={data.lastDate}/>
            <DisableDateInput label={'Дата регистрации'} value={data.registrationDate}/>
        </div>
    );
};

export default BasicInfo;