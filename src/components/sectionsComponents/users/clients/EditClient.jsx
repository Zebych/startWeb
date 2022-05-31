import React, {useEffect, useState} from 'react';
import BasicSelect from '../../../inputs/Select.jsx';
import BadgeAvatars from '../../cars/cars/avatar/Avatar.jsx';
import Avatar from '@mui/material/Avatar';
import InputText from '../../../inputs/InputText.jsx';
import Divider from '@mui/material/Divider';
import MultipleSelectCheckmarks from '../../../inputs/CheckmarksInput.jsx';
import ChooseFileInput from '../../../inputs/ChooseFileInput.jsx';
import NumberInput from '../../../inputs/NumberInput.jsx';
import CheckboxInput from '../../../inputs/CheckboxInput.jsx';
import {useDispatch, useSelector} from 'react-redux';
import ButtonsSet from '../../../buttonsSet/ButtonsSet.jsx';
import DisableDateInput from '../../../inputs/DisabledDateInput.jsx';
import {useParams} from 'react-router-dom';

const EditClient = () => {
    const [avaFile, setAvaFile] = useState({file: '', imagePreviewUrl: ''})
    const [passwordFile, setPasswordFile] = useState({file: '', imagePreviewUrl: ''})
    const [selfieFile, setSelfieFile] = useState({file: '', imagePreviewUrl: ''})
    const [driversLicense, setDriversLicenseFile] = useState({
        file: '',
        imagePreviewUrl: ''
    })
    const [ava, setAva] = useState('')
    const [notifyBonuses, setNotifyBonuses] = useState(true)
    const [passportChecked, setPassportChecked] = useState(false)
    const [driversLicenseChecked, setDriversLicenseChecked] = useState(false)
    const [selfieChecked, setSelfieChecked] = useState(false)
    const [removeCarTaxi, setRemoveCarTaxi] = useState(false)
    const [bonus, setBonus] = useState(0)
    const [totalTrips, setTotalTrips] = useState(0)
    const [userName, setUserName] = useState('')
    const [name, setName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [surname, setSurname] = useState('')
    const [activityStatus, setActivityStatus] = useState('')
    const [userType, setUserType] = useState('')
    const [activeAddressesUser, setActiveAddressesUser] = useState([])
    const [taxiCar, setTaxiCar] = useState('')

    const [statuses, setStatuses] = useState([])
    const [addressesUser, setAddressesUser] = useState([])
    const [userTypes, setUserTypes] = useState([])
    const [taxiCars, setTaxiCars] = useState([])

    const dispatch = useDispatch()
    const params = useParams()

    const client = useSelector(state => state.clients.find(client => client.id === params.id))


    useEffect(() => {
        setTaxiCars(client.taxiCars)
        setUserTypes(client.userTypes)
        setAddressesUser(client.userAddresses)
        setStatuses(client.statuses)
        setTaxiCar(client.taxiCar)
        setActiveAddressesUser(client.activeUserAddresses)
        setUserType(client.userType)
        setActivityStatus(client.activityStatus)
        setSurname(client.surname)
        setPatronymic(client.patronymic)
        setName(client.name)
        setUserName(client.user_name)
        setTotalTrips(client.totalTrips)
        setBonus(client.bonus)
        setSelfieChecked(client.selfieChecked)
        setDriversLicenseChecked(client.driversLicenseChecked)
        setPassportChecked(client.passportChecked)
        setNotifyBonuses(client.notifyBonuses)
        setAva(client.ava)
        setRemoveCarTaxi(client.removeCarTaxi)
    }, [client])

    useEffect(() => {
        if (avaFile.imagePreviewUrl !== '') {
            const url = avaFile.imagePreviewUrl
            setAva(url)
        }
    }, [avaFile])

    const onSaveClick = () => {
        const data = new FormData();
        data.set('user_name', userName)
        data.set('name', name)
        data.set('patronymic', patronymic)
        data.set('surname', surname)
        data.set('activityStatus', activityStatus)
        data.set('ava', avaFile.file)
        data.set('bonus', JSON.stringify(bonus))
        data.set('notifyBonuses', JSON.stringify(notifyBonuses))
        data.set('activeAddressesUser', JSON.stringify(activeAddressesUser))
        data.set('userType', userType)
        data.set('passwordFile', passwordFile.file)
        data.set('passportChecked', JSON.stringify(passportChecked))
        data.set('selfieFile', selfieFile.file)
        data.set('selfieChecked', JSON.stringify(selfieChecked))
        data.set('driversLicense', driversLicense.file)
        data.set('driversLicenseChecked', JSON.stringify(driversLicenseChecked))
        data.set('taxiCar', taxiCar)
        data.set('totalTrips', JSON.stringify(totalTrips))
        data.set('removeCarTaxi', JSON.stringify(removeCarTaxi))

        // dispatch(handleSaveClickTC(data))
    }

    const onRemoveClick=()=>{
        // dispatch(handleRemoveClickTC(data.id))
    }

    return (
        <>
            <div>
                <div style={{
                    padding: '15px 0 15px 0', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <InputText label={'username'} inputValue={userName}
                               setInputValue={setUserName}/>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around', alignItems: 'center'
                    }}>

                        <div style={{paddingRight: '15px'}}>
                            <BasicSelect
                                statuses={statuses} value={activityStatus}
                                setValue={setActivityStatus}
                                label={'Статус'}/>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingLeft: 15
                        }}>
                            {activityStatus === 'активен'
                                ? <BadgeAvatars ava={ava}/>
                                : <Avatar alt="ava" src={ava}
                                    /*style={{width: 75, height: 75}}*//>}

                            <div style={{
                                color: 'transparent',
                                width: '108px',
                                paddingTop: '10px'
                            }}>
                                <ChooseFileInput setDataFile={setAvaFile}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider/>

                <InputText label={'Имя'} inputValue={name} setInputValue={setName}/>


                <InputText label={'Отчество'} setInputValue={setPatronymic}
                           inputValue={patronymic}/>


                <InputText label={'Фамилия'} inputValue={surname}
                           setInputValue={setSurname}/>


                <div style={{ display: 'flex'}}>
                    <NumberInput label={'Бонусы'} setValue={setBonus} value={bonus}/>
                    <span style={{display: 'flex', alignItems: 'center'}}>
                 <CheckboxInput checked={notifyBonuses}
                                setChecked={setNotifyBonuses}/>
                    Уведомить
                </span>
                </div>
                <Divider/>

                <div style={{width: '260px', padding: '15px 0 15px'}}>
                    <MultipleSelectCheckmarks
                        values={addressesUser}
                        activeValue={activeAddressesUser}
                        setActiveValue={setActiveAddressesUser}/>
                </div>
                <Divider/>

                    <BasicSelect statuses={userTypes} value={userType}
                                 setValue={setUserType} label={'Тип пользователя'}/>
            </div>

            <h3>Документы пользователя</h3>
            <div style={{display: 'flex', padding: '15px 0 15px'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>

                    <span style={{display: 'flex', alignItems: 'center'}}>
                           <h4>Пасспорт:</h4>
                        <ChooseFileInput setDataFile={setPasswordFile}/>
                    </span>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h4>Проверка паспорта:</h4>
                        <CheckboxInput checked={passportChecked}
                                       setChecked={setPassportChecked}/>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: '15px'
                }}>
                    <span style={{display: 'flex', alignItems: 'center'}}>
                           <h4>Водительское удостовирение:</h4>
                        <ChooseFileInput setDataFile={setDriversLicenseFile}/>
                    </span>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h4>Проверка водительского удостоверения:</h4>
                        <CheckboxInput checked={driversLicenseChecked}
                                       setChecked={setDriversLicenseChecked}/>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: '15px'
                }}>

                    <span style={{display: 'flex', alignItems: 'center'}}>
                        <h4>Селфи с паспортом:</h4>
                        <ChooseFileInput setDataFile={setSelfieFile}/>
                    </span>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h4>Проверка фотографии с паспортом:</h4>
                        <CheckboxInput checked={selfieChecked}
                                       setChecked={setSelfieChecked}/>
                    </div>
                </div>
            </div>
            <Divider/>

            {taxiCars !== null && <div style={{padding:'15px', border: 'solid 1px #1976d2',borderRadius:8}}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <BasicSelect statuses={taxiCars} value={taxiCar} setValue={setTaxiCar}
                                 label={'машина для такси'}/>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h4>Удалить:</h4>
                        <CheckboxInput checked={removeCarTaxi}
                                       setChecked={setRemoveCarTaxi}/>
                    </div>
                </div>
                <Divider/>

                <div>
                    <NumberInput label={'Поездок всего'} setValue={setTotalTrips}
                                 value={totalTrips}/>
                </div>

                <div style={{padding: '15px 0 15px'}}>
                    <DisableDateInput value={client.lastTrip} label={'Последняя поездка'}/>
                </div>
                <Divider/>

                <div style={{padding: '15px 0 15px'}}>
                    <DisableDateInput value={client.created} label={'Создан'}/>
                </div>
                <Divider/>
            </div>}

            <ButtonsSet onRemoveClick={onRemoveClick} onSaveClick={onSaveClick}/>
        </>
    )
};

export default EditClient;